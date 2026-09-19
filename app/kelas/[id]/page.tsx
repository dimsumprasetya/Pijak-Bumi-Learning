import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, CheckCircle, Users, Monitor } from 'lucide-react';
import { KELAS, KATEGORI } from '@/lib/konten';

export function generateStaticParams() {
  return KELAS.map((k) => ({ id: k.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const kelas = KELAS.find((k) => k.id === id);
  if (!kelas) return { title: 'Kelas tidak ditemukan — Pijak Bumi Learning' };
  return {
    title: `${kelas.judul} — Pijak Bumi Learning`,
    description: kelas.ringkas,
  };
}

export default async function KelasDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const kelas = KELAS.find((k) => k.id === id);

  if (!kelas) notFound();

  const kategori = KATEGORI.find((k) => k.id === kelas.kategori);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/kelas"
        className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#2c3e2e] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Kelas
      </Link>

      <div className="bg-white border border-[#e1ded8] rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-4 text-sm font-medium text-[#5a6b5c] mb-6 flex-wrap">
          <span className="bg-[#e8eed9] text-[#222e0b] px-3 py-1 rounded-full">{kelas.level}</span>
          {kategori && (
            <span className="px-3 py-1 rounded-full border border-[#e1ded8]">
              {kategori.emoji} {kategori.nama}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {kelas.durasi}
          </span>
          <span className="flex items-center gap-1">
            <Monitor className="w-4 h-4" /> {kelas.format}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#1a261c] mb-6">{kelas.judul}</h1>

        <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] mb-8 bg-[#e8eed9]">
          <Image
            src={kelas.gambar}
            alt={kelas.gambarAlt}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <p className="text-lg text-[#5a6b5c] leading-relaxed mb-10">{kelas.ringkas}</p>

        <h2 className="text-xl font-bold text-[#1a261c] mb-4">Yang akan kamu pelajari</h2>
        <ul className="space-y-3 mb-10">
          {kelas.materi.map((m) => (
            <li key={m} className="flex gap-3 text-[#5a6b5c]">
              <CheckCircle className="w-5 h-5 text-[#304110] shrink-0 mt-0.5" />
              <span>{m}</span>
            </li>
          ))}
        </ul>

        <div className="bg-[#f9f8f6] p-6 rounded-2xl border border-[#e1ded8] mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-[#304110]" />
            <h3 className="font-bold text-[#1a261c]">Untuk siapa kelas ini</h3>
          </div>
          <p className="text-sm text-[#5a6b5c] leading-relaxed">{kelas.untukSiapa}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Link
            href="/#mulai"
            className="bg-white hover:bg-[#f1efe9] text-[#2c3e2e] border border-[#e1ded8] px-8 py-3 rounded-full font-medium transition-colors text-center"
          >
            Lihat rekomendasi lain
          </Link>
          <Link
            href="/forum"
            className="bg-[#304110] hover:bg-[#222e0b] text-white px-8 py-3 rounded-full font-medium transition-colors text-center"
          >
            Tanya di Komunitas
          </Link>
        </div>
      </div>
    </div>
  );
}
