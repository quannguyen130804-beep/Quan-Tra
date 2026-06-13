// src/components/TimelineSection.jsx
import { useRef, useState, useEffect } from 'react';
import './TimelineSection.css';

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

function TimelineItem({ item, index, isLeft }) {
  const [ref, inView] = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`timeline-item ${isLeft ? 'left' : 'right'} ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="timeline-card">
        {item.image && (
          <div className="tl-img-wrap">
            <img src={item.image} alt={item.title} className="tl-img" />
          </div>
        )}
        <div className="tl-content">
          <div className="tl-date">
            <span className="tl-emoji">{item.emoji || '💗'}</span>
            <span>{item.date}</span>
          </div>
          <h3 className="tl-title">{item.title}</h3>
          <p className="tl-desc">{item.description}</p>
        </div>
      </div>
      <div className="timeline-dot">
        <div className="dot-inner" />
      </div>
    </div>
  );
}

export default function TimelineSection({ timeline }) {
  const [titleRef, titleVisible] = useInView(0.3);

  return (
    <section className="timeline-section" id="timeline">
      <div className="section-bg-pattern" />

      <div ref={titleRef} className={`section-header ${titleVisible ? 'visible' : ''}`}>
        <div className="section-eyebrow">
          <span className="eyebrow-line" />
          <span>Timeline</span>
          <span className="eyebrow-line" />
        </div>
        <h2 className="section-title">
          Những kỷ niệm đáng nhớ
          <span className="title-italic"> cùng cô bé này</span>
        </h2>
      </div>

      <div className="timeline-track">
        <div className="timeline-line" />
        {timeline.map((item, i) => (
          <TimelineItem
            key={i}
            item={item}
            index={i}
            isLeft={i % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}
