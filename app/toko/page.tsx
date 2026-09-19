import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, ShoppingBag, Sparkles, RefreshCw } from 'lucide-react';
import {
  lynkidProducts,
  lynkidPrograms,
  lynkidProfile,
  lynkidFetchedAt,
} from '@/lib/lynkid';

export const metadata = {
  title: 'Toko & Program — Pijak Bumi Learning',
  description:
    'Katalog produk dan program belajar Pijak Bumi Learning, tersinkron otomatis dari Lynk.id.',
};

function fmtTanggal(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

export default function TokoPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#2c3e2e] transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8eed9] text-[#222e0b] text-sm font-medium mb-4">
            <ShoppingBag className="w-4 h-4" />
            <span>Katalog dari Lynk.id</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a261c] mb-3">Toko &amp; Program</h1>
          <p className="text-[#5a6b5c] max-w-2xl leading-relaxed">
            {lynkidProfile.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#9ca3af] shrink-0">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>
            Sinkron otomatis · {fmtTanggal(lynkidFetchedAt)}
          </span>
        </div>
      </div>

      {/* Produk */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#1a261c]">Produk</h2>
          <span className="text-sm text-[#5a6b5c]">{lynkidProducts.length} item</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lynkidProducts.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#e1ded8] rounded-2xl overflow-hidden hover:border-[#304110] hover:shadow-md transition-all group flex flex-col"
            >
              <div className="relative h-44 w-full bg-[#e8eed9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-[#1a261c] leading-snug mb-3 text-sm">
                  {p.title}
                </h3>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-bold ${
                        p.price === 'Free' ? 'text-[#304110]' : 'text-[#1a261c]'
                      }`}
                    >
                      {p.price}
                    </span>
                    {p.originalPrice && (
                      <span className="text-xs text-[#9ca3af] line-through">
                        {p.originalPrice}
                      </span>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#304110] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Program */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#1a261c]">Program &amp; Keanggotaan</h2>
          <span className="text-sm text-[#5a6b5c]">{lynkidPrograms.length} program</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {lynkidPrograms.map((g) => (
            <div
              key={g.id}
              className="bg-white border border-[#e1ded8] rounded-2xl p-6 flex gap-5 hover:border-[#304110] transition-colors"
            >
              {g.image ? (
                <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-[#e8eed9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.image}
                    alt={g.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 shrink-0 rounded-xl bg-[#e8eed9] flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#304110]" />
                </div>
              )}

              <div className="flex flex-col">
                <h3 className="font-bold text-[#1a261c] mb-1">{g.title}</h3>
                <p className="text-[#5a6b5c] text-sm leading-relaxed mb-4 flex-grow">
                  {g.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-bold text-[#1a261c]">{g.price}</span>
                  <a
                    href={g.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#304110] hover:bg-[#222e0b] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
                  >
                    {g.cta} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA akhir */}
      <div className="bg-[#f9f8f6] border border-[#e1ded8] rounded-2xl p-6 md:p-8 text-center">
        <h2 className="font-bold text-[#1a261c] mb-2">Ingin lihat lengkap?</h2>
        <p className="text-[#5a6b5c] text-sm mb-5">
          Buka seluruh katalog dan checkout langsung di halaman Lynk.id Pijak Bumi Learning.
        </p>
        <a
          href={lynkidProfile.username ? `https://lynk.id/pijakbumiid` : '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#304110] hover:bg-[#222e0b] text-white px-6 py-3 rounded-full font-medium transition-colors text-sm"
        >
          Kunjungi Lynk.id <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
