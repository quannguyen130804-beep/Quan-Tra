// src/components/FirstTimesSection.jsx
import { useRef, useState, useEffect } from 'react';
import './FirstTimesSection.css';

function useInView(threshold = 0.1) {
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

function FirstCard({ item, index }) {
  const [ref, inView] = useInView(0.05);
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      ref={ref}
      className={`first-card ${inView ? 'visible' : ''} ${flipped ? 'flipped' : ''}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="first-card-inner">
        {/* Front */}
        <div className="first-card-front">
          {item.image ? (
            <img src={item.image} alt={item.title} className="first-img" />
          ) : (
            <div className="first-placeholder">
              <span className="first-icon">{item.icon}</span>
            </div>
          )}
          <div className="first-overlay">
            <p className="first-title">{item.title}</p>
            <p className="first-tap">chạm để xem 💗</p>
          </div>
          <div className="first-badge">lần đầu</div>
        </div>
        {/* Back */}
        <div className="first-card-back">
          <span className="back-icon">{item.icon}</span>
          <p className="back-title">{item.title}</p>
          <p className="back-tap">chạm để quay lại</p>
        </div>
      </div>
    </div>
  );
}

export default function FirstTimesSection({ firsts }) {
  const [titleRef, titleVisible] = useInView(0.3);

  return (
    <section className="firsts-section" id="firsts">
      <div className="firsts-bg" />

      <div ref={titleRef} className={`section-header ${titleVisible ? 'visible' : ''}`}>
        <div className="section-eyebrow">
          <span className="eyebrow-line" />
          <span>Milestones</span>
          <span className="eyebrow-line" />
        </div>
        <h2 className="section-title">
          Our first
          <span className="title-italic"> times ✨</span>
        </h2>
        <p className="section-subtitle">Chạm vào từng ô để khám phá</p>
      </div>

      <div className="firsts-grid">
        {firsts.map((item, i) => (
          <FirstCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
