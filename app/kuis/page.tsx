'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

const SOAL = [
  {
    pertanyaan: 'Apa tujuan utama dari ekonomi sirkular?',
    opsi: [
      'Memproduksi barang sebanyak mungkin dengan biaya murah',
      'Mempertahankan nilai produk, bahan, dan sumber daya selama mungkin di dalam perekonomian',
      'Meningkatkan konsumsi masyarakat terhadap produk baru',
      'Membuang sampah ke laut agar lahan tetap bersih',
    ],
    jawabanBenar: 1,
  },
  {
    pertanyaan: 'Mana dari berikut ini yang BUKAN termasuk prinsip 3R?',
    opsi: [
      'Reduce (Mengurangi)',
      'Reuse (Menggunakan Kembali)',
      'Refuse (Menolak)',
      'Replace (Mengganti)',
    ],
    jawabanBenar: 3,
  },
  {
    pertanyaan: 'Berapa lama rata-rata kantong plastik dapat terurai secara alami di lingkungan?',
    opsi: ['1-5 Tahun', '10-20 Tahun', '100-500 Tahun', 'Plastik tidak pernah terurai'],
    jawabanBenar: 2,
  },
];

export default function KuisPage() {
  const [soalKe, setSoalKe] = useState(0);
  const [jawabanDipilih, setJawabanDipilih] = useState<number | null>(null);
  const [selesai, setSelesai] = useState(false);
  const [skor, setSkor] = useState(0);

  const soal = SOAL[soalKe];

  const lanjut = () => {
    if (jawabanDipilih === soal.jawabanBenar) setSkor((s) => s + 1);

    if (soalKe + 1 < SOAL.length) {
      setSoalKe((s) => s + 1);
      setJawabanDipilih(null);
    } else {
      setSelesai(true);
    }
  };

  const ulangi = () => {
    setSoalKe(0);
    setJawabanDipilih(null);
    setSelesai(false);
    setSkor(0);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#2c3e2e] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
      </Link>

      {!selesai ? (
        <div className="bg-white border border-[#e1ded8] rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[#5a6b5c] font-medium text-sm">
              Pertanyaan {soalKe + 1} dari {SOAL.length}
            </span>
            <span className="bg-[#e8eed9] text-[#222e0b] px-3 py-1 rounded-full text-sm font-bold">
              Kuis Lingkungan
            </span>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-[#1a261c] mb-8 leading-relaxed">
            {soal.pertanyaan}
          </h1>

          <div className="space-y-4 mb-8">
            {soal.opsi.map((opsi, i) => (
              <button
                key={opsi}
                onClick={() => setJawabanDipilih(i)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  jawabanDipilih === i
                    ? 'border-[#304110] bg-[#f2f6f3]'
                    : 'border-[#e1ded8] hover:border-[#b5b1a8] bg-white'
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold mr-3 ${
                    jawabanDipilih === i ? 'bg-[#304110] text-white' : 'bg-[#f1efe9] text-[#5a6b5c]'
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span
                  className={jawabanDipilih === i ? 'text-[#1a261c] font-medium' : 'text-[#5a6b5c]'}
                >
                  {opsi}
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={lanjut}
              disabled={jawabanDipilih === null}
              className={`px-8 py-3 rounded-full font-medium transition-colors ${
                jawabanDipilih !== null
                  ? 'bg-[#304110] hover:bg-[#222e0b] text-white'
                  : 'bg-[#e1ded8] text-[#9ca3af] cursor-not-allowed'
              }`}
            >
              {soalKe + 1 === SOAL.length ? 'Selesai Kuis' : 'Lanjut'}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-[#e1ded8] rounded-3xl p-8 md:p-12 shadow-sm text-center">
          <div className="w-24 h-24 bg-[#e8eed9] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-[#304110]" />
          </div>
          <h1 className="text-3xl font-bold text-[#1a261c] mb-2">Kuis Selesai!</h1>
          <p className="text-[#5a6b5c] mb-8">
            Terima kasih sudah menguji pengetahuanmu. Langkah kecil tetap langkah.
          </p>

          <div className="bg-[#f9f8f6] border border-[#e1ded8] rounded-2xl p-6 mb-8 inline-block min-w-[200px]">
            <div className="text-5xl font-extrabold text-[#304110] mb-2">
              {skor}/{SOAL.length}
            </div>
            <div className="text-[#5a6b5c] font-medium">Jawaban Benar</div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={ulangi}
              className="bg-[#304110] hover:bg-[#222e0b] text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Ulangi Kuis
            </button>
            <Link
              href="/kelas"
              className="bg-white hover:bg-[#f1efe9] text-[#2c3e2e] border border-[#e1ded8] px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              Lanjut Belajar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
