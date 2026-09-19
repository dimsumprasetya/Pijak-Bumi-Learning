import Link from 'next/link';
import { ArrowLeft, ThumbsUp, MessageCircle, User, Plus } from 'lucide-react';

export const metadata = {
  title: 'Komunitas — Pijak Bumi Learning',
  description:
    'Berbagi ide, bertanya, dan berdiskusi dengan sesama pembelajar Pijak Bumi Learning.',
};

const DISKUSI = [
  {
    id: 1,
    judul: 'Bagaimana cara membedakan produk yang benar-benar berkelanjutan dengan greenwashing?',
    penulis: 'Dian Pratama',
    kategori: 'Tanya Jawab',
    suka: 24,
    balasan: 12,
    waktu: '2 jam yang lalu',
  },
  {
    id: 2,
    judul: 'Share DIY: Membuat tas belanja dari kaos bekas 👕',
    penulis: 'Siti Nurbaya',
    kategori: 'Tips & DIY',
    suka: 56,
    balasan: 8,
    waktu: '5 jam yang lalu',
  },
  {
    id: 3,
    judul: 'Pengalaman ikut Kelas Ketahanan Air: audit air di rumah ternyata sehemat ini 💧',
    penulis: 'Budi Santoso',
    kategori: 'Cerita Belajar',
    suka: 89,
    balasan: 23,
    waktu: '1 hari yang lalu',
  },
  {
    id: 4,
    judul: 'Ada yang sudah coba meramban di sekitar Jakarta Selatan?',
    penulis: 'Ahmad Reza',
    kategori: 'Tanya Jawab',
    suka: 15,
    balasan: 6,
    waktu: '2 hari yang lalu',
  },
];

const KATEGORI = ['Semua Topik', 'Tanya Jawab', 'Tips & DIY', 'Cerita Belajar', 'Pengumuman'];

export default function ForumPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#2c3e2e] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>
          <h1 className="text-3xl font-bold text-[#1a261c] mb-2">Komunitas</h1>
          <p className="text-[#5a6b5c] max-w-xl">
            Belajar sendiri boleh, bertumbuh bersama lebih menyenangkan. Berbagi ide, bertanya, dan
            berdiskusi dengan sesama pembelajar PBL.
          </p>
        </div>
        <button className="bg-[#304110] hover:bg-[#222e0b] text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap inline-flex items-center gap-2">
          <Plus className="w-4 h-4" /> Buat Diskusi Baru
        </button>
      </div>

      <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
        {KATEGORI.map((k, i) => (
          <span
            key={k}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
              i === 0
                ? 'bg-[#304110] text-white'
                : 'bg-[#f1efe9] text-[#5a6b5c] hover:bg-[#e1ded8]'
            }`}
          >
            {k}
          </span>
        ))}
      </div>

      <div className="space-y-4">
        {DISKUSI.map((topik) => (
          <div
            key={topik.id}
            className="bg-white border border-[#e1ded8] rounded-2xl p-6 hover:border-[#304110] transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#e8eed9] text-[#222e0b] text-xs font-bold px-2.5 py-1 rounded-md">
                {topik.kategori}
              </span>
              <span className="text-[#9ca3af] text-sm">• {topik.waktu}</span>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-[#1a261c] mb-4 group-hover:text-[#304110] transition-colors">
              {topik.judul}
            </h3>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#5a6b5c] text-sm">
                <div className="bg-[#f1efe9] w-6 h-6 rounded-full flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-[#5a6b5c]" />
                </div>
                <span className="font-medium">{topik.penulis}</span>
              </div>

              <div className="flex items-center gap-4 text-[#5a6b5c] text-sm">
                <span className="flex items-center gap-1.5">
                  <ThumbsUp className="w-4 h-4" /> {topik.suka}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4" /> {topik.balasan}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="text-[#304110] font-semibold hover:text-[#222e0b] transition-colors text-sm">
          Muat Lebih Banyak
        </button>
      </div>
    </div>
  );
}
