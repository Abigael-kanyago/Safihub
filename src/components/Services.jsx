import React, { useState } from 'react';
import { FaHome, FaBuilding, FaWarehouse, FaTruck } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaHome />,
    img: '/images/bedroom.jpg',
    title: 'Residential Cleaning',
    desc: 'Deep cleaning for homes that shine and feel refreshing. We handle every corner — from kitchen to bathroom — with expert care.',
    price: 'From KSh 1,200',
    color: '#e8f0fe',
    tag: 'Most Popular',
  },
  {
    icon: <FaBuilding />,
    img: '/images/window_cleaning.jpg',
    title: 'Office Cleaning',
    desc: 'Clean, organized workspaces that boost productivity. Daily, weekly or one-time deep clean packages available.',
    price: 'Custom Quote',
    color: '#fef9e7',
    tag: 'Corporate',
  },
  {
    icon: <FaWarehouse />,
    img: '/images/cleaners_group2.jpg',
    title: 'Commercial Cleaning',
    desc: 'Professional cleaning for shops, buildings and commercial spaces. Flexible scheduling around your business hours.',
    price: 'Custom Quote',
    color: '#e8f5e9',
    tag: 'Enterprise',
  },
  {
    icon: <FaTruck />,
    img: '/images/cleaners_group1.jpg',
    title: 'Move In/Out Cleaning',
    desc: 'Move in or move out with a spotless space, stress-free. We ensure your deposit back or your new home sparkles.',
    price: 'From KSh 2,500',
    color: '#fce4ec',
    tag: 'Specialized',
  },
];

export default function Services({ onBookNow }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="services-section reveal" id="services">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-title">Tailored Cleaning Solutions<br />For Every Space</h2>
          <p className="section-sub">Whether it's a studio apartment or a full commercial building, we have the right solution.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-card reveal reveal-delay-${i + 1}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--card-bg': s.color }}
            >
              <div className="service-card-inner">
                {/* Image placeholder */}
                <div className="service-img" style={{ backgroundImage: `url(${s.img})` }}>
                  <div className="service-img-overlay"></div>
                  <div className="service-img-icon">{s.icon}</div>
                  {s.tag && <span className="service-tag">{s.tag}</span>}
                </div>
                {/* Content */}
                <div className="service-content">
                  <div className="service-icon-wrap">{s.icon}</div>
                  <h3 className="service-name">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <div className="service-footer">
                    <span className="service-price">{s.price}</span>
                    <button className="service-btn" onClick={onBookNow}>Book Now →</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
