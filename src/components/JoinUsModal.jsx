import React, { useState, useEffect } from 'react';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import './JoinUsModal.css';

const INITIAL = { name: '', phone: '', email: '', experience: '', location: '', about: '' };

export default function JoinUsModal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setDone(false);
      setForm(INITIAL);
    }
  }, [open]);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.experience || !form.location) return;
    setDone(true);
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <div>
            <h2>Join Our Cleaning Team</h2>
            <p>Apply to become a verified SafiSpace professional</p>
          </div>
          <button className="modal-close" onClick={onClose}><FaTimes /></button>
        </div>

        <div className="modal-body">
          {done ? (
            <div className="booking-success">
              <FaCheckCircle className="success-check" />
              <h3>Application Received!</h3>
              <p>Thank you, {form.name}! We will review your application and contact you soon.</p>
              <button className="btn-close-done" onClick={onClose}>Close</button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="modal-section-title">Personal Details</div>
              <div className="modal-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handle} placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="07XX XXX XXX" required />
                </div>
              </div>
              <div className="modal-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@email.com" />
                </div>
                <div className="form-group">
                  <label>Location / Estate *</label>
                  <input name="location" value={form.location} onChange={handle} placeholder="Where do you live?" required />
                </div>
              </div>

              <div className="modal-section-title">Experience</div>
              <div className="modal-row">
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label>Years of Experience *</label>
                  <select name="experience" value={form.experience} onChange={handle} required>
                    <option value="">-- Select --</option>
                    <option>Less than 1 year</option>
                    <option>1 - 3 years</option>
                    <option>3 - 5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Tell us about your previous cleaning jobs</label>
                <textarea name="about" value={form.about} onChange={handle} rows={3} placeholder="E.g., I have worked for cleaning companies, or private homes..." />
              </div>

              <button type="submit" className="btn-primary modal-submit">SUBMIT APPLICATION</button>
              <p className="modal-note">We perform background checks on all our cleaners</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
