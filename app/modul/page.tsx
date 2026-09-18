import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, PlayCircle, ArrowRight } from 'lucide-react';

export default function ModulPage() {
  const modules = [
    {
      id: 1,
      title: "Pengantar Ekonomi Sirkular",
      description: "Pahami konsep dasar ekonomi sirkular dan mengapa ini penting untuk masa depan bumi.",
      duration: "15 Menit",
      type: "Artikel",
      level: "Pemula",
      image: "https://picsum.photos/seed/modul1/400/250"
    },
    {
      id: 2,
      title: "Material Ramah Lingkungan",
      description: "Mengenal berbagai bahan alternatif yang minim dampak lingkungan, dari serat nanas hingga kapas organik.",
      duration: "20 Menit",
      type: "Video",
      level: "Menengah",
      image: "https://picsum.photos/seed/modul2/400/250"
    },
    {
      id: 3,
      title: "Zero Waste Lifestyle",
      description: "Panduan praktis memulai gaya hidup minim sampah dari rumah.",
      duration: "10 Menit",
      type: "Artikel",
      level: "Pemula",
      image: "https://picsum.photos/seed/modul3/400/250"
    },
    {
      id: 4,
      title: "Jejak Karbon & Cara Menguranginya",
      description: "Apa itu jejak karbon dan bagaimana tindakan sehari-hari kita mempengaruhinya?",
      duration: "25 Menit",
      type: "Artikel",
      level: "Menengah",
      image: "https://picsum.photos/seed/modul4/400/250"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#2c3e2e] transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>
        <h1 className="text-3xl font-bold text-[#1a261c] mb-2">Modul Belajar</h1>
        <p className="text-[#5a6b5c]">Pilih topik yang ingin kamu pelajari hari ini.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((modul) => (
          <Link key={modul.id} href={`/modul/${modul.id}`} className="bg-white border border-[#e1ded8] rounded-2xl overflow-hidden hover:border-[#304110] hover:shadow-md transition-all group flex flex-col">
            <div className="relative h-48 w-full bg-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={modul.image} alt={modul.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#2c3e2e] text-xs font-bold px-3 py-1 rounded-full">
                {modul.level}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs font-medium text-[#5a6b5c] mb-3">
                <span className="flex items-center gap-1">
                  {modul.type === 'Video' ? <PlayCircle className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
                  {modul.type}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {modul.duration}
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#1a261c] mb-2">{modul.title}</h2>
              <p className="text-[#5a6b5c] text-sm flex-grow">{modul.description}</p>
              
              <div className="mt-6 pt-4 border-t border-[#f1efe9] font-semibold text-[#304110] group-hover:text-[#222e0b] flex items-center justify-between">
                Mulai Pelajaran <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
