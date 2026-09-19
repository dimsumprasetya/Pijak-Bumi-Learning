import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, FileText } from 'lucide-react';
import { PANDUAN, KATEGORI } from '@/lib/konten';

export const metadata = {
  title: 'Panduan Digital — Pijak Bumi Learning',
  description:
    'Panduan praktis untuk belajar mandiri dengan tempo sendiri, bisa dibaca ulang kapan saja.',
};

export default function PanduanPage() {
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
          <BookOpen className="w-4 h-4" />
          <span>Belajar mandiri, tempo sendiri</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a261c] mb-3">Panduan Digital</h1>
        <p className="text-[#5a6b5c] max-w-2xl leading-relaxed">
          Panduan praktis yang bisa kamu baca ulang kapan saja, sesuai kebutuhanmu. Nggak ada jadwal
          kelas, nggak ada tuntutan &mdash; kamu yang atur tempo belajarnya.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PANDUAN.map((p) => {
          const kategori = KATEGORI.find((k) => k.id === p.kategori);
          return (
            <Link
              key={p.id}
              href={`/panduan/${p.id}`}
              className="bg-white border border-[#e1ded8] rounded-2xl p-6 hover:border-[#304110] hover:shadow-md transition-all group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8eed9] flex items-center justify-center group-hover:bg-[#304110] transition-colors">
                  <FileText className="w-6 h-6 text-[#304110] group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-medium text-[#5a6b5c]">{p.halaman}</span>
              </div>

              {kategori && (
                <span className="text-xs font-semibold text-[#65826c] mb-2">
                  {kategori.emoji} {kategori.nama}
                </span>
              )}

              <h2 className="text-lg font-bold text-[#1a261c] mb-2">{p.judul}</h2>
              <p className="text-[#5a6b5c] text-sm leading-relaxed flex-grow">{p.ringkas}</p>

              <div className="mt-6 pt-4 border-t border-[#f1efe9] font-semibold text-[#304110] text-sm flex items-center justify-between">
                Lihat Panduan
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-16 bg-[#f9f8f6] border border-[#e1ded8] rounded-2xl p-6 md:p-8 text-center">
        <h2 className="font-bold text-[#1a261c] mb-2">Lebih suka belajar ditemani mentor?</h2>
        <p className="text-[#5a6b5c] text-sm mb-5 max-w-md mx-auto">
          Kalau kamu merasa lebih terbantu dengan pendampingan dan jadwal, kelas mungkin lebih cocok.
        </p>
        <Link
          href="/kelas"
          className="inline-flex items-center gap-2 bg-[#304110] hover:bg-[#222e0b] text-white px-6 py-3 rounded-full font-medium transition-colors text-sm"
        >
          Lihat Semua Kelas <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
