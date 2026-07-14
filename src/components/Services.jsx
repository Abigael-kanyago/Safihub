import React from 'react';
import { FaHome, FaBuilding, FaBug, FaTshirt, FaSeedling, FaTrashAlt, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaHome />,
    title: 'Home Cleaning',
    desc: 'Deep and regular cleaning to keep your home sparkling clean.',
    theme: { color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.1)' } // Blue
  },
  {
    icon: <FaBuilding />,
    title: 'Office Cleaning',
    desc: 'Professional cleaning services for a productive work environment.',
    theme: { color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.1)' } // Purple
  },
  {
    icon: <FaBug />,
    title: 'Fumigation & Pest Control',
    desc: 'Safe and effective pest control solutions for your space.',
    theme: { color: '#EF4444', bg: 'rgba(239, 68, 68, 0.1)' } // Red
  },
  {
    icon: <FaTshirt />,
    title: 'Laundry Services',
    desc: 'Reliable laundry and ironing services delivered on time.',
    theme: { color: '#06B6D4', bg: 'rgba(6, 182, 212, 0.1)' } // Cyan
  },
  {
    icon: <FaSeedling />,
    title: 'Landscaping',
    desc: 'Keep your outdoor spaces beautiful, green and well maintained.',
    theme: { color: '#10B981', bg: 'rgba(16, 185, 129, 0.1)' } // Emerald
  },
  {
    icon: <FaTrashAlt />,
    title: 'Waste Management',
    desc: 'Efficient waste collection and disposal for homes and businesses.',
    theme: { color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.1)' } // Amber
  },
];

export default function Services({ onBookNow }) {
  return (
    <section className="services-section" id="services">
      <div className="services-bg-pattern"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="services-header text-center reveal">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-sub">We provide a comprehensive range of premium cleaning and maintenance services tailored to your specific needs.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div 
              className="service-card reveal" 
              style={{ 
                animationDelay: `${i * 0.1}s`,
                '--icon-color': s.theme.color,
                '--icon-bg': s.theme.bg
              }} 
              key={i}
            >
              <div className="service-card-inner">
                <div className="service-icon-wrapper">
                  <div className="service-icon">{s.icon}</div>
                </div>
                <h3 className="service-name">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-footer">
                  <button 
                    className="service-link" 
                    onClick={() => onBookNow(s.title)}
                  >
                    <span>Learn More</span> <FaArrowRight className="link-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
