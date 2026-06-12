import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
  { icon: <FaPhone />,         label: 'Phone',         val: '+254 700 000 000',         href: 'tel:+254700000000' },
  { icon: <FaEnvelope />,      label: 'Email',         val: 'hello@safispace.co.ke',    href: 'mailto:hello@safispace.co.ke' },
  { icon: <FaMapMarkerAlt />,  label: 'Address',       val: 'Nairobi, Kenya',           href: '#' },
  { icon: <FaClock />,         label: 'Working Hours', val: 'Mon–Sat: 7am – 7pm',      href: '#' },
];

const services = [
  'Studio / Bedsitter Cleaning',
  'Residential Apartment Cleaning',
  'Office Cleaning',
  'After Construction Cleaning',
  'Move In / Move Out Cleaning',
  'Commercial Cleaning',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setSent(true);
  };

  return (
    <section className="contact-section reveal" id="contact-us">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <span className="section-label">CONTACT US</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-sub">Ready to book or have questions? Reach out and we'll get back to you within minutes.</p>
        </div>
        <div className="contact-inner">
          {/* Left */}
          <div className="contact-info reveal">
            <h3 className="contact-info-title">Let's Start a Conversation</h3>
            <p className="contact-info-sub">Whether you want a quote, have questions, or want to schedule a clean — we're here.</p>
            <div className="contact-cards">
              {contactInfo.map((c, i) => (
                <a key={i} href={c.href} className="contact-card">
                  <span className="contact-card-icon">{c.icon}</span>
                  <div>
                    <span className="contact-card-label">{c.label}</span>
                    <span className="contact-card-val">{c.val}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="contact-wa">
              <a href="https://wa.me/254700000000?text=Hello%20SafiSpace!" target="_blank" rel="noreferrer" className="btn-primary wa-btn">
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form-box reveal reveal-delay-2">
            {sent ? (
              <div className="form-success">
                <div className="success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thank you! We'll be in touch shortly via WhatsApp or email.</p>
                <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => setSent(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="contact-form">
                <h3 className="form-title">Send Us a Message</h3>
                <div className="form-row-2">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handle} placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@email.com" required />
                  </div>
                </div>
                <div className="form-row-2">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="07XX XXX XXX" required />
                  </div>
                  <div className="form-group">
                    <label>Service Needed</label>
                    <select name="service" value={form.service} onChange={handle}>
                      <option value="">-- Select a service --</option>
                      {services.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Tell us more about your needs…" />
                </div>
                <button type="submit" className="btn-primary submit-btn">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
