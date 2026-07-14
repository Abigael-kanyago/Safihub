import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaCheckCircle, FaClock, FaMapMarkerAlt, FaShieldAlt, FaUserTie } from 'react-icons/fa';
import './Hero.css';

const badges = [
  { icon: <FaShieldAlt />, label: 'Vetted cleaners' },
  { icon: <FaClock />, label: 'Same-day slots' },
  { icon: <FaCheckCircle />, label: 'Quality checked' },
];

const heroImages = [
  "/images/hero_1.jpg",
  "/images/hero_2.jpg",
  "/images/hero_3.jpg",

];

export default function Hero({ onBookNow, onJoinUs }) {
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
            <FaMapMarkerAlt />
            Nairobi's flexible cleaning booking platform
          </div>

          <h1 className="hero-title">
            <span className="navy-text">Cleaning made simple.</span><br />
            <span className="green-text">Spaces made fresh.</span>
          </h1>

          <p className="hero-desc">
            Safihub connects busy homes, offices, and businesses with trained cleaners you can trust.
            Choose your service, pick a time, and relax while the clean team handles the rest.
          </p>

          <div className="hero-actions">
            <button className="btn-navy" onClick={onBookNow}>
              Book a Service <FaArrowRight />
            </button>
            <button className="btn-outline-navy" onClick={onJoinUs}>
              Join as a Cleaner <FaUserTie />
            </button>
          </div>

          <div className="hero-trust-row" aria-label="Safihub service highlights">
            {badges.map((badge) => (
              <div className="hero-trust-item" key={badge.label}>
                <span>{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
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

