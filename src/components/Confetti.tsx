
import React, { useEffect, useState } from 'react';

interface ConfettiProps {
  count?: number;
}

interface ConfettiParticle {
  id: number;
  x: number;
  color: string;
  size: number;
  fallDuration: number;
}

const COLORS = ['#D4AF37', '#FFF6E9', '#001F3F', '#FFDEE2', '#D3E4FD', '#E5DEFF', '#FDE1D3'];

const Confetti: React.FC<ConfettiProps> = ({ count = 100 }) => {
  const [particles, setParticles] = useState<ConfettiParticle[]>([]);
  
  useEffect(() => {
    // Create confetti particles
    const newParticles: ConfettiParticle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // Random x position as percentage
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.random() * 6 + 4, // Random size between 4-10px
        fallDuration: Math.random() * 5 + 3, // Random duration between 3-8s
      });
    }
    setParticles(newParticles);
    
    // Cleanup after maximum animation time
    const cleanup = setTimeout(() => {
      setParticles([]);
    }, 8000);
    
    return () => clearTimeout(cleanup);
  }, [count]);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            borderRadius: particle.size % 2 === 0 ? '50%' : '0',
            '--fall-duration': `${particle.fallDuration}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Confetti;
