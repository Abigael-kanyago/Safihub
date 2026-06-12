import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
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
    <section className="whyus-section" id="why-choose-us">
      <div className="container">
        <div className="whyus-inner">
          {/* Left image collage */}
          <div className="whyus-images reveal">
            <div className="img-collage-wrapper">
              <img src="/images/collage.jpg" alt="Safispace Cleaning Examples" className="whyus-actual-img" />
              {/* Floating cert badge */}
              <div className="cert-badge">
                <span className="cert-num">500+</span>
                <span className="cert-label">Jobs Done</span>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="whyus-content reveal reveal-delay-2">
            <span className="section-label">WHY CHOOSE US</span>
            <h2 className="section-title">Why Customers<br />Trust SafiSpace</h2>
            <p className="section-sub" style={{ marginBottom: '36px' }}>
              We go beyond just cleaning. Every detail, every corner — handled with care, professionalism, and a genuine passion for cleanliness.
            </p>
            <ul className="whyus-list">
              {reasons.map((r, i) => (
                <li key={i} className="whyus-item">
                  <span className="check-icon"><FaCheckCircle /></span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
