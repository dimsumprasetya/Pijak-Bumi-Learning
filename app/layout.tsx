import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/navbar';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pijakbumi Learning',
  description: 'Platform edukasi lingkungan dari Pijakbumi dengan modul belajar, kuis, dan forum diskusi.',
  openGraph: {
    title: 'Pijakbumi Learning',
    description: 'Platform edukasi lingkungan dari Pijakbumi dengan modul belajar, kuis, dan forum diskusi.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pijakbumi Learning',
    description: 'Platform edukasi lingkungan dari Pijakbumi dengan modul belajar, kuis, dan forum diskusi.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.className} bg-[#f9f8f6] text-[#2c3e2e] antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
