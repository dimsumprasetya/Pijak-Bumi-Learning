import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

const DESKRIPSI =
  'Belajar hidup lebih selaras dengan bumi, mulai dari hal-hal sederhana yang bisa kita lakukan sehari-hari. Kelas, panduan, dan ruang belajar untuk gaya hidup yang lebih berkelanjutan.';

export const metadata: Metadata = {
  title: 'Pijak Bumi Learning — Belajar hidup lebih selaras dengan bumi',
  description: DESKRIPSI,
  openGraph: {
    title: 'Pijak Bumi Learning',
    description: DESKRIPSI,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pijak Bumi Learning',
    description: DESKRIPSI,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body
        className={`${plusJakarta.className} bg-[#f9f8f6] text-[#2c3e2e] antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>

        <footer className="bg-white border-t border-[#e1ded8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <Link href="/" className="inline-block mb-4" aria-label="Pijak Bumi Learning">
                  <Image
                    src="/images/logo-pijak-bumi.png"
                    alt="Pijak Bumi Learning"
                    width={257}
                    height={269}
                    className="h-20 w-auto"
                  />
                </Link>
                <p className="text-sm text-[#5a6b5c] leading-relaxed">
                  Learning platform untuk membantu orang membangun keterampilan dan kebiasaan hidup
                  yang lebih berkelanjutan.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1a261c] mb-4 text-sm uppercase tracking-wide">
                  Belajar
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link href="/kelas" className="text-[#5a6b5c] hover:text-[#304110] transition-colors">
                      Kelas
                    </Link>
                  </li>
                  <li>
                    <Link href="/panduan" className="text-[#5a6b5c] hover:text-[#304110] transition-colors">
                      Panduan Digital
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="text-[#5a6b5c] hover:text-[#304110] transition-colors">
                      Tool &amp; Resource
                    </Link>
                  </li>
                  <li>
                    <Link href="/kuis" className="text-[#5a6b5c] hover:text-[#304110] transition-colors">
                      Kuis
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#1a261c] mb-4 text-sm uppercase tracking-wide">
                  Terhubung
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link href="/forum" className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#304110] transition-colors">
                      <MessageCircle className="w-4 h-4" /> Komunitas
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/pijakbumilearning/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#304110] transition-colors"
                    >
                      <Instagram className="w-4 h-4" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@pijakbumilearning"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#304110] transition-colors"
                    >
                      <Youtube className="w-4 h-4" /> YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[#e1ded8] flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#9ca3af]">
              <span>&copy; {new Date().getFullYear()} Pijak Bumi Learning</span>
              <span>Yuk, mulai pijakkan langkahmu. 👣</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
