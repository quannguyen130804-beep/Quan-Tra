// src/components/ReasonsSection.jsx
import { useRef, useState, useEffect } from 'react';
import './ReasonsSection.css';

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

function ReasonItem({ item, index }) {
  const [ref, inView] = useInView(0.2);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`reason-item ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="reason-number">{item.number}</div>
      <div className="reason-divider" />
      <p className={`reason-text ${hovered ? 'hovered' : ''}`}>{item.text}</p>
      <div className="reason-heart">♥</div>
    </div>
  );
}

export default function ReasonsSection({ reasons }) {
  const [titleRef, titleVisible] = useInView(0.3);

  return (
    <section className="reasons-section" id="reasons">
      <div className="reasons-decor-left">♥</div>
      <div className="reasons-decor-right">♥</div>

      <div ref={titleRef} className={`section-header ${titleVisible ? 'visible' : ''}`}>
        <div className="section-eyebrow">
          <span className="eyebrow-line" />
          <span>Reasons</span>
          <span className="eyebrow-line" />
        </div>
        <h2 className="section-title">
          why i love you
          <span className="title-italic"> so much</span>
        </h2>
      </div>

      <div className="reasons-list">
        {reasons.map((item, i) => (
          <ReasonItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
