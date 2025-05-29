'use client';

const animals = [
  { emoji: '🦁', delay: '0s', glow: 'amber' },
  { emoji: '🦒', delay: '1s', glow: 'yellow' },
  { emoji: '🐘', delay: '2s', glow: 'blue' },
  { emoji: '🦊', delay: '3s', glow: 'orange' },
  { emoji: '🦝', delay: '4s', glow: 'purple' },
  { emoji: '🦓', delay: '5s', glow: 'white' },
  { emoji: '🦘', delay: '6s', glow: 'red' },
  { emoji: '🦩', delay: '7s', glow: 'pink' },
  { emoji: '🦜', delay: '8s', glow: 'green' },
  { emoji: '🦮', delay: '9s', glow: 'amber' },
  { emoji: '🦦', delay: '10s', glow: 'cyan' },
  { emoji: '🦥', delay: '11s', glow: 'purple' },
  { emoji: '🦙', delay: '12s', glow: 'yellow' },
  { emoji: '🦛', delay: '13s', glow: 'blue' },
  { emoji: '🐪', delay: '14s', glow: 'amber' },
  { emoji: '🦃', delay: '15s', glow: 'red' }
];

export default function AnimatedAnimals() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" aria-hidden="true">
      {animals.map((animal, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: '4rem',
            animationDelay: animal.delay,
            animationDuration: `${15 + Math.random() * 10}s`,
            transform: `rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 0.4})`,
            filter: `drop-shadow(0 0 10px var(--glow-${animal.glow}))`,
          }}
        >
          {animal.emoji}
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.4;
          }
          10% {
            transform: translate(50px, -30px) rotate(45deg) scale(1.1);
            opacity: 0.8;
          }
          20% {
            transform: translate(100px, 0px) rotate(90deg) scale(1);
            opacity: 0.6;
          }
          30% {
            transform: translate(150px, 30px) rotate(135deg) scale(1.1);
            opacity: 0.8;
          }
          40% {
            transform: translate(100px, 60px) rotate(180deg) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(50px, 80px) rotate(225deg) scale(1.2);
            opacity: 0.9;
          }
          60% {
            transform: translate(0px, 60px) rotate(270deg) scale(1);
            opacity: 0.6;
          }
          70% {
            transform: translate(-50px, 30px) rotate(315deg) scale(1.1);
            opacity: 0.8;
          }
          80% {
            transform: translate(-100px, 0px) rotate(360deg) scale(1);
            opacity: 0.5;
          }
          90% {
            transform: translate(-50px, -30px) rotate(405deg) scale(1.2);
            opacity: 0.9;
          }
          100% {
            transform: translate(0, 0) rotate(360deg) scale(1);
            opacity: 0.4;
          }
        }
        .animate-float {
          animation: float infinite ease-in-out both;
          filter: saturate(1.5) brightness(1.2);
        }
        :root {
          --glow-amber: #fbbf24;
          --glow-yellow: #fcd34d;
          --glow-blue: #60a5fa;
          --glow-orange: #fb923c;
          --glow-purple: #c084fc;
          --glow-white: #f8fafc;
          --glow-red: #f87171;
          --glow-pink: #f472b6;
          --glow-green: #4ade80;
          --glow-cyan: #22d3ee;
        }
      `}</style>
    </div>
  );
} 