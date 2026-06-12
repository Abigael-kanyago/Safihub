import React, { useState } from 'react';
import './Gallery.css';

const items = [
  { img: '/images/bedroom.jpg', label: 'Living Room Cleaning', span: 'tall' },
  { img: '/images/cleaners_group1.jpg', label: 'Expert Team', span: '' },
  { img: '/images/collage.jpg', label: 'Spotless Results', span: '' },
  { emoji: '🏬', label: 'Commercial Cleaning', span: 'wide' },
  { img: '/images/cleaners_group2.jpg', label: 'Professional Staff', span: '' },
  { img: '/images/window_cleaning.jpg', label: 'Window Cleaning', span: 'tall' },
  { emoji: '🚿', label: 'Bathroom Cleaning', span: '' },
  { emoji: '✨', label: 'Satisfaction Guaranteed', span: '' },
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
              style={{ background: item.img ? `url(${item.img}) center/cover` : colors[i % colors.length] }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="gallery-overlay">
                {item.emoji && <span className="gallery-emoji">{item.emoji}</span>}
                <span className="gallery-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
