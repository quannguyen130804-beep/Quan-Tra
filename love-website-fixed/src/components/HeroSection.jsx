// src/components/HeroSection.jsx
import { useState, useEffect } from 'react';
import './HeroSection.css';

function useDayCounter(startDate) {
  const [counts, setCounts] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calc() {
      const start = new Date(startDate);
      const now = new Date();
      const diff = now - start;
      if (diff < 0) return;

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      setCounts({ days, hours, minutes, seconds });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [startDate]);

  return counts;
}

export default function HeroSection({ config }) {
  const counts = useDayCounter(config.anniversary_date);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* Decorative rose petals */}
      <div className="hero-petals">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="hero-petal" style={{
            left: `${5 + i * 12}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${8 + (i % 3) * 2}s`,
          }}>🌸</div>
        ))}
      </div>

      <div className={`hero-content ${visible ? 'visible' : ''}`}>
        {/* Label */}
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          <span>Our Story</span>
          <span className="eyebrow-line" />
        </div>

        {/* Main title */}
        <h1 className="hero-names">
          <span className="name-a">{config.name_a}</span>
          <span className="name-sep">
            <span className="sep-line" />
            <span className="sep-heart">♥</span>
            <span className="sep-line" />
          </span>
          <span className="name-b">{config.name_b}</span>
        </h1>

        {/* Since date */}
        <p className="hero-since">
          Since 12 · 12 · 2025
        </p>

        {/* Counter */}
        <div className="counter-wrap">
          <p className="counter-label">Tụi mình đã yêu nhau được</p>
          <div className="counter-grid">
            <div className="counter-item">
              <span className="counter-num">{counts.days}</span>
              <span className="counter-unit">ngày</span>
            </div>
            <div className="counter-dot">:</div>
            <div className="counter-item">
              <span className="counter-num">{String(counts.hours).padStart(2,'0')}</span>
              <span className="counter-unit">giờ</span>
            </div>
            <div className="counter-dot">:</div>
            <div className="counter-item">
              <span className="counter-num">{String(counts.minutes).padStart(2,'0')}</span>
              <span className="counter-unit">phút</span>
            </div>
            <div className="counter-dot">:</div>
            <div className="counter-item">
              <span className="counter-num seconds">{String(counts.seconds).padStart(2,'0')}</span>
              <span className="counter-unit">giây</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="hero-tagline">"{config.tagline}"</p>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <span>Cuộn xuống để xem thêm</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
}
