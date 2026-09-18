import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Brain, MessageSquare, Leaf, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8eed9] text-[#222e0b] text-sm font-medium mb-8">
          <Leaf className="w-4 h-4" />
          <span>Mari selamatkan bumi bersama</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1a261c] max-w-4xl mb-6 leading-tight">
          Langkah Kecil untuk <span className="text-[#304110]">Perubahan Besar.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#5a6b5c] max-w-2xl mb-10 leading-relaxed">
          Pijakbumi Learning adalah platform edukasi interaktif untuk memahami dan menerapkan gaya hidup ramah lingkungan, ekonomi sirkular, dan keberlanjutan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/modul" className="bg-[#304110] hover:bg-[#222e0b] text-white px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 text-lg">
            Mulai Belajar <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/forum" className="bg-white hover:bg-[#f1efe9] text-[#2c3e2e] border border-[#e1ded8] px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 text-lg">
            Gabung Diskusi
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full bg-white border-y border-[#e1ded8] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a261c] mb-4">Fitur Utama Platform</h2>
            <p className="text-[#5a6b5c] max-w-2xl mx-auto">Kami menyediakan berbagai cara interaktif untuk membantumu memahami isu lingkungan dengan lebih mudah dan menyenangkan.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BookOpen className="w-8 h-8 text-[#304110]" />}
              title="Modul Belajar"
              description="Pelajari dasar-dasar keberlanjutan, material ramah lingkungan, dan praktik ekonomi sirkular langkah demi langkah."
              link="/modul"
              linkText="Lihat Modul"
            />
            <FeatureCard 
              icon={<Brain className="w-8 h-8 text-[#304110]" />}
              title="Kuis Interaktif"
              description="Uji pengetahuanmu tentang isu lingkungan. Dapatkan poin dan pantau perkembangan belajarmu."
              link="/kuis"
              linkText="Mulai Kuis"
            />
            <FeatureCard 
              icon={<MessageSquare className="w-8 h-8 text-[#304110]" />}
              title="Forum Diskusi"
              description="Bertukar pikiran dengan komunitas. Bagikan ide DIY, tips gaya hidup berkelanjutan, dan inspirasi."
              link="/forum"
              linkText="Gabung Komunitas"
            />
          </div>
        </div>
      </section>

      {/* Stats/Info Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#304110] rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
            <Globe className="w-96 h-96" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mengapa Edukasi Lingkungan Penting?</h2>
            <p className="text-[#e8eed9] text-lg mb-8 leading-relaxed">
              Sebagai bagian dari Pijakbumi, kami percaya bahwa produk yang baik bermula dari kesadaran yang baik. Dengan memahami dampak dari setiap pilihan yang kita buat, kita dapat menciptakan ekosistem yang lebih sehat untuk generasi mendatang.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">300M+</div>
                <div className="text-[#d0dfd3] text-sm font-medium">Ton sampah plastik setiap tahun</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Misi Kita</div>
                <div className="text-[#d0dfd3] text-sm font-medium">Mengurangi jejak karbon & limbah</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, link, linkText }: { icon: React.ReactNode, title: string, description: string, link: string, linkText: string }) {
  return (
    <div className="bg-[#f9f8f6] border border-[#e1ded8] rounded-2xl p-8 hover:border-[#304110] transition-colors group flex flex-col h-full">
      <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-[#e1ded8] group-hover:bg-[#e8eed9] transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#1a261c] mb-3">{title}</h3>
      <p className="text-[#5a6b5c] leading-relaxed flex-grow mb-8">{description}</p>
      <Link href={link} className="inline-flex items-center gap-2 text-[#304110] font-semibold hover:gap-3 transition-all mt-auto">
        {linkText} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
