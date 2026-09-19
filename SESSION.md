# Session: Pijak Bumi Learning Development
Started: 2026-09-18

## Context
- Pijak Bumi Learning (PBL) BERDIRI SENDIRI. Bukan bagian dari Pijak Bumi (brand sepatu
  Bandung), tidak ada kaitan sama sekali.
- GitHub: https://github.com/dimsumprasetya/Pijak-Bumi-Learning
- Live: https://pijak-bumi-learning.vercel.app
- Repo lokal: C:\Users\dimsu\projects\Pijak-Bumi-Learning
- Tech: Next.js 15 + Tailwind CSS 4 + React 19 + TypeScript
- Instagram: https://www.instagram.com/pijakbumilearning/
- Founder: Dewi

## Status GitHub auth
- `gh` 2.52.0 terpasang di C:\Users\dimsu\bin\gh.exe (PATH perlu: export PATH="$HOME/bin:$PATH")
- BELUM ter-autentikasi. Device flow beberapa kali expired sebelum kode dimasukkan.
- Kalau mau push: ulangi device flow, atau pakai PAT / SSH.

## Yang sudah dikerjakan — sesi 2026-09-19
Menyesuaikan website dengan brief landing page PBL (lihat BRIEF.md).
Sumber brief: https://chatgpt.com/share/6aae2f64-0fbc-83ec-bcf4-a3480842d3db

### Landing page (`app/page.tsx`) — 9 section
1. Hero + CTA "Lihat Produk Belajar" + keyword Kelas Online · Panduan Praktis · Komunitas
2. Kenapa PBL + 3 prinsip (Praktis, Membumi, Berkelanjutan)
3. Belajar Apa di PBL — 4 kategori
4. Produk Belajar — Kelas / Panduan Digital / Tool & Resource
5. "Mulai dari Mana?" quiz interaktif (`components/mulai-dari-mana.tsx`)
6. Cerita / social proof + testimonial (angka masih placeholder)
7. Tentang founder — Dewi
8. Community
9. CTA akhir "Yuk, mulai pijakkan langkahmu"

### Route
- `/` landing
- `/kelas` + `/kelas/[id]` (4 kelas) — menggantikan `/modul` yang lama (dihapus)
- `/panduan` + `/panduan/[id]` (4 panduan)
- `/resources` (4 tool)
- `/kuis`, `/forum`
- Footer baru di `app/layout.tsx`

### Data terpusat
`lib/konten.ts` — KATEGORI, KELAS, PANDUAN, RESOURCES, SOSIAL

### Dihapus / diperbaiki
- Route `/modul` dihapus (diganti `/kelas`)
- Semua copy "Sebagai bagian dari Pijakbumi" dan review "sepatu Pijakbumi" di forum dihapus
- Branding ditulis "Pijak Bumi Learning" (pakai spasi), bukan "Pijakbumi Learning"

### Verifikasi
- `npm run build` sukses, 17 static pages
- `npx next lint` bersih
- Semua route HTTP 200, `/modul` 404
- Copy brief dicek satu per satu di HTML ter-render — semua ada

## Foto (sesi lanjutan)
Situs sebelumnya penuh icon; sekarang pakai foto asli. Caranya sama seperti ceritainaja.net:
unduh foto dari **Pexels API** ke `public/images/`, lalu dipakai lewat `next/image`.

- `scripts/fetch-photos.mjs` — unduh 26 foto. Pakai `PEXELS_API_KEY` dari
  `~/AppData/Local/hermes/.env`. Bisa pilih sebagian:
  `node scripts/fetch-photos.mjs res-kebun hero` / `--force` untuk timpa.
- `scripts/optimize-photos.mjs` — resize maks 1600px + encode JPEG q80.
  Hasil: 9.9 MB → 4.5 MB. Bisa juga dibatasi per nama.
- Peta nama file → query Pexels ada di `fetch-photos.mjs` (objek `FOTO`).
  Kalau ada foto yang tidak cocok, ubah query-nya di situ lalu ambil ulang.

Foto dipakai di: hero, kenapa PBL, 4 kartu kategori, 3 kartu produk, cerita,
founder, komunitas, CTA, plus header kartu di /kelas, /panduan, /resources, dan
halaman detailnya. Semua gambar + alt-nya terdaftar di `lib/konten.ts`.

Catatan: foto `founder.jpg` sengaja dipilih yang **tanpa wajah** (tangan + tanah),
supaya tidak terkesan memakai wajah orang sebagai Dewi. Ganti dengan foto asli Dewi
kalau sudah ada.

## Logo
Logo resmi dipasang di navbar + footer (+ favicon). Sumber: `Desktop/LOGO PIJAK BUMI.png`
(500x500 PNG, latar cream solid, bukan transparan).

Cara memasang ulang kalau logo diganti:
- Latar dihilangkan jadi transparan (keying warna + un-premultiply) → `public/images/logo-pijak-bumi.png`
- Versi terang untuk latar gelap → `public/images/logo-pijak-bumi-terang.png`
  (warna #e8eed9, dipakai bila nanti perlu logo di section hijau tua)
- Favicon → `app/icon.png` (Next.js app router otomatis). Favicon SENGAJA
  memakai latar cream asli supaya terbaca di tab browser terang maupun gelap.

**PENTING soal ukuran logo:** logo ini bertumpuk (stacked). Kata "pijak bumi."
mengisi ~91% tinggi, kata "learning" hanya ~9% (23px dari 269px). Akibatnya
"learning" baru terbaca jelas di tinggi render **80px**; di bawah itu jadi cetakan
halus. Karena itu: navbar pakai h-12 (48px, "pijak bumi." tajam), footer pakai
h-20 (80px, seluruh logo terbaca). Kalau nanti mau "learning" terbaca di navbar,
perlu varian logo horizontal — jangan potong/mengubah logo tanpa izin user.

## Integrasi Lynk.id
Katalog produk/program ASLI di-scrape dari `https://lynk.id/pijakbumiid` (tanpa API
publik, HTML server-rendered) → `lib/lynkid-data.json` → halaman `/toko`.

- `scripts/sync-lynkid.mjs` (scrape+parse, tulis data kalau berubah)
- `scripts/sync-lynkid-and-push.sh` (wrapper cron: commit+push saat berubah)
- `lib/lynkid.ts` + `app/toko/page.tsx`
- Cron `370d524275a0` every 3h, no_agent, Telegram 7271250872.
- 8 produk + 5 program saat ini. Link checkout tetap mengarah ke lynk.id.

## TODO / belum
- Angka social proof masih placeholder (500+, 10+, 2023) — perlu data aktual
- Testimonial masih contoh, belum testimonial asli
- Halaman `/panduan/[id]` isinya belum ada (masih "segera tersedia")
- `/resources` belum bisa diunduh (masih "segera tersedia")
- Link YouTube @pijakbumilearning perlu diverifikasi (ditebak)
- Belum ada auth, database, atau CMS — konten masih hardcoded di lib/konten.ts
- Sudah di-push ke GitHub: commit 31e501c di `main`, dan Vercel auto-deploy —
  live site sudah memuat versi baru (dicek 2026-09-19).

## Kredensial / akses
- gh 2.52.0 di C:\Users\dimsu\bin\gh.exe, sudah login sebagai `dimsumprasetya`
  (auth lewat device flow OAuth, scope: repo, read:org, gist)
- git global identity: dimsumprasetya / dimsumprasetya@users.noreply.github.com

## Cara push lagi kalau perlu
```
export PATH="$HOME/bin:$PATH"     # gh
cd C:/Users/dimsu/projects/Pijak-Bumi-Learning
git add -A && git commit -m "..."
git push origin main
```

## Dependencies
- @google/genai (Gemini API) — belum terpakai
- firebase-tools (devDep) — mungkin rencana Firebase
