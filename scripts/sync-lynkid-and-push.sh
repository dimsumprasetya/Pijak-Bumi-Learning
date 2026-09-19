#!/usr/bin/env bash
# Sinkronkan katalog Lynk.id -> lib/lynkid-data.json, lalu commit+push kalau berubah.
# Dipanggil cron Hermes dengan no_agent. Pola watchdog:
#   - TIDAK berubah  -> stdout kosong -> tidak ada notifikasi
#   - berubah        -> cetak ringkasan + push -> notifikasi terkirim
set -uo pipefail

export PATH="$HOME/bin:$PATH"
cd "C:/Users/dimsu/projects/Pijak-Bumi-Learning" || exit 1

OUT="$(node scripts/sync-lynkid.mjs 2>&1)"

if ! echo "$OUT" | grep -q "CHANGED"; then
  # tidak ada perubahan konten -> diam total (stdout kosong = tidak kirim apa-apa)
  exit 0
fi

# ada perubahan -> commit + push (memicu auto-deploy Vercel)
git add lib/lynkid-data.json
git -c user.name="dimsumprasetya" \
    -c user.email="dimsumprasetya@users.noreply.github.com" \
    commit -m "chore: sinkron katalog Lynk.id otomatis" -q
git push origin main >/dev/null 2>&1 && PUSHED=1 || PUSHED=0

# ringkasan untuk notifikasi
PRODUK=$(echo "$OUT" | grep -c '^  P ')
PROGRAM=$(echo "$OUT" | grep -c '^  G ')
echo "🛒 Katalog Lynk.id diperbarui: $PRODUK produk, $PROGRAM program."
if [ "$PUSHED" = "1" ]; then
  echo "Sudah di-push → situs otomatis ter-deploy."
else
  echo "⚠️ Push gagal — periksa git credential."
fi
echo ""
echo "$OUT" | grep -E '^  [PG] ' | head -30
