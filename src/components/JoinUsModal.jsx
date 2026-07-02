import React, { useState, useEffect } from 'react';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import './JoinUsModal.css';
import { supabase } from '../supabaseClient';

const INITIAL = { name: '', phone: '', email: '', experience: '', location: '', about: '' };

export default function JoinUsModal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL);
  const [done, setDone] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setDone(false);
      setForm(INITIAL);
      setErrorMsg('');
      setIsSubmitting(false);
    }
  }, [open]);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!form.name || !form.phone || !form.experience || !form.location) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Bypass dead database completely to prevent freezing!
    const safihubPhone = "254706151837"; 
    const cvText = form.cvName ? `\n*CV:* I will attach my CV (${form.cvName}) in this chat.` : '';
    const message = `🌟 Hello Safihub!\n\nI would like to apply to be a cleaner.\n*Name:* ${form.name}\n*Location:* ${form.location}\n*Experience:* ${form.experience}${cvText}\n\nPlease review my application!`;

    const dynamicUrl = `https://wa.me/${safihubPhone}?text=${encodeURIComponent(message)}`;
    
    // We add whatsappLink dynamically to the component state
    setWhatsappLink(dynamicUrl);
    setDone(true);
    setIsSubmitting(false);
  };

  const [whatsappLink, setWhatsappLink] = useState('https://wa.me/254706151837');

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <div>
            <h2>Join Our Cleaning Team</h2>
            <p>Apply to become a verified Safihub professional</p>
          </div>
          <button className="modal-close" onClick={onClose}><FaTimes /></button>
        </div>

        <div className="modal-body">
          {done ? (
            <div className="booking-success">
              <FaCheckCircle className="success-check" />
              <h3>Application Ready!</h3>
              <p>Thank you, {form.name}! Click below to send your application to our WhatsApp.</p>
              
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex', gap: 8, marginTop: 20 }}>
                💬 Send Application on WhatsApp
              </a>

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
                <label>Attach your CV (Optional)</label>
                <input 
                  type="file" 
                  name="cv" 
                  onChange={(e) => setForm({...form, cvName: e.target.files[0]?.name || ''})} 
                  accept=".pdf,.doc,.docx" 
                  style={{ padding: '10px 0' }}
                />
                <small style={{display: 'block', marginTop: '6px', color: 'var(--gray)', fontSize: '12px', fontStyle: 'italic'}}>
                  * Note: For security reasons, you will need to manually attach this file again when WhatsApp opens.
                </small>
              </div>

              {errorMsg && <div className="error-message" style={{ color: 'red', marginBottom: '10px', textAlign: 'center', fontWeight: 'bold' }}>{errorMsg}</div>}

              <button type="submit" className="btn-primary modal-submit" disabled={isSubmitting}>
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
              </button>
              <p className="modal-note">We perform background checks on all our cleaners</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
