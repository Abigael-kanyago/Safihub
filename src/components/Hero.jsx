import React, { useState, useEffect, useRef } from 'react';
import { FaShieldAlt, FaStar, FaUsers, FaMedal, FaPlay } from 'react-icons/fa';
import './Hero.css';

const features = [
  { icon: <FaShieldAlt />, label: 'Trusted &\nReliable' },
  { icon: <FaStar />,      label: 'High Quality\nCleaning' },
  { icon: <FaUsers />,     label: 'Professional\nTeam' },
  { icon: <FaMedal />,     label: 'Satisfaction\nGuaranteed' },
];

const Particle = ({ style }) => <div className="particle" style={style} />;
const Sparkle  = ({ style }) => <div className="sparkle" style={style} />;

export default function Hero({ onBookNow }) {
  const particlesRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/hero_slide1.jpg',
    '/images/hero_slide2.jpg',
    '/images/hero_slide3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const particles = Array.from({ length: 14 }, (_, i) => ({
    key: i,
    style: {
      left:  `${Math.random() * 100}%`,
      top:   `${Math.random() * 100}%`,
      width: `${6 + Math.random() * 16}px`,
      height:`${6 + Math.random() * 16}px`,
      opacity: 0.08 + Math.random() * 0.15,
      animationDuration: `${4 + Math.random() * 6}s`,
      animationDelay:    `${Math.random() * 4}s`,
    }
  }));

  const sparkles = Array.from({ length: 8 }, (_, i) => ({
    key: i,
    style: {
      left:  `${10 + Math.random() * 80}%`,
      top:   `${10 + Math.random() * 80}%`,
      width: `${4 + Math.random() * 8}px`,
      height:`${4 + Math.random() * 8}px`,
      animationDuration: `${2 + Math.random() * 3}s`,
      animationDelay:    `${Math.random() * 3}s`,
    }
  }));

  return (
    <section className="hero" id="home">
      {/* Particles */}
      <div className="hero-particles">
        {particles.map(p => <Particle key={p.key} style={p.style} />)}
        {sparkles.map(s => <Sparkle key={s.key} style={s.style} />)}
      </div>

      {/* Left */}
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot" />
          WELCOME TO SAFISPACE
        </div>

        <h1 className="hero-h1">
          Reliable.<br />
          Professional.<br />
          <span className="hero-spotless">
            Spotless.
            <svg className="underline-svg" viewBox="0 0 220 14" fill="none">
              <path d="M4 10 Q55 2 110 8 Q165 14 216 6" stroke="#FFC107" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
            </svg>
          </span>
        </h1>

        <p className="hero-sub">
          We deliver top-quality cleaning services for homes, offices, and commercial spaces across Kenya. Your space, our priority.
        </p>

        <div className="hero-btns">
          <button className="btn-primary hero-cta" onClick={onBookNow}>
            Book a Service &rarr;
          </button>
        </div>

        <div className="hero-features">
          {features.map((f, i) => (
            <div className="feature-chip" key={i}>
              <span className="feature-icon">{f.icon}</span>
              <span className="feature-label">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="hero-right">
        <div className="hero-img-wrap">
          {slides.map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt="Safispace Professional Cleaners" 
              className={`hero-slide-img ${index === currentSlide ? 'active' : ''}`} 
            />
          ))}
          {/* Decorative gold curve */}
          <svg className="gold-curve" viewBox="0 0 500 80" fill="none">
            <path d="M0 40 Q125 0 250 40 Q375 80 500 40 L500 80 L0 80 Z" fill="#FFC107" opacity="0.85"/>
          </svg>
          {/* Floating badge */}
          <div className="hero-floating-badge">
            <span className="floating-num">500+</span>
            <span className="floating-label">Happy Clients</span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F5F7FA"/>
        </svg>
      </div>
    </section>
  );
}
