// src/components/NavBar.jsx
import { useState, useEffect } from 'react';
import './NavBar.css';

const NAV_ITEMS = [
  { id: 'home',     label: '🏠', full: 'Home' },
  { id: 'timeline', label: '⏳', full: 'Timeline' },
  { id: 'firsts',   label: '✨', full: 'First times' },
  { id: 'reasons',  label: '💗', full: 'Reasons' },
  { id: 'gallery',  label: '📷', full: 'Gallery' },
  { id: 'letter',   label: '💌', full: 'Letter' },
  { id: 'promise',  label: '💍', full: 'Promise' },
];

export default function NavBar({ nameA }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
      const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY >= sections[i].offsetTop - 200) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* House icon thay cho text */}
        <button className="nav-home-btn" onClick={() => scrollTo('home')} aria-label="Về trang chủ">
          🏡
        </button>

        {/* Desktop nav */}
        <div className="nav-links">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`nav-btn ${active === item.id ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              <span className="nav-icon">{item.label}</span>
              <span className="nav-label">{item.full}</span>
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="nav-drawer">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`drawer-btn ${active === item.id ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              <span>{item.label}</span>
              <span>{item.full}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
