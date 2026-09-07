import React from 'react';
import './JoinUsCTA.css';
import { FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa';

export default function JoinUsCTA({ onJoinUs }) {
  return (
    <section className="join-cta-section">
      <div className="join-cta-container">
        
        {/* Left Side: Creative Visual */}
        <div className="join-cta-visual">
          <div className="visual-backdrop"></div>
          <img 
            src={`${process.env.PUBLIC_URL}/images/join_us.jpeg`} 
            alt="Professional Cleaner" 
            className="visual-image" 
          />
          {/* Floating elements for creativity */}
          <div className="floating-badge top-badge">
            
          
          </div>
          <div className="floating-badge bottom-badge">
            
            
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="join-cta-content">
          <h4 className="cta-subtitle">CAREERS AT SAFIHUB</h4>
          <h2 className="cta-title">Are you a professional cleaner?</h2>
          <p className="cta-desc">
            Join Nairobi's most trusted and elite cleaning network. Enjoy flexible working hours, guaranteed consistent pay, and a community that supports your growth.
          </p>
          
          <ul className="cta-benefits">
            <li><FaCheckCircle className="benefit-icon" /> Be your own boss & choose your hours</li>
            <li><FaCheckCircle className="benefit-icon" /> Premium rates and fast weekly payouts</li>
            <li><FaCheckCircle className="benefit-icon" /> Access to high-end verified clients</li>
          </ul>

          <button onClick={onJoinUs} className="btn-join-creative">
            Apply to Join Us <FaArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}
