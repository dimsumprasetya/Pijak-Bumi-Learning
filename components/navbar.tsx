import Link from 'next/link';
import { Leaf, BookOpen, Brain, MessageSquare } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-[#e1ded8] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-[#304110] p-2 rounded-lg group-hover:bg-[#222e0b] transition-colors">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#2c3e2e]">Pijakbumi <span className="text-[#65826c]">Learning</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="/modul" icon={<BookOpen className="w-4 h-4" />} text="Modul Belajar" />
            <NavLink href="/kuis" icon={<Brain className="w-4 h-4" />} text="Kuis" />
            <NavLink href="/forum" icon={<MessageSquare className="w-4 h-4" />} text="Forum" />
          </div>

          <div className="hidden md:flex items-center">
            <button className="bg-[#304110] hover:bg-[#222e0b] text-white px-5 py-2 rounded-full font-medium transition-colors text-sm">
              Mulai Belajar
            </button>
          </div>
          
          <div className="flex md:hidden items-center">
            {/* Mobile menu button could go here */}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-[#5a6b5c] hover:text-[#2c3e2e] font-medium transition-colors">
      {icon}
      <span>{text}</span>
    </Link>
  );
}
