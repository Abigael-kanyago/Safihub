import React from 'react';
import { FaHome, FaBuilding, FaBug, FaTshirt, FaSeedling, FaTrashAlt, FaArrowRight, FaUser, FaCheckCircle, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaHome />,
    title: 'Home Cleaning',
    desc: 'Deep and regular cleaning to keep your home sparkling clean.',
  },
  {
    icon: <FaBuilding />,
    title: 'Office Cleaning',
    desc: 'Professional cleaning services for a productive work environment.',
  },
  {
    icon: <FaBug />,
    title: 'Fumigation & Pest Control',
    desc: 'Safe and effective pest control solutions for your space.',
  },
  {
    icon: <FaTshirt />,
    title: 'Laundry Services',
    desc: 'Reliable laundry and ironing services delivered on time.',
  },
  {
    icon: <FaSeedling />,
    title: 'Landscaping',
    desc: 'Keep your outdoor spaces beautiful, green and well maintained.',
  },
  {
    icon: <FaTrashAlt />,
    title: 'Waste Management',
    desc: 'Efficient waste collection and disposal for homes and businesses.',
  },
];

const stats = [
  { icon: <FaUser />, num: '500+', label: 'Happy Clients' },
  { icon: <FaBriefcase />, num: '1,000+', label: 'Jobs Completed' },
  { icon: <FaGraduationCap />, num: '50+', label: 'Trained Staff' },
  { icon: <FaCheckCircle />, num: '100%', label: 'Satisfaction Guarantee' },
];

export default function Services({ onBookNow }) {
  return (
    <section className="services-section" id="services">
      <div className="container">
        
        <div className="services-header">
          <span className="services-label">OUR SERVICES</span>
          <h2 className="services-title">What We Offer</h2>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <button 
                className="service-link" 
                onClick={() => onBookNow(s.title)}
              >
                Learn More <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

        <div className="services-stats">
          {stats.map((st, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-icon-wrap">
                <div className="stat-icon-outline">{st.icon}</div>
              </div>
              <div className="stat-details">
                <span className="stat-num">{st.num}</span>
                <span className="stat-label">{st.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
