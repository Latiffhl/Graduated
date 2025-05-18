import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Confetti from '../components/Confetti';
import MessageBook from '../components/MessageBook';
import MusicPlayer from '../components/MusicPlayer';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessageBook, setShowMessageBook] = useState(false);

  useEffect(() => {
    // Trigger initial confetti after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const triggerConfetti = () => {
    setShowConfetti(false);
    setTimeout(() => {
      setShowConfetti(true);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-pink via-pastel-pink/90 to-white text-secondary overflow-hidden">
      {showConfetti && <Confetti count={150} />}
      <MusicPlayer />

      {/* Background image with overlay - floral decoration */}
      <div className="fixed inset-0 bg-cover bg-center opacity-30 z-0" style={{ backgroundImage: "url('https://source.unsplash.com/photo-1500673922987-e212871fec22')" }} />

      {/* Floral decorations - top left */}
      <div className="fixed top-0 left-0 w-64 h-64 bg-contain bg-no-repeat z-0" style={{ backgroundImage: "url('https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07')", opacity: 0.5 }} />

      {/* Floral decorations - bottom right */}
      <div className="fixed bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat z-0 rotate-180" style={{ backgroundImage: "url('https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07')", opacity: 0.5 }} />

      {/* Header */}
      <header className="relative z-10 pt-12 pb-6 px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-script text-gold font-bold mb-4">🎉 Selamat & Sukses! 🎉</h1>
          <h2 className="text-2xl md:text-3xl font-script text-secondary mb-2">Untuk Manusia Hebat Kita</h2>
          <div className="bg-shimmer-gradient bg-200% animate-text-shimmer bg-clip-text text-transparent">
            <h2 className="text-3xl md:text-5xl font-script font-bold mb-8">Kaila Al-Khalifi</h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Top Section with Photo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gold shadow-lg">
              <img src="/public/img/kaila.jpg" alt="Kaila Al-Khalifi" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-full md:w-2/3 bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-pink-200">
            <div className="font-sans text-lg leading-relaxed space-y-4 animate-fade-in">
              <p className="italic text-secondary">
                "Selamat atas kelulusan kamu di MAN 5 Bogor, Kaila! Semoga langkahmu ke depan selalu dimudahkan dan diberkahi. Kami bangga atas perjuangan dan kerja keras kamu selama ini. Jangan patah semangat kamu orang hebat."
              </p>
              <p className="text-right text-gold">✨ – Dari L</p>
            </div>

            <div className="mt-8 flex justify-center">
              <Button onClick={triggerConfetti} className="bg-gold hover:bg-gold/80 text-white mr-4">
                <Sparkles className="mr-2 h-4 w-4" />
                Rayakan!
              </Button>

              <Button onClick={() => setShowMessageBook(!showMessageBook)} variant="outline" className="border-gold text-gold hover:bg-gold/20">
                {showMessageBook ? 'Tutup Buku Ucapan' : 'Buka Buku Ucapan'}
              </Button>
            </div>
          </div>
        </div>

        {/* Message Book Section */}
        {showMessageBook && (
          <div className="my-12 animate-fade-in">
            <MessageBook />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto py-8 bg-pastel-pink/60 backdrop-blur-sm border-t border-pink-300">
        <div className="container mx-auto px-4 text-center">
          <p className="font-script text-2xl text-gold mb-2">Kelulusan Tahun Ajaran 2024/2025</p>
          <p className="font-sans text-secondary">MAN 5 Bogor</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
