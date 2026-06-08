// src/components/PromiseSection.jsx
import { useRef, useState, useEffect } from 'react';
import './PromiseSection.css';

export default function PromiseSection({ nameB }) {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [signed, setSigned] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const lastPos = useRef(null);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#c0384f';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  function getPos(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if (e.touches) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }

  function startDraw(e) {
    e.preventDefault();
    setDrawing(true);
    const canvas = canvasRef.current;
    lastPos.current = getPos(e, canvas);
  }

  function draw(e) {
    if (!drawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pos = getPos(e, canvas);
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    lastPos.current = pos;
    setSigned(true);
  }

  function stopDraw() { setDrawing(false); }

  function clearCanvas() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSigned(false);
  }

  function handleConfirm() {
    if (!agreed || !signed) return;
    setConfirmed(true);
  }

  return (
    <section className="promise-section" id="promise">
      <div className="promise-bg" />

      {!confirmed ? (
        <div className="promise-card">
          <div className="promise-header">
            <span className="promise-icon">💌</span>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="eyebrow-line-p" />
              <span>A Question</span>
              <span className="eyebrow-line-p" />
            </div>
            <h2 className="promise-title">
              {nameB || 'Em'} ơi,
            </h2>
            <p className="promise-question">
              Em có cảm thấy hạnh phúc và muốn
              <br />
              <em>tiếp tục đồng hành cùng anh không?</em>
            </p>
          </div>

          <div className="promise-body">
            {/* Checkbox - chỉ có 1 lựa chọn */}
            <label className={`promise-checkbox-wrap ${agreed ? 'checked' : ''}`}>
              <input
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                className="promise-checkbox-input"
              />
              <div className="custom-checkbox">
                {agreed && <span className="checkmark">✓</span>}
              </div>
              <span className="checkbox-label">
                Có, em muốn ở bên anh 💗
              </span>
            </label>

            {/* Signature pad */}
            <div className={`sig-area ${agreed ? 'active' : ''}`}>
              <p className="sig-label">Chữ ký xác nhận của {nameB || 'em'}</p>
              <div className="canvas-wrap">
                <canvas
                  ref={canvasRef}
                  width={480}
                  height={160}
                  className="sig-canvas"
                  onMouseDown={startDraw}
                  onMouseMove={draw}
                  onMouseUp={stopDraw}
                  onMouseLeave={stopDraw}
                  onTouchStart={startDraw}
                  onTouchMove={draw}
                  onTouchEnd={stopDraw}
                />
                {!signed && (
                  <div className="sig-placeholder">✍️ Ký tên tại đây...</div>
                )}
              </div>
              {signed && (
                <button className="clear-btn" onClick={clearCanvas}>
                  Ký lại
                </button>
              )}
            </div>

            {/* Confirm button */}
            <button
              className={`confirm-btn ${agreed && signed ? 'ready' : 'disabled'}`}
              onClick={handleConfirm}
              disabled={!agreed || !signed}
            >
              Xác nhận 💖
            </button>
          </div>
        </div>
      ) : (
        /* Confirmed screen */
        <div className="confirmed-card">
          <div className="confetti-hearts">
            {['💗','💖','🌹','✨','💕','🌸','💗','✨'].map((h, i) => (
              <span key={i} className="conf-heart" style={{
                left: `${5 + i * 12}%`,
                animationDelay: `${i * 0.2}s`,
              }}>{h}</span>
            ))}
          </div>
          <span className="confirmed-icon">💍</span>
          <h2 className="confirmed-title">Cảm ơn em!</h2>
          <p className="confirmed-msg">
            Anh hứa sẽ luôn ở bên em,<br />
            yêu em mỗi ngày nhiều hơn ngày hôm qua. 🌹
          </p>
          <p className="confirmed-sign">— Minh Quân</p>
        </div>
      )}
    </section>
  );
}
