#!/usr/bin/env node
/**
 * Ambil foto asli dari Pexels untuk website Pijak Bumi Learning.
 *
 * Cara pakai:
 *   PEXELS_API_KEY=xxx node scripts/fetch-photos.mjs
 *   PEXELS_API_KEY=xxx node scripts/fetch-photos.mjs --force   (timpa yang sudah ada)
 *
 * Foto disimpan ke public/images/<nama>.jpg dan direferensikan sebagai /images/<nama>.jpg
 * (pola yang sama dipakai di ceritainaja.net).
 */

import { mkdirSync, existsSync, writeFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'images');

const KEY = process.env.PEXELS_API_KEY;
const FORCE = process.argv.includes('--force');
// opsional: batasi ke nama tertentu, mis. `node scripts/fetch-photos.mjs res-kebun hero`
const ONLY = process.argv.slice(2).filter((a) => !a.startsWith('--'));

// nama file -> query Pexels (Inggris, hasil lebih relevan)
const FOTO = {
  // --- halaman depan ---
  'hero': 'hands planting seedling in soil',
  'kenapa': 'family home garden tropical plants',
  'kategori-berkelanjutan': 'zero waste reusable jars sustainable living',
  'kategori-alam': 'foraging wild herbs leaves basket',
  'kategori-kesiapsiagaan': 'rainwater collection storage water',
  'kategori-rumah': 'handmade natural craft home',
  'produk-kelas': 'workshop group learning together',
  'produk-panduan': 'open book reading guide nature',
  'produk-resources': 'blank notebook pencil flat lay minimal',
  'founder': 'hands holding green leaves plant',
  'komunitas': 'community people gardening outdoors together',
  'cta': 'bare feet walking on grass',
  'cerita-1': 'women gardening together smiling outdoor',
  'cerita-2': 'group workshop outdoor nature education',

  // --- kelas ---
  'kelas-zero-waste': 'reusable containers zero waste kitchen',
  'kelas-ketahanan-air': 'water tap pouring saving water',
  'kelas-meramban': 'wild edible green plants forest',
  'kelas-eco-enzyme': 'fermentation glass jar citrus peels',

  // --- panduan ---
  'panduan-meramban': 'pressed dried herbs botanical plants',
  'panduan-eco-enzyme': 'glass jar liquid natural ingredients wooden table',
  'panduan-kompos': 'compost organic soil waste',
  'panduan-ketahanan-air': 'water container tank well',

  // --- resources ---
  'res-jurnal': 'habit tracker notebook pen desk',
  'res-audit-air': 'water meter gauge household',
  'res-kebun': 'raised garden bed vegetables backyard',
  'res-template': 'clean desk notebook planner minimal',
};

async function cariFoto(query) {
  const url =
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}` +
    `&per_page=3&orientation=landscape&size=large`;
  const res = await fetch(url, { headers: { Authorization: KEY } });
  if (!res.ok) {
    throw new Error(`Pexels ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  const photos = data.photos ?? [];
  if (!photos.length) return null;
  // pakai hasil pertama yang cukup besar
  const p = photos.find((x) => x.width >= 1200) ?? photos[0];
  return {
    url: p.src.large2x || p.src.large || p.src.original,
    alt: p.alt || query,
    fotografer: p.photographer,
    halaman: p.url,
  };
}

async function unduh(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 4096) throw new Error('file terlalu kecil / bukan gambar');
  writeFileSync(dest, buf);
  return buf.length;
}

function kb(n) {
  return `${(n / 1024).toFixed(0)} KB`;
}

async function main() {
  if (!KEY) {
    console.error('PEXELS_API_KEY belum di-set. Jalankan dengan PEXELS_API_KEY=xxx node scripts/fetch-photos.mjs');
    process.exit(1);
  }

  mkdirSync(OUT_DIR, { recursive: true });

  const hasil = { ok: [], skip: [], gagal: [] };

  for (const [nama, query] of Object.entries(FOTO)) {
    if (ONLY.length && !ONLY.includes(nama)) continue;
    const dest = path.join(OUT_DIR, `${nama}.jpg`);

    if (!FORCE && existsSync(dest) && statSync(dest).size > 4096) {
      hasil.skip.push(nama);
      console.log(`SKIP   ${nama.padEnd(26)} (sudah ada)`);
      continue;
    }

    try {
      const foto = await cariFoto(query);
      if (!foto) {
        hasil.gagal.push(`${nama} (tidak ada hasil untuk "${query}")`);
        console.log(`GAGAL  ${nama.padEnd(26)} tidak ada hasil`);
        continue;
      }
      const size = await unduh(foto.url, dest);
      hasil.ok.push(nama);
      console.log(`OK     ${nama.padEnd(26)} ${kb(size).padStart(8)}  <- ${foto.fotografer}`);
    } catch (err) {
      hasil.gagal.push(`${nama}: ${err.message}`);
      console.log(`GAGAL  ${nama.padEnd(26)} ${err.message}`);
    }

    // sopan ke API
    await new Promise((r) => setTimeout(r, 350));
  }

  console.log('\n=== RINGKASAN ===');
  console.log(`berhasil : ${hasil.ok.length}`);
  console.log(`dilewati : ${hasil.skip.length}`);
  console.log(`gagal    : ${hasil.gagal.length}`);
  if (hasil.gagal.length) {
    console.log('\nyang gagal:');
    hasil.gagal.forEach((g) => console.log('  - ' + g));
  }
  console.log(`\nfolder: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error('FATAL:', err.message);
  process.exit(1);
});
