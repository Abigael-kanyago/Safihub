import React from 'react';
import { FaStar, FaUsers, FaLeaf, FaThumbsUp, FaClock } from 'react-icons/fa';
import './WhyUs.css';

const reasons = [
  {
    id: '01',
    title: 'Professional Cleaning Team',
    icon: FaUsers,
    position: 'left-top',
  },
  {
    id: '02',
    title: 'Safe & Eco-Friendly Solutions',
    icon: FaLeaf,
    position: 'left-bottom',
  },
  {
    id: '03',
    title: 'Satisfaction Guaranteed',
    icon: FaThumbsUp,
    position: 'right-top',
  },
  {
    id: '04',
    title: 'On-Time & Reliable Service',
    icon: FaClock,
    position: 'right-bottom',
  },
];

export default function WhyUs() {
  return (
    <section className="whyus-section" id="about-us">
      <div className="container">
        <div className="whyus-header text-center">
          <span className="whyus-label">WHY CHOOSE US</span>
          <h2 className="whyus-title">Trusted cleaning that fits your home and schedule</h2>
          <p className="whyus-copy">Fast, consistent service with eco-friendly products and a team focused on giving every space a fresh, healthy finish.</p>
        </div>

        <div className="whyus-circle-layout reveal">
          <div className="whyus-center">
            <img src="/images/hero_3.jpg" alt="Cleaning team" className="whyus-center-img" />
            <div className="whyus-badge">
          
              <div>
                
                
              </div>
            </div>
          </div>

          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={`whyus-feature ${item.position}`}>
                <span className="feature-connector" aria-hidden="true" />
                <div className="feature-card">
                  <div className="feature-head">
                    <span className="feature-number">{item.id}</span>
                    <span className="feature-icon">
                      <Icon />
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
