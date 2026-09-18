import Link from 'next/link';
import { ArrowLeft, MessageSquare, ThumbsUp, MessageCircle, User } from 'lucide-react';

export default function ForumPage() {
  const discussions = [
    {
      id: 1,
      title: "Bagaimana cara membedakan produk yang benar-benar sustainable dengan greenwashing?",
      author: "Dian Pratama",
      category: "Tanya Jawab",
      likes: 24,
      replies: 12,
      time: "2 jam yang lalu"
    },
    {
      id: 2,
      title: "Share DIY: Membuat tas belanja dari kaos bekas 👕",
      author: "Siti Nurbaya",
      category: "Tips & DIY",
      likes: 56,
      replies: 8,
      time: "5 jam yang lalu"
    },
    {
      id: 3,
      title: "Review sepatu Pijakbumi seri terbaru - Sangat nyaman dan eco-friendly!",
      author: "Budi Santoso",
      category: "Review",
      likes: 89,
      replies: 23,
      time: "1 hari yang lalu"
    },
    {
      id: 4,
      title: "Apakah ada tempat daur ulang sampah elektronik (e-waste) di sekitar Jakarta Selatan?",
      author: "Ahmad Reza",
      category: "Tanya Jawab",
      likes: 15,
      replies: 6,
      time: "2 hari yang lalu"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#2c3e2e] transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>
          <h1 className="text-3xl font-bold text-[#1a261c] mb-2">Forum Diskusi</h1>
          <p className="text-[#5a6b5c]">Berbagi ide, bertanya, dan berdiskusi dengan sesama pejuang lingkungan.</p>
        </div>
        <button className="bg-[#304110] hover:bg-[#222e0b] text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap">
          Buat Diskusi Baru
        </button>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <span className="bg-[#304110] text-white px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer">Semua Topik</span>
        <span className="bg-[#f1efe9] text-[#5a6b5c] hover:bg-[#e1ded8] px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors">Tanya Jawab</span>
        <span className="bg-[#f1efe9] text-[#5a6b5c] hover:bg-[#e1ded8] px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors">Tips & DIY</span>
        <span className="bg-[#f1efe9] text-[#5a6b5c] hover:bg-[#e1ded8] px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors">Review</span>
        <span className="bg-[#f1efe9] text-[#5a6b5c] hover:bg-[#e1ded8] px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors">Pengumuman</span>
      </div>

      <div className="space-y-4">
        {discussions.map((topic) => (
          <div key={topic.id} className="bg-white border border-[#e1ded8] rounded-2xl p-6 hover:border-[#304110] transition-colors cursor-pointer group">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#e8eed9] text-[#222e0b] text-xs font-bold px-2.5 py-1 rounded-md">
                {topic.category}
              </span>
              <span className="text-[#9ca3af] text-sm">• {topic.time}</span>
            </div>
            
            <h3 className="text-xl font-bold text-[#1a261c] mb-4 group-hover:text-[#304110] transition-colors">
              {topic.title}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#5a6b5c] text-sm">
                <div className="bg-[#f1efe9] w-6 h-6 rounded-full flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-[#5a6b5c]" />
                </div>
                <span className="font-medium">{topic.author}</span>
              </div>
              
              <div className="flex items-center gap-4 text-[#5a6b5c] text-sm">
                <span className="flex items-center gap-1.5"><ThumbsUp className="w-4 h-4" /> {topic.likes}</span>
                <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> {topic.replies}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="text-[#304110] font-semibold hover:text-[#222e0b] transition-colors">
          Muat Lebih Banyak
        </button>
      </div>
    </div>
  );
}
