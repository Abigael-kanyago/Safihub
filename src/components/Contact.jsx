import React from 'react';
import './Contact.css';
export default function Contact() {
  return (
    <section className="contact-section reveal" id="contact-us">
      <div className="contact-bg-pattern"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="contact-header text-center">
          <span className="section-label">CONTACT US</span>
          <h2 className="section-title">Let's Get In Touch</h2>
          <p className="section-sub">Ready to book or have questions? Reach out and we'll get back to you within minutes.</p>
        </div>
        
        <div className="contact-inner contact-hero-layout">
          {/* Left Side: Info (keeps Start a Conversation) */}
          <div className="contact-info reveal contact-info-panel">
            <div className="contact-info-header">
              <h3 className="contact-info-title">Start a Conversation</h3>
              <p className="contact-info-sub">Whether you want a quote, have questions, or want to schedule a clean — we're ready to help.</p>
            </div>

            <div className="contact-feature-list">
              <div className="feature-line"><span className="check">✔</span> Professional Team</div>
              <div className="feature-line"><span className="check">✔</span> Reliable Service</div>
            </div>

            <div style={{ marginTop: 28 }}>
              <a href="/" className="btn-primary large-cta">Book Cleaning Now <span className="cta-arrow">➜</span></a>
            </div>
          </div>

          {/* Right Side: Hero Image */}
          <div className="contact-hero reveal">
            <img src="/images/hero_2.jpg" alt="Cleaning" className="contact-hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
