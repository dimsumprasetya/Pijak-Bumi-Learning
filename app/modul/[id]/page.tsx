import Link from 'next/link';
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react';

export default function ModulDetail({ params }: { params: Promise<{ id: string }> }) {
  // Mock data
  const title = "Pengantar Ekonomi Sirkular";

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/modul" className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#2c3e2e] transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Modul
      </Link>

      <div className="bg-white border border-[#e1ded8] rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-4 text-sm font-medium text-[#5a6b5c] mb-6">
          <span className="bg-[#e8eed9] text-[#222e0b] px-3 py-1 rounded-full">Pemula</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 15 Menit</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#1a261c] mb-8">{title}</h1>

        <div className="prose prose-lg prose-green max-w-none text-[#5a6b5c]">
          <p>
            Ekonomi sirkular adalah model produksi dan konsumsi yang melibatkan berbagi, menyewakan, menggunakan kembali, memperbaiki, memperbarui, dan mendaur ulang bahan dan produk yang ada selama mungkin. Dengan cara ini, siklus hidup produk diperpanjang.
          </p>
          <p>
            Dalam praktiknya, ini menyiratkan pengurangan limbah seminimal mungkin. Ketika suatu produk mencapai akhir masa pakainya, bahan-bahannya tetap berada dalam perekonomian di mana pun memungkinkan. Ini dapat digunakan secara produktif berulang kali, sehingga menciptakan nilai lebih lanjut.
          </p>
          
          <h3 className="text-xl font-bold text-[#1a261c] mt-8 mb-4">Mengapa kita harus beralih ke ekonomi sirkular?</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-[#304110] shrink-0" /> Melindungi lingkungan dan mengurangi emisi gas rumah kaca.</li>
            <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-[#304110] shrink-0" /> Mengurangi ketergantungan pada bahan mentah.</li>
            <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-[#304110] shrink-0" /> Mendorong inovasi dan penciptaan lapangan kerja baru.</li>
          </ul>

          <div className="bg-[#f9f8f6] p-6 rounded-2xl border border-[#e1ded8] mt-10">
            <h4 className="font-bold text-[#1a261c] mb-2">Tugas Mandiri</h4>
            <p className="text-sm">Lihatlah barang-barang di kamarmu. Pilih satu barang yang jarang dipakai, dan pikirkan cara agar barang tersebut bisa digunakan kembali atau dimanfaatkan orang lain.</p>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <Link href="/kuis" className="bg-[#304110] hover:bg-[#222e0b] text-white px-8 py-3 rounded-full font-medium transition-colors">
            Lanjut Uji Pengetahuan (Kuis)
          </Link>
        </div>
      </div>
    </div>
  );
}
