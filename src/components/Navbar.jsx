import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const links = ['Home','About Us','Services','Why Choose Us','Contact Us'];

export default function Navbar({ onBookNow, onJoinUs }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={() => setActive('Home')}>
          <img src="/images/logo.jpg" alt="SafiSpace Logo" className="logo-image" />
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
          <button className="btn-outline nav-join" style={{ marginRight: '10px' }} onClick={onJoinUs}>
            JOIN US
          </button>
          <button className="btn-primary nav-book" onClick={onBookNow}>
            BOOK NOW
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}
