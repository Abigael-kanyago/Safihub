import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaCheckCircle, FaArrowRight, FaShieldAlt, FaLeaf, FaMedal, FaDollarSign } from 'react-icons/fa';
import './Hero.css';

const badges = [
  { icon: <FaShieldAlt />, label: 'Trained &\nVerified Staff' },
  { icon: <FaLeaf />, label: 'Eco-Friendly\nProducts' },
  { icon: <FaMedal />, label: 'Satisfaction\nGuaranteed' },
  { icon: <FaDollarSign />, label: 'Affordable\nPricing' },
];

const heroImages = [
  "/images/hero_1.jpg",
  "/images/hero_2.jpg",
  "/images/hero_3.jpg",

];

export default function Hero({ onBookNow }) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Side: Content */}
        <div className="hero-content">
          <div className="hero-subtitle">
            <span className="subtitle-bar"></span>
            PROFESSIONAL CLEANING SERVICES FOR
          </div>

          <h1 className="hero-title">
            <span className="navy-text">CLEAN SPACES.</span><br />
            <span className="green-text">BETTER LIVING.</span>
          </h1>

          <p className="hero-desc">
            We provide reliable and eco-friendly cleaning solutions for homes, offices, and commercial spaces.
          </p>

          <div className="hero-actions">
            <button className="btn-navy" onClick={onBookNow}>
              Book a Service <FaArrowRight />
            </button>
            <button className="btn-outline-navy" onClick={() => {
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Our Services <FaArrowRight />
            </button>
          </div>

          <div className="hero-badges">
            {badges.map((b, i) => (
              <div className="badge-item" key={i}>
                <div className="badge-icon">{b.icon}</div>
                <div className="badge-label">{b.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image and Widget */}
        <div className="hero-visual">
          {/* Decorative Blobs */}
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>

          <div className="hero-image-wrapper">
            {heroImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Safihub Premium Cleaning ${index + 1}`}
                className={`hero-image ${index === currentImg ? 'active' : ''}`}
              />
            ))}
            <div className="image-overlay-glow"></div>

            {/* Slider Indicators */}
            <div className="slider-indicators">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentImg ? 'active' : ''}`}
                  onClick={() => setCurrentImg(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
