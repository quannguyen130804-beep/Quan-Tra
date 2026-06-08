// src/components/LoveLetterSection.jsx
import { useRef, useState, useEffect } from 'react';
import './LoveLetterSection.css';

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function LoveLetterSection({ config, songs }) {
  const [ref, inView] = useInView(0.15);
  const [songRef, songInView] = useInView(0.2);
  const [sealed, setSealed] = useState(true);

  const paragraphs = config.love_letter ? config.love_letter.split('\n\n') : [];

  return (
    <section className="letter-section" id="letter">
      <div className="letter-bg-glow" />

      {/* Letter envelope */}
      <div ref={ref} className={`letter-wrap ${inView ? 'visible' : ''}`}>
        <div className="section-eyebrow letter-eyebrow">
          <span className="eyebrow-line" />
          <span>Love Letter</span>
          <span className="eyebrow-line" />
        </div>

        <div className={`envelope ${sealed ? 'sealed' : 'open'}`} onClick={() => setSealed(false)}>
          {sealed ? (
            <div className="envelope-sealed">
              <div className="envelope-flap">💌</div>
              <p className="envelope-hint">Chạm để mở thư</p>
              <div className="envelope-wax">♥</div>
            </div>
          ) : (
            <div className={`letter-content visible`}>
              <p className="letter-dear">Trà ơi,</p>
              <div className="letter-body">
                {paragraphs.slice(1, -1).map((p, i) => (
                  <p key={i} style={{ animationDelay: `${i * 0.15}s` }}>{p}</p>
                ))}
              </div>
              <div className="letter-sign">
                <p className="sign-off">Mãi yêu em,</p>
                <p className="sign-name">{config.name_a} 🌹</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Songs section */}
      {songs && songs.length > 0 && (
        <div ref={songRef} className={`songs-wrap ${songInView ? 'visible' : ''}`}>
          <div className="songs-header">
            <h3>Our list songs 🎵</h3>
          </div>
          <div className="songs-list">
            {songs.map((s, i) => (
              <div key={i} className="song-item" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="song-num">{String(i+1).padStart(2,'0')}</span>
                <div className="song-info">
                  <p className="song-title">{s.title}</p>
                  <p className="song-artist">{s.artist}</p>
                </div>
                <span className="song-note">♪</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="site-footer">
        <p className="footer-names">{config.name_a} & {config.name_b}</p>
        <p className="footer-tagline">"{config.tagline}"</p>
        <p className="footer-date">12 · 12 · 2025 → mãi mãi 💗</p>
        <p className="footer-credit">inspired by Roan</p>
      </div>
    </section>
  );
}
