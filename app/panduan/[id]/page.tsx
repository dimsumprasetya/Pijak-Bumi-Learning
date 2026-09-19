import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { PANDUAN, KATEGORI } from '@/lib/konten';

export function generateStaticParams() {
  return PANDUAN.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const panduan = PANDUAN.find((p) => p.id === id);
  if (!panduan) return { title: 'Panduan tidak ditemukan — Pijak Bumi Learning' };
  return {
    title: `${panduan.judul} — Pijak Bumi Learning`,
    description: panduan.ringkas,
  };
}

export default async function PanduanDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const panduan = PANDUAN.find((p) => p.id === id);

  if (!panduan) notFound();

  const kategori = KATEGORI.find((k) => k.id === panduan.kategori);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/panduan"
        className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#2c3e2e] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Panduan
      </Link>

      <div className="bg-white border border-[#e1ded8] rounded-3xl p-8 md:p-12">
        <div className="w-16 h-16 rounded-2xl bg-[#e8eed9] flex items-center justify-center mb-6">
          <FileText className="w-8 h-8 text-[#304110]" />
        </div>

        {kategori && (
          <span className="inline-block text-xs font-semibold text-[#65826c] mb-4">
            {kategori.emoji} {kategori.nama}
          </span>
        )}

        <h1 className="text-3xl md:text-4xl font-bold text-[#1a261c] mb-4">{panduan.judul}</h1>
        <p className="text-lg text-[#5a6b5c] leading-relaxed mb-6">{panduan.ringkas}</p>
        <p className="text-sm text-[#9ca3af] mb-10">{panduan.halaman}</p>

        <div className="bg-[#f9f8f6] p-6 rounded-2xl border border-[#e1ded8] mb-8">
          <p className="text-sm text-[#5a6b5c] leading-relaxed">
            Isi panduan lengkap akan segera tersedia di sini. Untuk sementara, kalau kamu ingin
            versi lengkapnya lebih dulu, silakan hubungi kami lewat komunitas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Link
            href="/forum"
            className="bg-white hover:bg-[#f1efe9] text-[#2c3e2e] border border-[#e1ded8] px-8 py-3 rounded-full font-medium transition-colors text-center"
          >
            Tanya di Komunitas
          </Link>
          <span
            className="bg-[#e1ded8] text-[#9ca3af] px-8 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 cursor-not-allowed"
            aria-disabled="true"
          >
            <Download className="w-4 h-4" /> Segera tersedia
          </span>
        </div>
      </div>
    </div>
  );
}
