import React from 'react';
import { FaCalendarAlt, FaCheckCircle, FaArrowRight, FaShieldAlt, FaLeaf, FaMedal, FaDollarSign } from 'react-icons/fa';
import './Hero.css';

const badges = [
  { icon: <FaShieldAlt />, label: 'Trained &\nVerified Staff' },
  { icon: <FaLeaf />,      label: 'Eco-Friendly\nProducts' },
  { icon: <FaMedal />,     label: 'Satisfaction\nGuaranteed' },
  { icon: <FaDollarSign />, label: 'Affordable\nPricing' },
];

export default function Hero({ onBookNow }) {
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
          <div className="hero-image-wrapper">
            <img 
              src="/images/hero_slide1.jpg" 
              alt="Safihub Cleaning Professional" 
              className="hero-image" 
            />
          </div>
          
          <div className="booking-widget">
            <div className="widget-icon">
              <FaCalendarAlt />
            </div>
            <h3>Book Online</h3>
            <p>It's quick and easy</p>
            <ul className="widget-list">
              <li><FaCheckCircle /> Choose a service</li>
              <li><FaCheckCircle /> Pick a date & time</li>
              <li><FaCheckCircle /> We'll handle the rest</li>
            </ul>
            <button className="btn-green-full" onClick={onBookNow}>
              Book Now <FaArrowRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
