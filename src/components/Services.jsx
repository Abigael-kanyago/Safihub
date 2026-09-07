import React, { useState } from 'react';
import './Services.css';

const services = [
  {
    title: 'House Cleaning',
    image: '/images/deepcleaning.jpeg',
    description: 'Complete home cleaning for kitchens, living rooms, bedrooms, and bathrooms using gentle, effective products.',
    features: ['Daily and deep cleaning', 'Dust, vacuum, mop', 'Eco-friendly solutions', 'Consistent quality']
  },
  {
    title: 'Office Cleaning',
    image: '/images/hero_2.jpg',
    description: 'Office cleaning for desks, meeting rooms and lobby areas that keeps your workspace neat and ready for visitors.',
    features: ['Sanitize desks and surfaces', 'Refresh common areas', 'Restroom maintenance', 'Flexible timing']
  },
  {
    title: 'Deep Cleaning',
    image: '/images/hero_3.jpg',
    description: 'A top-to-bottom refresh for kitchens, bathrooms and hard-to-reach spaces to remove hidden dirt and grime.',
    features: ['Kitchen scrub', 'Bathroom detail clean', 'Baseboard and trim care', 'Thorough surface treatment']
  },
  {
    title: 'Move-In/Move-Out Cleaning',
    image: '/images/moving%20inout.jpeg',
    description: 'Move-in and move-out cleaning for homes and apartments, leaving every room ready for the next occupant.',
    features: ['Cabinets and appliances', 'Floors and windows', 'Closets and shelves', 'Inspection-ready finish']
  },
  {
    title: 'After Construction Cleaning',
    image: '/images/construction.jpeg',
    description: 'Post-construction cleanup designed to remove dust, debris and residue so the space looks polished and complete.',
    features: ['Dust and debris removal', 'Surface and fixture wipe-down', 'Detail cleaning', 'Safe disposal']
  },
];

export default function Services({ onBookNow }) {
  const [active, setActive] = useState(0);

  const selected = services[active] || services[0];

  return (
    <section className="services-section" id="services">
      <div className="services-dynamic-bg">
        <div className="services-blob services-blob-1"></div>
        <div className="services-blob services-blob-2"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        <div className="services-header text-center reveal">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-title">We offer the following cleaning services</h2>
          
        </div>

        <div className="services-card">
          <div className="services-tabs-wrapper">
            <div className="services-tabs" role="tablist" aria-label="Service types">
              {services.map((s, i) => (
                <button
                  key={i}
                  className={`service-pill ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          <div className="services-detail reveal">
            <div className="services-info">
              <h3 className="services-detail-title">{selected.title}</h3>
              <p className="services-detail-desc">{selected.description}</p>

              <ul className="services-checklist">
                {selected.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="services-cta-row">
                <button className="btn-primary" onClick={() => onBookNow && onBookNow(selected.title)}>Book Now</button>
              </div>
            </div>

            <div className="services-image">
              <img src={selected.image} alt={selected.title} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
