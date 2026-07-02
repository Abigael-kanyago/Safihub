import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Amina Mwangi',
    loc: 'Kilimani, Nairobi',
    rating: 5,
    text: 'Safihub transformed my 2-bedroom apartment. Faith was incredibly thorough — every corner spotless. The team arrived on time and left the place smelling amazing!',
    initials: 'AM',
    color: '#001B5E',
  },
  {
    name: 'David Kamau',
    loc: 'Westlands, Nairobi',
    rating: 5,
    text: 'Our office renovation post-construction clean was phenomenal. Professional, efficient, and the results were beyond expectation. Highly recommend for commercial work.',
    initials: 'DK',
    color: '#002C8C',
  },
  {
    name: 'Linda Otieno',
    loc: 'Kasarani, Nairobi',
    rating: 5,
    text: 'Used Safihub for a move-out clean and got my full deposit back! Booking was effortless, the team arrived on time, and the results were flawless. Will always use them.',
    initials: 'LO',
    color: '#0048c8',
  },
];

export default function Testimonials() {
  return (
    <section className="testi-section reveal" id="testimonials">
      <div className="testi-bg-shape" />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <span className="section-label" style={{ color: '#FFC107' }}>TESTIMONIALS</span>
          <h2 className="section-title white">What Our Clients Say</h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}>
            Don't take our word for it — hear from the hundreds of happy clients we've served across Nairobi.
          </p>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testi-card reveal reveal-delay-${i + 1}`}>
              <div className="testi-quote"><FaQuoteLeft /></div>
              <div className="testi-stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-loc">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
