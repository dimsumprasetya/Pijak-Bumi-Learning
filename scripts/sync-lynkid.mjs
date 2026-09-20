#!/usr/bin/env node
/**
 * Sinkronkan katalog produk dari halaman Lynk.id ke data lokal situs.
 *
 * Lynk.id tidak punya API publik (semua endpoint 403), tapi halamannya
 * server-rendered — jadi kita scrape HTML-nya, parse kartu produk + program,
 * lalu tulis ke lib/lynkid-data.json. Dipakai untuk auto-update via cron.
 *
 * Keluaran:
 *   - menulis lib/lynkid-data.json (hanya kalau ada perubahan)
 *   - stdout baris terakhir: "CHANGED" atau "UNCHANGED"
 *
 *   node scripts/sync-lynkid.mjs
 */

import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'lib', 'lynkid-data.json');
const URL_PROFIL = 'https://lynk.id/pijakbumiid';
const BASE = 'https://lynk.id';

// lynk.id memblokir request tanpa header browser. Node fetch kadang tetap 403
// (TLS fingerprint), jadi pakai curl yang terbukti lolos.
const HEADERS = [
  '-A', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  '-H', 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  '-H', 'Accept-Language: id-ID,id;q=0.9,en;q=0.8',
];

// Sleep sinkron (tanpa dependensi) untuk backoff antar percobaan.
function sleepSync(ms) {
  try {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  } catch {
    /* kalau tidak didukung, lanjut tanpa jeda */
  }
}

// Fetch gagal sesekali (timeout/DNS/intermiten) — jangan langsung menyerah.
// curl punya retry internal + loop retry di sini sebagai backstop.
function fetchHtml(url) {
  const ATTEMPTS = 3;
  let lastErr;
  for (let i = 1; i <= ATTEMPTS; i++) {
    try {
      return execFileSync(
        'curl',
        [
          '-sS',
          '-L',
          '--max-time',
          '45',
          '--retry',
          '3',
          '--retry-delay',
          '2',
          '--retry-connrefused',
          '--retry-all-errors',
          ...HEADERS,
          url,
        ],
        { encoding: 'utf8', maxBuffer: 5 * 1024 * 1024 }
      );
    } catch (e) {
      lastErr = e;
      const code = e.status ?? 'n/a';
      const detail = String(e.stderr || '').trim().split('\n').filter(Boolean).pop() || e.message;
      if (i < ATTEMPTS) {
        console.error(`⚠️ Percobaan ${i}/${ATTEMPTS} gagal (exit ${code}): ${detail} — coba lagi...`);
        sleepSync(i * 3000);
      }
    }
  }
  throw lastErr;
}

function stripTags(s) {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function bersihUrl(u) {
  return u.replace(/&amp;/g, '&');
}

function main() {
  let html;
  try {
    html = fetchHtml(URL_PROFIL);
  } catch (e) {
    const code = e.status ?? 'n/a';
    const detail = String(e.stderr || '').trim().split('\n').filter(Boolean).pop() || e.message;
    console.error(`GAGAL fetch lynk.id setelah ${3} percobaan (curl exit ${code}): ${detail}`);
    process.exit(1);
  }
  if (!html || html.length < 2000) {
    console.error('GAGAL: respons kosong/terlalu pendek (kemungkinan diblokir).');
    process.exit(1);
  }

  // --- profil ---
  const avatar = bersihUrl(
    (html.match(/<img[^>]*src="(https:\/\/cdn\.lynkid\.my\.id\/profile\/[^"]+)"/) || [])[1] || ''
  );
  const descMatch = html.match(/Maw\(504px\)[^>]*>\s*([\s\S]*?)\s*<\/p>/);
  const description = descMatch ? stripTags(descMatch[1]) : '';
  const username = '@pijakbumiid';

  // ================= PRODUK TOKO =================
  // Dua layout:
  //  A. image-layout / grid-layout: gambar besar, title font-size:16px, harga Fw(700)
  //  B. D(b) ringkas: thumb "shop-image", title Fz(15px) Fx($1), harga di <span class="price">
  const products = [];
  const seenProduct = new Set();
  const blokRe = /<a\b([^>]*)href="(\/pijakbumiid\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let m;
  while ((m = blokRe.exec(html)) !== null) {
    const [, , href, body] = m;

    const img = bersihUrl((body.match(/<img[^>]*src="(https:\/\/cdn\.lynkid\.my\.id\/(?:products|draft-products)\/[^"]+)"/) || [])[1] || '');
    if (!img) continue;

    // judul: dua pola
    const t1 = (body.match(/<p class="filter-0 C\(#24253d\)" style="font-size:16px;">([\s\S]*?)<\/p>/) || [])[1];
    const t2 = (body.match(/<p class="filter-0 C\(#24253d\) Fz\(15px\)[^>]*>([\s\S]*?)<\/p>/) || [])[1];
    const title = t1 ?? t2;
    if (!title) continue;

    // harga: dua pola
    const p1 = (body.match(/<p class="filter-0 C\(#24253d\) Fw\(700\)" style="font-size:16px;">([\s\S]*?)<\/p>/) || [])[1];
    const p2 = (body.match(/<span class="price[^"]*">([\s\S]*?)<\/span>/) || [])[1];
    const price = p1 ?? p2;
    if (!price) continue;

    const original = (body.match(/<p class="Td\(lt\)[^>]*>([\s\S]*?)<\/p>/) || [])[1];

    const id = href.split('/').filter(Boolean).pop();
    if (seenProduct.has(id)) continue;
    seenProduct.add(id);

    products.push({
      id,
      title: stripTags(title),
      price: stripTags(price),
      originalPrice: original ? stripTags(original) : null,
      image: img,
      url: BASE + href,
    });
  }

  // ================= PROGRAM / KELAS =================
  const programs = [];
  const seenProgram = new Set();
  const progRe = /<p class="Fw\(700\)"[^>]*>([\s\S]*?)<\/p>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
  while ((m = progRe.exec(html)) !== null) {
    const judul = stripTags(m[1]);
    const deskripsi = stripTags(m[2]);
    if (!judul) continue;

    // ambil jendela: dari ~700 char sebelum judul s.d. ~1600 char setelahnya
    const start = Math.max(0, m.index - 700);
    const end = Math.min(html.length, m.index + m[0].length + 1600);
    const window = html.slice(start, end);

    const cta = (window.match(/href="(\/pijakbumiid\/[^"]+)"[^>]*>\s*(?:Daftar Sekarang|Pelajari Lebih Lanjut)/) || [])[1];
    if (!cta) continue; // bukan program berbayar (CTA), lewati

    const harga = (window.match(/<p class="filter-0 C\(#24253d\) Fw\(700\)"[^>]*>([\s\S]*?)<\/p>/) || [])[1];
    const img = bersihUrl((window.match(/<img[^>]*src="(https:\/\/cdn\.lynkid\.my\.id\/[^"]+)"/) || [])[1] || '');

    const id = cta.split('/').filter(Boolean).pop();
    if (seenProgram.has(id)) continue;
    seenProgram.add(id);

    programs.push({
      id,
      title: judul,
      description: deskripsi,
      price: harga ? stripTags(harga) : '',
      image: img,
      url: BASE + cta,
      cta: window.includes('Pelajari Lebih Lanjut') ? 'Pelajari Lebih Lanjut' : 'Daftar Sekarang',
    });
  }

  const data = {
    source: URL_PROFIL,
    fetchedAt: new Date().toISOString(),
    profile: { username, description, avatar },
    products,
    programs,
  };

  // Kanonikalisasi untuk deteksi perubahan NYATA:
  // - urutkan produk/program berdasar id (order di lynk.id bisa goyah)
  // - buang query string (?width=...&quality=...) dari URL gambar (param ukuran, bukan konten)
  const tanpaQuery = (u) => u.split('?')[0];
  const kanonikItem = (it) => ({
    ...it,
    image: tanpaQuery(it.image),
    ...(it.avatar ? { avatar: tanpaQuery(it.avatar) } : {}),
  });
  const kanonik = (arr) =>
    [...arr].map(kanonikItem).sort((a, b) => String(a.id).localeCompare(String(b.id)));

  const konten = JSON.stringify({
    profile: { ...data.profile, avatar: tanpaQuery(data.profile.avatar) },
    products: kanonik(products),
    programs: kanonik(programs),
  });

  let changed = true;
  if (existsSync(OUT)) {
    try {
      const lama = JSON.parse(readFileSync(OUT, 'utf8'));
      const kontenLama = JSON.stringify({
        profile: { ...lama.profile, avatar: tanpaQuery(lama.profile?.avatar || '') },
        products: kanonik(lama.products || []),
        programs: kanonik(lama.programs || []),
      });
      changed = konten !== kontenLama;
    } catch {
      changed = true; // file korup -> tulis ulang
    }
  }

  if (changed) writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n');

  console.log(`profil : ${username} — "${description}"`);
  console.log(`produk : ${products.length} | program: ${programs.length}`);
  for (const p of products) {
    const harga = p.originalPrice ? `${p.price} (coret: ${p.originalPrice})` : p.price;
    console.log(`  P ${p.title}  [${harga}]`);
  }
  for (const p of programs) {
    console.log(`  G ${p.title}  [${p.price}]  -> ${p.cta}`);
  }
  console.log(changed ? 'CHANGED' : 'UNCHANGED');
}

main();
