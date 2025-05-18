import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Music source URL - replace with your actual hosted MP3 file
  const musicSrc = '/public/audio/mahika.mp3';

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => {
          console.error('Error playing audio:', e);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    // Set up event listeners
    const handleEnded = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    if (audio) {
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);

      // Loop the audio
      audio.loop = true;
    }

    // Cleanup
    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      }
    };
  }, []);

  return (
    <div className="music-control">
      <audio ref={audioRef} src={musicSrc} preload="auto" />
      <Button onClick={togglePlay} variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm border-gold shadow-md hover:bg-gold/20" title={isPlaying ? 'Matikan Musik' : 'Putar Musik'}>
        {isPlaying ? <Volume2 className="h-5 w-5 text-gold" /> : <VolumeX className="h-5 w-5 text-gold" />}
      </Button>
      <p className="text-xs text-center mt-1 bg-white/80 backdrop-blur-sm rounded px-2 py-1">Adie, Janine Berdin - Mahika</p>
    </div>
  );
};

export default MusicPlayer;
