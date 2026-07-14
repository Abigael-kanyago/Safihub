import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMapMarkerAlt, FaClock, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import './Navbar.css';

const links = ['Home','About Us','Services', 'Contact Us'];

export default function Navbar({ onBookNow, onJoinUs }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
    const id = link.toLowerCase().replace(/\s+/g, '-');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span><FaMapMarkerAlt /> Nairobi, Kenya</span>
          <span><FaClock /> Mon - Sat: 7:00am - 7:00pm</span>
        </div>
        <div className="top-bar-right">
          <span className="top-email"><FaEnvelope /> info@safihub.co.ke</span>
          <div className="social-icons">
            <a href="#facebook"><FaFacebookF /></a>
            <a href="#instagram"><FaInstagram /></a>
            <a href="#twitter"><FaTwitter /></a>
            <a href="#linkedin"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={() => setActive('Home')}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
              alt="Safihub Logo"
              className="nav-logo-image"
            />
          </a>

          {/* Desktop Nav */}
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            {links.map(link => (
              <li key={link}>
                <button
                  className={`nav-link${active === link ? ' active' : ''}`}
                  onClick={() => handleNav(link)}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="nav-right">
            <button className="btn-outline-green join-team-btn" onClick={onJoinUs} style={{ marginRight: '20px', padding: '10px 20px', borderRadius: '50px', fontWeight: 'bold', border: '2px solid var(--green)', color: 'var(--green)', backgroundColor: 'transparent', cursor: 'pointer' }}>
              Join Our Team
            </button>
            <div className="nav-call">
              <div className="call-icon"><FaPhoneAlt /></div>
              <div className="call-details">
                <span className="call-label">Call Us Now</span>
                <span className="call-number">0722 000 000</span>
              </div>
            </div>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
