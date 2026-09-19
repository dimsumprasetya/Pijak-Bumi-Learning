import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Sprout,
  Handshake,
  Heart,
  GraduationCap,
  BookOpen,
  Wrench,
  Quote,
  Instagram,
  Youtube,
  MessageCircle,
  Footprints,
  Users,
} from 'lucide-react';
import MulaiDariMana from '@/components/mulai-dari-mana';
import { KATEGORI, FOTO } from '@/lib/konten';

const HREF_KATEGORI: Record<string, string> = {
  berkelanjutan: '/kelas',
  alam: '/kelas',
  kesiapsiagaan: '/kelas',
  'rumah-tangga': '/resources',
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ============ 1. HERO ============ */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8eed9] text-[#222e0b] text-sm font-medium mb-8">
          <Sprout className="w-4 h-4" />
          <span>Belajar hidup selaras dengan bumi</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1a261c] max-w-3xl mb-6 leading-tight">
          Pijak Bumi <span className="text-[#304110]">Learning</span>
        </h1>

        <p className="text-lg md:text-xl text-[#2c3e2e] max-w-2xl mb-4 leading-relaxed font-medium">
          Belajar hidup lebih selaras dengan bumi, mulai dari hal-hal sederhana yang bisa kita
          lakukan sehari-hari.
        </p>
        <p className="text-base md:text-lg text-[#5a6b5c] max-w-2xl mb-10 leading-relaxed">
          Kelas, panduan, dan ruang belajar untuk kamu yang ingin menjalani gaya hidup yang lebih
          berkelanjutan&mdash;tanpa harus menjadi sempurna.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#produk"
            className="bg-[#304110] hover:bg-[#222e0b] text-white px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2 text-lg"
          >
            <Sprout className="w-5 h-5" /> Lihat Produk Belajar
          </Link>
          <Link
            href="#mulai"
            className="bg-white hover:bg-[#f1efe9] text-[#2c3e2e] border border-[#e1ded8] px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2 text-lg"
          >
            Mulai dari Mana?
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-10 text-sm text-[#5a6b5c]">
          <span className="px-3 py-1 rounded-full border border-[#e1ded8] bg-white">Kelas Online</span>
          <span className="text-[#b5b1a8]">·</span>
          <span className="px-3 py-1 rounded-full border border-[#e1ded8] bg-white">Panduan Praktis</span>
          <span className="text-[#b5b1a8]">·</span>
          <span className="px-3 py-1 rounded-full border border-[#e1ded8] bg-white">Komunitas</span>
        </div>

        {/* Foto utama */}
        <div className="relative w-full mt-14 rounded-3xl overflow-hidden border border-[#e1ded8] aspect-[16/9] md:aspect-[21/9]">
          <Image
            src={FOTO.hero}
            alt={FOTO.heroAlt}
            fill
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a261c]/45 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-left">
            <p className="text-white font-semibold text-lg md:text-xl drop-shadow">
              Mulai dari hal kecil, dari rumah, dari diri kita sendiri.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 2. KENAPA PBL ============ */}
      <section className="w-full bg-white border-y border-[#e1ded8] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a261c] mb-6 leading-snug">
                Kenapa Pijak Bumi Learning?
              </h2>
              <blockquote className="text-xl md:text-2xl text-[#304110] font-medium leading-relaxed mb-6">
                &ldquo;Karena belajar tentang bumi seharusnya terasa dekat dengan kehidupan
                kita.&rdquo;
              </blockquote>
              <p className="text-[#5a6b5c] text-lg leading-relaxed">
                Di PBL, kami percaya perubahan nggak harus dimulai dari hal besar. Kita bisa mulai
                dari rumah, dari kebiasaan sehari-hari, dari apa yang kita makan, gunakan, buang,
                dan pelajari.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-[#e1ded8] aspect-[4/3]">
              <Image
                src={FOTO.kenapa}
                alt={FOTO.kenapaAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PrinsipCard
              ikon={<Sprout className="w-6 h-6 text-[#304110]" />}
              judul="Praktis"
              teks="Bisa langsung dicoba dalam kehidupan sehari-hari."
            />
            <PrinsipCard
              ikon={<Handshake className="w-6 h-6 text-[#304110]" />}
              judul="Membumi"
              teks="Tidak menggurui dan tidak menuntut kesempurnaan."
            />
            <PrinsipCard
              ikon={<Heart className="w-6 h-6 text-[#304110]" />}
              judul="Berkelanjutan"
              teks="Membangun kebiasaan, bukan sekadar ikut tren."
            />
          </div>
        </div>
      </section>

      {/* ============ 3. BELAJAR APA DI PBL ============ */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a261c] mb-4">
            Belajar Apa di PBL?
          </h2>
          <p className="text-[#5a6b5c] max-w-2xl mx-auto">
            Empat rumpun keterampilan yang semuanya berangkat dari hal yang dekat dengan keseharian.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KATEGORI.map((k) => (
            <KategoriCard
              key={k.id}
              gambar={k.gambar}
              gambarAlt={k.gambarAlt}
              emoji={k.emoji}
              judul={k.nama}
              teks={k.deskripsi}
              href={HREF_KATEGORI[k.id] ?? '/kelas'}
            />
          ))}
        </div>
      </section>

      {/* ============ 4. PRODUK UTAMA ============ */}
      <section id="produk" className="w-full bg-white border-y border-[#e1ded8] py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a261c] mb-4">Produk Belajar</h2>
            <p className="text-[#5a6b5c] max-w-2xl mx-auto">
              Tiga cara belajar di PBL. Pilih yang paling cocok dengan gaya belajarmu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProdukCard
              gambar={FOTO.produkKelas}
              gambarAlt={FOTO.produkKelasAlt}
              ikon={<GraduationCap className="w-6 h-6 text-[#304110]" />}
              judul="Kelas"
              tagline="Belajar bersama mentor"
              teks="Program dengan proses belajar lebih lengkap: materi, pendampingan, dan latihan."
              contoh={['Kelas Meramban', 'Kelas Ketahanan Air', 'Kelas Zero Waste']}
              href="/kelas"
              cta="Lihat Semua Kelas"
              sorot
            />
            <ProdukCard
              gambar={FOTO.produkPanduan}
              gambarAlt={FOTO.produkPanduanAlt}
              ikon={<BookOpen className="w-6 h-6 text-[#304110]" />}
              judul="Panduan Digital"
              tagline="Belajar mandiri, tempo sendiri"
              teks="Panduan praktis yang bisa kamu baca ulang kapan saja, sesuai kebutuhanmu."
              contoh={['Panduan Meramban', 'Panduan Eco Enzyme', 'Panduan Kompos Rumah']}
              href="/panduan"
              cta="Lihat Panduan"
            />
            <ProdukCard
              gambar={FOTO.produkResources}
              gambarAlt={FOTO.produkResourcesAlt}
              ikon={<Wrench className="w-6 h-6 text-[#304110]" />}
              judul="Tool & Resource"
              tagline="Alat bantu belajar"
              teks="Worksheet, jurnal, dan checklist supaya kebiasaan baru lebih mudah dijalani."
              contoh={['Jurnal Zero Waste', 'Checklist Audit Air', 'Worksheet Kebun']}
              href="/resources"
              cta="Lihat Resources"
            />
          </div>

          <p className="text-center text-sm text-[#5a6b5c] mt-10 max-w-2xl mx-auto">
            Setiap produk punya alurnya sendiri &mdash; ada yang bisa langsung dipelajari, ada yang
            perlu lihat detail dulu, dan ada yang dibeli. Kami nggak mau semuanya terasa seperti
            jualan.
          </p>
        </div>
      </section>

      {/* ============ 5. MULAI DARI MANA ============ */}
      <section id="mulai" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
        <MulaiDariMana />
      </section>

      {/* ============ 6. CERITA / SOCIAL PROOF ============ */}
      <section className="w-full bg-white border-y border-[#e1ded8] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a261c] mb-4">
              Sudah belajar bersama Pijak Bumi Learning
            </h2>
            <p className="text-[#5a6b5c] max-w-2xl mx-auto">
              Dari kelas zero waste, eco enzyme, dan meramban &mdash; sampai ketahanan air,
              kesiapsiagaan, dan keterampilan hidup.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            <div className="relative rounded-3xl overflow-hidden border border-[#e1ded8] aspect-[4/3]">
              <Image
                src={FOTO.cerita1}
                alt={FOTO.cerita1Alt}
                fill
                sizes="(max-width: 640px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-[#e1ded8] aspect-[4/3]">
              <Image
                src={FOTO.cerita2}
                alt={FOTO.cerita2Alt}
                fill
                sizes="(max-width: 640px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            <StatCard angka="500+" label="Peserta belajar" />
            <StatCard angka="10+" label="Kelas & program" />
            <StatCard angka="2023" label="Mulai belajar bersama" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <TestimoniCard
              kutipan="Awalnya aku pikir belajar zero waste itu ribet. Ternyata mulai dari satu kebiasaan kecil aja udah cukup bikin rumah terasa lebih ringan."
              nama="Peserta Kelas Zero Waste"
              peran="Ibu rumah tangga, Bandung"
            />
            <TestimoniCard
              kutipan="Yang paling berkesan itu pendekatannya nggak menggurui. Kita diajak mencoba, bukan dituntut langsung sempurna."
              nama="Peserta Kelas Ketahanan Air"
              peran="Komunitas keluarga siaga"
            />
          </div>

          <p className="text-center text-xs text-[#9ca3af] mt-8">
            * Angka di atas placeholder &mdash; mohon diganti dengan data aktual PBL.
          </p>
        </div>
      </section>

      {/* ============ 7. TENTANG FOUNDER ============ */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#f9f8f6] border border-[#e1ded8] rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-2/5 shrink-0 aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <Image
                src={FOTO.founder}
                alt={FOTO.founderAlt}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a261c] mb-5">
                Hai, aku Dewi.
              </h2>
              <div className="space-y-4 text-[#5a6b5c] leading-relaxed">
                <p>
                  Aku percaya bahwa belajar tentang keberlanjutan tidak harus selalu dimulai dari
                  teori yang rumit. Kadang, ia dimulai dari hal sederhana: belajar memilah sampah,
                  mengenali tanaman di sekitar rumah, memahami air yang kita gunakan, atau membuat
                  sesuatu dengan tangan sendiri.
                </p>
                <p className="font-medium text-[#2c3e2e]">
                  Dari situlah Pijak Bumi Learning lahir.
                </p>
              </div>
              <Link
                href="#produk"
                className="inline-flex items-center gap-2 text-[#304110] font-semibold hover:gap-3 transition-all mt-8"
              >
                Kenal PBL Lebih Dekat <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 8. COMMUNITY ============ */}
      <section className="w-full bg-[#304110] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] order-2 lg:order-1">
              <Image
                src={FOTO.komunitas}
                alt={FOTO.komunitasAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>

            <div className="text-white order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3d5218] text-[#c8d6b0] text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                <span>Ruang belajar bersama</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                Belajar sendiri boleh.
                <br />
                Bertumbuh bersama lebih menyenangkan.
              </h2>
              <p className="text-[#d0dfd3] text-lg mb-10 leading-relaxed">
                Ikuti kelas, diskusi, kegiatan, dan ruang belajar Pijak Bumi Learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/forum"
                  className="bg-white hover:bg-[#e8eed9] text-[#222e0b] px-7 py-3.5 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> Gabung Komunitas
                </Link>
                <a
                  href="https://www.instagram.com/pijakbumilearning/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-[#3d5218] text-white border border-[#5a7530] px-7 py-3.5 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Instagram className="w-5 h-5" /> Ikuti Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 9. CTA TERAKHIR ============ */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="relative w-full rounded-3xl overflow-hidden border border-[#e1ded8] aspect-[16/9] md:aspect-[21/9] mb-12">
          <Image
            src={FOTO.cta}
            alt={FOTO.ctaAlt}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <Footprints className="w-12 h-12 text-[#304110] mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a261c] mb-4 leading-snug">
          Yuk, mulai pijakkan langkahmu. 👣
        </h2>
        <p className="text-lg text-[#5a6b5c] mb-10">
          Pilih hal kecil yang ingin kamu pelajari hari ini.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#produk"
            className="bg-[#304110] hover:bg-[#222e0b] text-white px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2 text-lg"
          >
            Lihat Semua Produk <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="https://www.youtube.com/@pijakbumilearning"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-[#f1efe9] text-[#2c3e2e] border border-[#e1ded8] px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2 text-lg"
          >
            <Youtube className="w-5 h-5" /> Tonton di YouTube
          </a>
        </div>
      </section>
    </div>
  );
}

/* ================= Komponen kecil ================= */

function PrinsipCard({ ikon, judul, teks }: { ikon: React.ReactNode; judul: string; teks: string }) {
  return (
    <div className="bg-[#f9f8f6] border border-[#e1ded8] rounded-2xl p-7 text-center">
      <div className="w-14 h-14 rounded-xl bg-white border border-[#e1ded8] flex items-center justify-center mx-auto mb-5">
        {ikon}
      </div>
      <h3 className="text-lg font-bold text-[#1a261c] mb-2">{judul}</h3>
      <p className="text-[#5a6b5c] text-sm leading-relaxed">{teks}</p>
    </div>
  );
}

function KategoriCard({
  gambar,
  gambarAlt,
  emoji,
  judul,
  teks,
  href,
}: {
  gambar: string;
  gambarAlt: string;
  emoji: string;
  judul: string;
  teks: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white border border-[#e1ded8] rounded-2xl overflow-hidden hover:border-[#304110] hover:shadow-md transition-all group flex flex-col"
    >
      <div className="relative h-44 w-full bg-[#e8eed9]">
        <Image
          src={gambar}
          alt={gambarAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-lg shadow-sm">
          {emoji}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-[#1a261c] mb-2 leading-snug">{judul}</h3>
        <p className="text-[#5a6b5c] text-sm leading-relaxed flex-grow">{teks}</p>
        <span className="inline-flex items-center gap-2 text-[#304110] text-sm font-semibold mt-5 group-hover:gap-3 transition-all">
          Pelajari <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

function ProdukCard({
  gambar,
  gambarAlt,
  ikon,
  judul,
  tagline,
  teks,
  contoh,
  href,
  cta,
  sorot = false,
}: {
  gambar: string;
  gambarAlt: string;
  ikon: React.ReactNode;
  judul: string;
  tagline: string;
  teks: string;
  contoh: string[];
  href: string;
  cta: string;
  sorot?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden flex flex-col h-full border transition-colors bg-[#f9f8f6] ${
        sorot ? 'border-[#304110]' : 'border-[#e1ded8] hover:border-[#304110]'
      }`}
    >
      <div className="relative h-44 w-full bg-[#e8eed9]">
        <Image
          src={gambar}
          alt={gambarAlt}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover"
        />
        <span className="absolute bottom-3 left-3 w-11 h-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center border border-[#e1ded8] shadow-sm">
          {ikon}
        </span>
      </div>

      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#1a261c] mb-1">{judul}</h3>
        <p className="text-[#65826c] text-sm font-medium mb-4">{tagline}</p>
        <p className="text-[#5a6b5c] leading-relaxed text-sm mb-6">{teks}</p>

        <ul className="space-y-2 mb-8">
          {contoh.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-[#5a6b5c]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#304110] mt-2 shrink-0" />
              {c}
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 text-[#304110] font-semibold hover:gap-3 transition-all"
        >
          {cta} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function StatCard({ angka, label }: { angka: string; label: string }) {
  return (
    <div className="bg-[#f9f8f6] border border-[#e1ded8] rounded-2xl p-8 text-center">
      <div className="text-4xl font-extrabold text-[#304110] mb-2">{angka}</div>
      <div className="text-[#5a6b5c] text-sm font-medium">{label}</div>
    </div>
  );
}

function TestimoniCard({
  kutipan,
  nama,
  peran,
}: {
  kutipan: string;
  nama: string;
  peran: string;
}) {
  return (
    <div className="bg-[#f9f8f6] border border-[#e1ded8] rounded-2xl p-7 flex flex-col">
      <Quote className="w-7 h-7 text-[#c8d6b0] mb-4" />
      <p className="text-[#2c3e2e] leading-relaxed italic flex-grow mb-6">&ldquo;{kutipan}&rdquo;</p>
      <div className="pt-5 border-t border-[#e1ded8]">
        <div className="font-semibold text-[#1a261c] text-sm">{nama}</div>
        <div className="text-[#5a6b5c] text-xs">{peran}</div>
      </div>
    </div>
  );
}
