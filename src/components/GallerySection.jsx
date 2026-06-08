// src/components/GallerySection.jsx
import { useRef, useState, useEffect } from 'react';
import './GallerySection.css';

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

// Fixed subtle rotations for each card (so they look natural, not random on each render)
const ROTATIONS = [-3, 2, -1.5, 3.5, -2, 1, -3.5, 2.5, -1, 3];

function PolaroidCard({ item, index }) {
  const [ref, inView] = useInView(0.05);
  const rotation = ROTATIONS[index % ROTATIONS.length];

  return (
    <div
      ref={ref}
      className={`polaroid ${inView ? 'visible' : ''}`}
      style={{
        '--rotation': `${rotation}deg`,
        transitionDelay: `${index * 0.07}s`,
      }}
    >
      <div className="polaroid-photo">
        {item.image ? (
          <img src={item.image} alt={item.caption} />
        ) : (
          <div className="polaroid-placeholder">
            <span>📷</span>
            <p>thêm ảnh vào đây</p>
          </div>
        )}
      </div>
      <p className="polaroid-caption">{item.caption}</p>
    </div>
  );
}

export default function GallerySection({ gallery }) {
  const [titleRef, titleVisible] = useInView(0.3);

  return (
    <section className="gallery-section" id="gallery">
      <div ref={titleRef} className={`section-header ${titleVisible ? 'visible' : ''}`}>
        <div className="section-eyebrow">
          <span className="eyebrow-line" />
          <span>Chuchoe</span>
          <span className="eyebrow-line" />
        </div>
        <h2 className="section-title">
          1001 biểu cảm dễ thương
          <span className="title-italic"> của Trà</span>
        </h2>
        <p className="gallery-hand-text">How i am lucky to have you in my life 🥹</p>
      </div>

      <div className="polaroid-wall">
        {gallery.map((item, i) => (
          <PolaroidCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
