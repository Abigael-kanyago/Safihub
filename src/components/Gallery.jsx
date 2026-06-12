import React, { useState } from 'react';
import './Gallery.css';

const items = [
  { emoji: '🛋️', label: 'Living Room Cleaning',   span: 'tall' },
  { emoji: '💼', label: 'Office Cleaning',         span: '' },
  { emoji: '🍳', label: 'Kitchen Cleaning',         span: '' },
  { emoji: '🏬', label: 'Commercial Cleaning',     span: 'wide' },
  { emoji: '📦', label: 'Move Out Cleaning',       span: '' },
  { emoji: '🪟', label: 'Window Cleaning',         span: 'tall' },
  { emoji: '🚿', label: 'Bathroom Cleaning',       span: '' },
  { emoji: '🏗️', label: 'Post-Construction',      span: '' },
];

const colors = [
  'linear-gradient(135deg,#001B5E,#002C8C)',
  'linear-gradient(135deg,#002C8C,#0048c8)',
  'linear-gradient(135deg,#FFC107,#e6ac00)',
  'linear-gradient(135deg,#001244,#001B5E)',
  'linear-gradient(135deg,#0048c8,#002C8C)',
  'linear-gradient(135deg,#e6ac00,#FFC107)',
  'linear-gradient(135deg,#001B5E,#001244)',
  'linear-gradient(135deg,#002C8C,#001B5E)',
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="gallery-section reveal" id="gallery">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <span className="section-label">GALLERY</span>
          <h2 className="section-title">Our Work Speaks for Itself</h2>
          <p className="section-sub">Every space we touch becomes a showcase of spotless professionalism.</p>
        </div>
        <div className="gallery-masonry">
          {items.map((item, i) => (
            <div
              key={i}
              className={`gallery-item${item.span ? ' ' + item.span : ''}${active === i ? ' zoomed' : ''}`}
              style={{ background: colors[i % colors.length] }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="gallery-overlay">
                <span className="gallery-emoji">{item.emoji}</span>
                <span className="gallery-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
