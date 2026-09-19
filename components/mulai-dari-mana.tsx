'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sprout, Leaf, Droplets, BookOpen, ArrowRight, RotateCcw } from 'lucide-react';

const PILIHAN = [
  {
    id: 'berkelanjutan',
    ikon: Sprout,
    label: 'Aku ingin mulai hidup lebih berkelanjutan',
    rekomendasi: 'Kelas Zero Waste',
    alasan: 'Mulai dari kebiasaan paling dekat: memilah sampah, mengurangi plastik sekali pakai, dan mengenal 6R.',
    href: '/kelas/zero-waste',
    cta: 'Ikuti Kelas Zero Waste',
  },
  {
    id: 'alam',
    ikon: Leaf,
    label: 'Aku ingin belajar keterampilan dari alam',
    rekomendasi: 'Panduan Meramban',
    alasan: 'Belajar mengenali tanaman di sekitar rumah dan apa saja yang bisa dimanfaatkan dengan aman.',
    href: '/panduan/meramban',
    cta: 'Lihat Panduan Meramban',
  },
  {
    id: 'kesiapsiagaan',
    ikon: Droplets,
    label: 'Aku ingin lebih siap menghadapi krisis',
    rekomendasi: 'Kelas Ketahanan Air',
    alasan: 'Membangun ketahanan air keluarga lewat langkah sederhana yang bisa diterapkan di rumah.',
    href: '/kelas/ketahanan-air',
    cta: 'Ikuti Kelas Ketahanan Air',
  },
  {
    id: 'mandiri',
    ikon: BookOpen,
    label: 'Aku lebih suka belajar sendiri',
    rekomendasi: 'Panduan Digital',
    alasan: 'Belajar dengan tempo sendiri lewat panduan praktis yang bisa dibaca ulang kapan saja.',
    href: '/panduan',
    cta: 'Lihat Semua Panduan',
  },
];

export default function MulaiDariMana() {
  const [dipilih, setDipilih] = useState<string | null>(null);
  const hasil = PILIHAN.find((p) => p.id === dipilih);

  return (
    <div className="bg-white border border-[#e1ded8] rounded-3xl p-6 md:p-10">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8eed9] text-[#222e0b] text-sm font-medium mb-4">
          <Sprout className="w-4 h-4" />
          <span>Baru kenal PBL?</span>
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#1a261c]">
          Mulai dari sini 👇
        </h3>
        <p className="text-[#5a6b5c] mt-2">
          Pilih yang paling menggambarkan dirimu sekarang — nanti kami rekomendasikan langkah pertamanya.
        </p>
      </div>

      {!hasil ? (
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {PILIHAN.map((p) => {
            const Ikon = p.ikon;
            return (
              <button
                key={p.id}
                onClick={() => setDipilih(p.id)}
                className="text-left p-5 rounded-2xl border-2 border-[#e1ded8] hover:border-[#304110] hover:bg-[#f9f8f6] transition-all group flex items-start gap-4"
              >
                <span className="shrink-0 w-11 h-11 rounded-xl bg-[#e8eed9] flex items-center justify-center group-hover:bg-[#304110] transition-colors">
                  <Ikon className="w-5 h-5 text-[#304110] group-hover:text-white transition-colors" />
                </span>
                <span className="text-[#2c3e2e] font-medium leading-snug pt-1.5">
                  {p.label}
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#f9f8f6] border border-[#e1ded8] rounded-2xl p-6 md:p-8 text-center">
            <div className="text-sm font-semibold text-[#5a6b5c] uppercase tracking-wide mb-3">
              Rekomendasi untukmu
            </div>
            <div className="text-2xl md:text-3xl font-bold text-[#1a261c] mb-4">
              {hasil.rekomendasi}
            </div>
            <p className="text-[#5a6b5c] leading-relaxed mb-8">{hasil.alasan}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={hasil.href}
                className="bg-[#304110] hover:bg-[#222e0b] text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2"
              >
                {hasil.cta} <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setDipilih(null)}
                className="bg-white hover:bg-[#f1efe9] text-[#2c3e2e] border border-[#e1ded8] px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Pilih ulang
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
