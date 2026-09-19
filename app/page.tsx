import Link from 'next/link';
import {
  ArrowRight,
  Sprout,
  Handshake,
  Heart,
  Recycle,
  Leaf,
  Droplets,
  Home as HomeIcon,
  GraduationCap,
  BookOpen,
  Wrench,
  Quote,
  Instagram,
  Youtube,
  MessageCircle,
  Footprints,
} from 'lucide-react';
import MulaiDariMana from '@/components/mulai-dari-mana';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ============ 1. HERO ============ */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
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
      </section>

      {/* ============ 2. KENAPA PBL ============ */}
      <section className="w-full bg-white border-y border-[#e1ded8] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a261c] mb-6 leading-snug">
              Kenapa Pijak Bumi Learning?
            </h2>
            <blockquote className="text-xl md:text-2xl text-[#304110] font-medium leading-relaxed mb-6">
              &ldquo;Karena belajar tentang bumi seharusnya terasa dekat dengan kehidupan kita.&rdquo;
            </blockquote>
            <p className="text-[#5a6b5c] text-lg leading-relaxed">
              Di PBL, kami percaya perubahan nggak harus dimulai dari hal besar. Kita bisa mulai
              dari rumah, dari kebiasaan sehari-hari, dari apa yang kita makan, gunakan, buang, dan
              pelajari.
            </p>
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
          <KategoriCard
            ikon={<Recycle className="w-7 h-7 text-[#304110]" />}
            judul="Gaya Hidup Berkelanjutan"
            teks="Zero waste, 6R, pengelolaan sampah, eco enzyme"
            href="/kelas"
          />
          <KategoriCard
            ikon={<Leaf className="w-7 h-7 text-[#304110]" />}
            judul="Hidup Dekat dengan Alam"
            teks="Meramban, berkebun, mengenal sumber daya alam"
            href="/kelas"
          />
          <KategoriCard
            ikon={<Droplets className="w-7 h-7 text-[#304110]" />}
            judul="Ketahanan & Kesiapsiagaan"
            teks="Ketahanan air, survival, kesiapsiagaan keluarga"
            href="/kelas"
          />
          <KategoriCard
            ikon={<HomeIcon className="w-7 h-7 text-[#304110]" />}
            judul="Keterampilan Rumah Tangga"
            teks="DIY, natural care, keterampilan praktis"
            href="/resources"
          />
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
              ikon={<GraduationCap className="w-8 h-8 text-[#304110]" />}
              judul="Kelas"
              tagline="Belajar bersama mentor"
              teks="Program dengan proses belajar lebih lengkap: materi, pendampingan, dan latihan."
              contoh={['Kelas Meramban', 'Kelas Ketahanan Air', 'Kelas Zero Waste']}
              href="/kelas"
              cta="Lihat Semua Kelas"
              sorot
            />
            <ProdukCard
              ikon={<BookOpen className="w-8 h-8 text-[#304110]" />}
              judul="Panduan Digital"
              tagline="Belajar mandiri, tempo sendiri"
              teks="Panduan praktis yang bisa kamu baca ulang kapan saja, sesuai kebutuhanmu."
              contoh={['Panduan Meramban', 'Panduan Eco Enzyme', 'Panduan Kompos Rumah']}
              href="/panduan"
              cta="Lihat Panduan"
            />
            <ProdukCard
              ikon={<Wrench className="w-8 h-8 text-[#304110]" />}
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
        <div className="bg-[#f9f8f6] border border-[#e1ded8] rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 w-24 h-24 rounded-2xl bg-[#e8eed9] border border-[#e1ded8] flex items-center justify-center">
              <Sprout className="w-10 h-10 text-[#304110]" />
            </div>
            <div>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Belajar sendiri boleh.
            <br />
            Bertumbuh bersama lebih menyenangkan.
          </h2>
          <p className="text-[#d0dfd3] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Ikuti kelas, diskusi, kegiatan, dan ruang belajar Pijak Bumi Learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/forum"
              className="bg-white hover:bg-[#e8eed9] text-[#222e0b] px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Gabung Komunitas
            </Link>
            <a
              href="https://www.instagram.com/pijakbumilearning/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-[#3d5218] text-white border border-[#5a7530] px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <Instagram className="w-5 h-5" /> Ikuti Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ============ 9. CTA TERAKHIR ============ */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
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
  ikon,
  judul,
  teks,
  href,
}: {
  ikon: React.ReactNode;
  judul: string;
  teks: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white border border-[#e1ded8] rounded-2xl p-7 hover:border-[#304110] hover:shadow-sm transition-all group flex flex-col"
    >
      <div className="w-14 h-14 rounded-xl bg-[#e8eed9] flex items-center justify-center mb-5 group-hover:bg-[#304110] transition-colors">
        <span className="group-hover:[&>svg]:text-white [&>svg]:transition-colors">{ikon}</span>
      </div>
      <h3 className="text-base font-bold text-[#1a261c] mb-2 leading-snug">{judul}</h3>
      <p className="text-[#5a6b5c] text-sm leading-relaxed flex-grow">{teks}</p>
      <span className="inline-flex items-center gap-2 text-[#304110] text-sm font-semibold mt-5 group-hover:gap-3 transition-all">
        Pelajari <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}

function ProdukCard({
  ikon,
  judul,
  tagline,
  teks,
  contoh,
  href,
  cta,
  sorot = false,
}: {
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
      className={`rounded-2xl p-8 flex flex-col h-full border transition-colors ${
        sorot ? 'bg-[#f9f8f6] border-[#304110]' : 'bg-[#f9f8f6] border-[#e1ded8] hover:border-[#304110]'
      }`}
    >
      <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-[#e1ded8]">
        {ikon}
      </div>
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
