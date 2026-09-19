'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, BookOpen, Wrench, MessageCircle, ShoppingBag, Menu, X } from 'lucide-react';

const NAV = [
  { href: '/kelas', icon: GraduationCap, text: 'Kelas' },
  { href: '/panduan', icon: BookOpen, text: 'Panduan' },
  { href: '/resources', icon: Wrench, text: 'Resources' },
  { href: '/toko', icon: ShoppingBag, text: 'Toko' },
  { href: '/forum', icon: MessageCircle, text: 'Komunitas' },
];

export default function Navbar() {
  const [terbuka, setTerbuka] = useState(false);

  return (
    <nav className="bg-white border-b border-[#e1ded8] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center group"
              aria-label="Pijak Bumi Learning — kembali ke beranda"
            >
              <Image
                src="/images/logo-pijak-bumi.png"
                alt="Pijak Bumi Learning"
                width={257}
                height={269}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-7">
            {NAV.map(({ href, icon: Ikon, text }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 text-[#5a6b5c] hover:text-[#2c3e2e] font-medium transition-colors text-sm"
              >
                <Ikon className="w-4 h-4" />
                <span>{text}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/#produk"
              className="bg-[#304110] hover:bg-[#222e0b] text-white px-5 py-2 rounded-full font-medium transition-colors text-sm"
            >
              Mulai Belajar
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setTerbuka(!terbuka)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 shrink-0 rounded-lg text-[#2c3e2e] hover:bg-[#f1efe9] active:bg-[#e1ded8] transition-colors"
            aria-label={terbuka ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={terbuka}
            aria-controls="menu-mobile"
          >
            {terbuka ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {terbuka && (
        <div id="menu-mobile" className="md:hidden border-t border-[#e1ded8] bg-white">
          <div className="px-4 py-4 space-y-1">
            {NAV.map(({ href, icon: Ikon, text }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setTerbuka(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-[#2c3e2e] hover:bg-[#f9f8f6] font-medium transition-colors"
              >
                <Ikon className="w-5 h-5 text-[#304110]" />
                <span>{text}</span>
              </Link>
            ))}
            <Link
              href="/#produk"
              onClick={() => setTerbuka(false)}
              className="flex items-center justify-center bg-[#304110] text-white px-5 py-3 rounded-xl font-medium mt-2"
            >
              Mulai Belajar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
