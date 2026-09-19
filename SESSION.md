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

## TODO / belum
- Angka social proof masih placeholder (500+, 10+, 2023) — perlu data aktual
- Testimonial masih contoh, belum testimonial asli
- Halaman `/panduan/[id]` isinya belum ada (masih "segera tersedia")
- `/resources` belum bisa diunduh (masih "segera tersedia")
- Link YouTube @pijakbumilearning perlu diverifikasi (ditebak)
- Belum ada auth, database, atau CMS — konten masih hardcoded di lib/konten.ts
- Belum di-push ke GitHub

## Dependencies
- @google/genai (Gemini API) — belum terpakai
- firebase-tools (devDep) — mungkin rencana Firebase
