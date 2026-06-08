// src/components/LoginPage.jsx
import { useState, useEffect } from 'react';
import './LoginPage.css';

export default function LoginPage({ onLogin, correctPassword, nameA, nameB }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [hint, setHint] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === correctPassword) {
      onLogin();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 600);
      setTimeout(() => setError(false), 2000);
      if (!hint) setTimeout(() => setHint(true), 2000);
    }
  }

  return (
    <div className="login-page">
      {/* Floating hearts background */}
      <div className="login-bg-hearts">
        {['💗','🌹','💕','✨','🌸','💖','🌹','💗','✨','💕'].map((h, i) => (
          <span key={i} className="bg-heart" style={{
            left: `${10 + i * 9}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${6 + (i % 3) * 2}s`,
            fontSize: `${16 + (i % 4) * 8}px`,
          }}>{h}</span>
        ))}
      </div>

      <div className={`login-card ${shake ? 'shake' : ''}`}>
        <div className="login-icon">🌹</div>
        <h1 className="login-title">
          {nameA} <span>&</span> {nameB}
        </h1>
        <p className="login-subtitle">
          Nhập mật khẩu để vào thế giới của tụi mình
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className={`login-input-wrap ${error ? 'error' : ''}`}>
            <input
              type="password"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Mật khẩu..."
              className="login-input"
              autoComplete="off"
              autoFocus
            />
            <span className="input-lock">🔒</span>
          </div>

          {error && (
            <p className="login-error">Sai rồi bạn ơi, thử lại nhé 💭</p>
          )}
          {hint && !error && (
            <p className="login-hint">💡 Gợi ý: ngày kỉ niệm của tụi mình đó~</p>
          )}

          <button type="submit" className="login-btn">
            <span>Vào thôi</span>
            <span className="btn-heart">💗</span>
          </button>
        </form>

        <p className="login-footer">
          Feel home in your heart ✨
        </p>
      </div>
    </div>
  );
}
