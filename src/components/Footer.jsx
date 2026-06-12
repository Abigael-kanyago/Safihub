import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

export default function Footer({ onBookNow }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-inner">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/images/logo.jpg" alt="SafiSpace Logo" className="footer-logo-image" />
              </div>
              <p>Reliable. Professional. Spotless. Your trusted cleaning partner across Nairobi and beyond.</p>
              <div className="footer-socials">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://wa.me/254700000000" aria-label="WhatsApp"><FaWhatsapp /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {['Home','About Us','Services','Why Choose Us','Contact Us'].map(l => (
                  <li key={l}><a href={`#${l.toLowerCase().replace(/\s+/g,'-')}`}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                {['Studio / Bedsitter','Residential (1–4 BR)','Office Cleaning','After Construction','Move In / Out','Commercial Cleaning'].map(s => (
                  <li key={s}><a href="#services">{s}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="footer-contact-list">
                <li><FaPhone /><a href="tel:+254700000000">+254 700 000 000</a></li>
                <li><FaEnvelope /><a href="mailto:hello@safispace.co.ke">hello@safispace.co.ke</a></li>
                <li><FaMapMarkerAlt /><span>Nairobi, Kenya</span></li>
              </ul>
              <button className="btn-primary footer-book" onClick={onBookNow}>Book Now →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© 2026 <strong>SafiSpace</strong> Cleaning Service. All Rights Reserved.</p>
            <p>Made with ❤️ in Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
