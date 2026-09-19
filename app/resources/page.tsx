import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Wrench } from 'lucide-react';
import { RESOURCES, KATEGORI } from '@/lib/konten';

export const metadata = {
  title: 'Tool & Resource — Pijak Bumi Learning',
  description: 'Worksheet, jurnal, checklist, dan template untuk membantu kebiasaan barumu berjalan.',
};

export default function ResourcesPage() {
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
          <Wrench className="w-4 h-4" />
          <span>Alat bantu belajar</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a261c] mb-3">Tool &amp; Resource</h1>
        <p className="text-[#5a6b5c] max-w-2xl leading-relaxed">
          Worksheet, jurnal, dan checklist supaya kebiasaan baru lebih mudah dijalani. Bukan teori
          &mdash; ini alat yang bisa langsung kamu pakai.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESOURCES.map((r) => {
          const kategori = KATEGORI.find((k) => k.id === r.kategori);
          return (
            <div
              key={r.id}
              className="bg-white border border-[#e1ded8] rounded-2xl overflow-hidden hover:border-[#304110] hover:shadow-md transition-all group flex flex-col"
            >
              <div className="relative h-44 w-full bg-[#e8eed9]">
                <Image
                  src={r.gambar}
                  alt={r.gambarAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[#5a6b5c]">
                  {r.tipe}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {kategori && (
                  <span className="text-xs font-semibold text-[#65826c] mb-2">
                    {kategori.emoji} {kategori.nama}
                  </span>
                )}

                <h2 className="text-lg font-bold text-[#1a261c] mb-2">{r.judul}</h2>
                <p className="text-[#5a6b5c] text-sm leading-relaxed flex-grow">{r.ringkas}</p>

                <span className="mt-6 pt-4 border-t border-[#f1efe9] text-sm font-semibold text-[#9ca3af]">
                  Segera tersedia
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 bg-[#f9f8f6] border border-[#e1ded8] rounded-2xl p-6 md:p-8 text-center">
        <h2 className="font-bold text-[#1a261c] mb-2">Mau resource tertentu?</h2>
        <p className="text-[#5a6b5c] text-sm mb-5 max-w-md mx-auto">
          Ceritakan apa yang kamu butuhkan &mdash; worksheet, checklist, atau template apa yang bakal
          membantumu belajar.
        </p>
        <Link
          href="/forum"
          className="inline-flex items-center gap-2 bg-[#304110] hover:bg-[#222e0b] text-white px-6 py-3 rounded-full font-medium transition-colors text-sm"
        >
          Usulkan di Komunitas <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
