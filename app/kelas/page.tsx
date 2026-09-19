import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, GraduationCap, Users } from 'lucide-react';
import { KELAS, KATEGORI } from '@/lib/konten';

export const metadata = {
  title: 'Kelas — Pijak Bumi Learning',
  description:
    'Program belajar bersama mentor: materi, pendampingan, dan latihan untuk membangun kebiasaan hidup yang lebih berkelanjutan.',
};

const warnaLevel: Record<string, string> = {
  Pemula: 'bg-[#e8eed9] text-[#222e0b]',
  Menengah: 'bg-[#fdf0d5] text-[#6b4e00]',
  Lanjutan: 'bg-[#eadcf5] text-[#4a2b66]',
};

export default function KelasPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#2c3e2e] transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
      </Link>

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8eed9] text-[#222e0b] text-sm font-medium mb-4">
          <GraduationCap className="w-4 h-4" />
          <span>Belajar bersama mentor</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a261c] mb-3">Kelas</h1>
        <p className="text-[#5a6b5c] max-w-2xl leading-relaxed">
          Program dengan proses belajar lebih lengkap: materi terstruktur, pendampingan, dan
          latihan. Cocok kalau kamu ingin belajar sambil ditemani.
        </p>
      </div>

      {/* Kategori */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {KATEGORI.map((k) => (
          <div key={k.id} className="bg-white border border-[#e1ded8] rounded-xl p-4">
            <div className="text-lg mb-1">{k.emoji}</div>
            <div className="font-semibold text-[#1a261c] text-sm mb-1">{k.nama}</div>
            <div className="text-xs text-[#5a6b5c] leading-relaxed">{k.deskripsi}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {KELAS.map((k) => (
          <Link
            key={k.id}
            href={`/kelas/${k.id}`}
            className="bg-white border border-[#e1ded8] rounded-2xl overflow-hidden hover:border-[#304110] hover:shadow-md transition-all group flex flex-col"
          >
            <div className="h-32 bg-gradient-to-br from-[#e8eed9] to-[#c8d6b0] flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-[#304110]" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${warnaLevel[k.level]}`}
                >
                  {k.level}
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-[#5a6b5c]">
                  <Clock className="w-3.5 h-3.5" /> {k.durasi}
                </span>
              </div>

              <h2 className="text-lg font-bold text-[#1a261c] mb-2">{k.judul}</h2>
              <p className="text-[#5a6b5c] text-sm leading-relaxed flex-grow">{k.ringkas}</p>

              <div className="mt-6 pt-4 border-t border-[#f1efe9] font-semibold text-[#304110] text-sm flex items-center justify-between">
                Lihat Detail Kelas
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-[#f9f8f6] border border-[#e1ded8] rounded-2xl p-6 md:p-8 text-center">
        <Users className="w-8 h-8 text-[#304110] mx-auto mb-3" />
        <h2 className="font-bold text-[#1a261c] mb-2">Belum yakin mau mulai dari kelas mana?</h2>
        <p className="text-[#5a6b5c] text-sm mb-5">
          Jawab satu pertanyaan singkat, kami rekomendasikan langkah pertamamu.
        </p>
        <Link
          href="/#mulai"
          className="inline-flex items-center gap-2 bg-[#304110] hover:bg-[#222e0b] text-white px-6 py-3 rounded-full font-medium transition-colors text-sm"
        >
          Temukan yang cocok untukmu <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
