import React from 'react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import './WhyUs.css';

const reasons = [
  'Trained & Certified Professionals',
  'Affordable, Transparent Pricing',
  'Eco-Friendly Cleaning Products',
  'Fast Response Time — Same Day Available',
  '100% Satisfaction Guaranteed',
  'Background-Checked & Insured Staff',
];

export default function WhyUs() {
  return (
    <section className="whyus-section" id="about-us">
      <div className="container">
        <div className="whyus-inner">
          {/* Left image collage */}
          <div className="whyus-images reveal">
            <div className="img-collage-wrapper">
              <div className="collage-bg-shape"></div>
              <img src="/images/collage.jpg" alt="Safihub Cleaning Examples" className="whyus-actual-img" />
              {/* Floating cert badge */}
              <div className="cert-badge">
                <FaStar className="cert-star" />
                <span className="cert-num">500+</span>
                <span className="cert-label">Jobs Done</span>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="whyus-content reveal reveal-delay-2">
            <div className="section-label-glass">
              <span className="pulse-dot"></span> WHY CHOOSE US
            </div>
            <h2 className="section-title gradient-text">Why Customers<br />Trust Safihub</h2>
            <p className="section-sub" style={{ marginBottom: '40px', fontSize: '16px' }}>
              We go beyond just cleaning. Every detail, every corner — handled with care, professionalism, and a genuine passion for cleanliness. Experience the premium difference.
            </p>
            <div className="whyus-grid">
              {reasons.map((r, i) => (
                <div key={i} className="whyus-card">
                  <div className="whyus-card-icon"><FaCheckCircle /></div>
                  <span className="whyus-card-text">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
