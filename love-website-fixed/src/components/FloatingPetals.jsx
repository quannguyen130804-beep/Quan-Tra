// src/components/FloatingPetals.jsx
import { useMemo } from 'react';
import './FloatingPetals.css';

const PETALS = ['🌸', '🌹', '💗', '🌺', '✨', '💕', '🌸', '💖'];

export default function FloatingPetals() {
  const petals = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      emoji: PETALS[i % PETALS.length],
      left: `${5 + i * 7.8}%`,
      delay: `${i * 0.9}s`,
      duration: `${9 + (i % 4) * 2}s`,
      size: `${14 + (i % 3) * 6}px`,
    }))
  , []);

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map(p => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
