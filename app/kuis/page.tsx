'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';

export default function KuisPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Apa tujuan utama dari Ekonomi Sirkular?",
      options: [
        "Memproduksi barang sebanyak mungkin dengan biaya murah",
        "Mempertahankan nilai produk, bahan, dan sumber daya selama mungkin di dalam perekonomian",
        "Meningkatkan konsumsi masyarakat terhadap produk baru",
        "Membuang sampah ke laut agar lahan tetap bersih"
      ],
      correctAnswer: 1
    },
    {
      question: "Mana dari berikut ini yang BUKAN merupakan prinsip 3R?",
      options: [
        "Reduce (Mengurangi)",
        "Reuse (Menggunakan Kembali)",
        "Refuse (Menolak)",
        "Replace (Mengganti)"
      ],
      correctAnswer: 3
    },
    {
      question: "Berapa lama rata-rata kantong plastik dapat terurai secara alami di lingkungan?",
      options: [
        "1-5 Tahun",
        "10-20 Tahun",
        "100-500 Tahun",
        "Plastik tidak pernah terurai"
      ],
      correctAnswer: 2
    }
  ];

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-[#5a6b5c] hover:text-[#2c3e2e] transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
      </Link>

      {!showResult ? (
        <div className="bg-white border border-[#e1ded8] rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[#5a6b5c] font-medium">Pertanyaan {currentQuestion + 1} dari {questions.length}</span>
            <span className="bg-[#e8eed9] text-[#222e0b] px-3 py-1 rounded-full text-sm font-bold">Kuis Lingkungan</span>
          </div>

          <h2 className="text-2xl font-bold text-[#1a261c] mb-8 leading-relaxed">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedAnswer === index 
                    ? 'border-[#304110] bg-[#f2f6f3]' 
                    : 'border-[#e1ded8] hover:border-[#b5b1a8] bg-white'
                }`}
              >
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold mr-3 ${
                  selectedAnswer === index ? 'bg-[#304110] text-white' : 'bg-[#f1efe9] text-[#5a6b5c]'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className={selectedAnswer === index ? 'text-[#1a261c] font-medium' : 'text-[#5a6b5c]'}>{option}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 rounded-full font-medium transition-colors ${
                selectedAnswer !== null 
                  ? 'bg-[#304110] hover:bg-[#222e0b] text-white' 
                  : 'bg-[#e1ded8] text-[#9ca3af] cursor-not-allowed'
              }`}
            >
              {currentQuestion + 1 === questions.length ? 'Selesai Kuis' : 'Lanjut'}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-[#e1ded8] rounded-3xl p-8 md:p-12 shadow-sm text-center">
          <div className="w-24 h-24 bg-[#e8eed9] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-[#304110]" />
          </div>
          <h2 className="text-3xl font-bold text-[#1a261c] mb-2">Kuis Selesai!</h2>
          <p className="text-[#5a6b5c] mb-8">Terima kasih telah menguji pengetahuanmu tentang isu lingkungan.</p>
          
          <div className="bg-[#f9f8f6] border border-[#e1ded8] rounded-2xl p-6 mb-8 inline-block min-w-[200px]">
            <div className="text-5xl font-extrabold text-[#304110] mb-2">{score}/{questions.length}</div>
            <div className="text-[#5a6b5c] font-medium">Jawaban Benar</div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={resetQuiz} className="bg-[#304110] hover:bg-[#222e0b] text-white px-8 py-3 rounded-full font-medium transition-colors">
              Ulangi Kuis
            </button>
            <Link href="/forum" className="bg-white hover:bg-[#f1efe9] text-[#2c3e2e] border border-[#e1ded8] px-8 py-3 rounded-full font-medium transition-colors">
              Diskusikan di Forum
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
