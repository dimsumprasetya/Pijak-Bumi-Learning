#!/usr/bin/env node
/**
 * Optimasi foto di public/images: resize + encode ulang jadi JPEG asli.
 * Dipakai setelah scripts/fetch-photos.mjs.
 *
 *   node scripts/optimize-photos.mjs
 */

import { readdirSync, statSync, renameSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'public', 'images');

const MAX_WIDTH = 1600; // cukup untuk kartu & hero di layar besar
const QUALITY = 80;
// opsional: batasi ke nama tertentu, mis. `node scripts/optimize-photos.mjs hero res-kebun`
const ONLY = process.argv.slice(2).filter((a) => !a.startsWith('--'));

function kb(n) {
  return `${(n / 1024).toFixed(0)} KB`;
}

async function main() {
  const files = readdirSync(DIR).filter(
    (f) =>
      /\.(jpe?g|png|webp)$/i.test(f) &&
      (!ONLY.length || ONLY.includes(f.replace(/\.[^.]+$/, '')))
  );
  let sebelum = 0;
  let sesudah = 0;

  for (const f of files) {
    const src = path.join(DIR, f);
    const base = f.replace(/\.[^.]+$/, '');
    const target = path.join(DIR, `${base}.jpg`);
    const sizeBefore = statSync(src).size;
    sebelum += sizeBefore;

    const meta = await sharp(src).metadata();

    const out = await sharp(src)
      .rotate() // hormati EXIF orientation
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();

    // tulis dulu ke .tmp supaya aman, lalu pindahkan
    const tmp = path.join(DIR, `${base}.__tmp.jpg`);
    const { writeFileSync } = await import('node:fs');
    writeFileSync(tmp, out);

    if (target !== src) unlinkSync(src);
    renameSync(tmp, target);

    const sizeAfter = statSync(target).size;
    sesudah += sizeAfter;

    const tandai = sizeAfter < sizeBefore ? '↓' : '=';
    console.log(
      `${tandai} ${base.padEnd(26)} ${meta.format ?? '?'} ${meta.width}x${meta.height} ` +
        `${kb(sizeBefore).padStart(8)} -> ${kb(sizeAfter).padStart(8)}`
    );
  }

  console.log('\n=== RINGKASAN ===');
  console.log(`file     : ${files.length}`);
  console.log(`sebelum  : ${(sebelum / 1024 / 1024).toFixed(1)} MB`);
  console.log(`sesudah  : ${(sesudah / 1024 / 1024).toFixed(1)} MB`);
  console.log(
    `hemat    : ${(100 - (sesudah / sebelum) * 100).toFixed(0)}%  (${((sebelum - sesudah) / 1024 / 1024).toFixed(1)} MB)`
  );
}

main().catch((err) => {
  console.error('FATAL:', err.message);
  process.exit(1);
});
