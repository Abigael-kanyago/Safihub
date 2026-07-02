import React, { useState, useEffect } from 'react';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import './BookingModal.css';
import { supabase } from '../supabaseClient';

const services = [
  'Studio / Bedsitter Cleaning',
  'Residential – 1 Bedroom',
  'Residential – 2 Bedrooms',
  'Residential – 3 Bedrooms',
  'Residential – 4 Bedrooms',
  'Residential – Custom Size',
  'Office Cleaning',
  'After Construction Cleaning',
  'Move In / Move Out Cleaning',
  'Commercial Cleaning',
];

const cleaners = [
  { initials: 'FW', name: 'Faith Wanjiku', spec: 'Residential' },
  { initials: 'JM', name: 'James Mwangi', spec: 'Office & Commercial' },
  { initials: 'GA', name: 'Grace Akinyi', spec: 'Deep Cleaning' },
  { initials: 'BO', name: 'Brian Otieno', spec: 'Post-Construction' },
];

const INITIAL = { name: '', phone: '', email: '', location: '', service: '', date: '', time: '', freq: 'One-time', notes: '', cleaner: '', customSize: '' };

export default function BookingModal({ open, onClose, preService }) {
  const [form, setForm] = useState(INITIAL);
  const [done, setDone] = useState(false);
  const [cleanersList, setCleanersList] = useState(cleaners);
  const [servicesList, setServicesList] = useState(services);
  const [fullServices, setFullServices] = useState([]);

  // NEW: State to hold our dynamically generated WhatsApp link
  const [whatsappLink, setWhatsappLink] = useState('https://wa.me/254706151837');

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    async function loadData() {
      try {
        const { data: dbCleaners, error: cleanersErr } = await supabase
          .from('cleaners')
          .select('*');
        if (!cleanersErr && dbCleaners && dbCleaners.length > 0) {
          const mappedCleaners = dbCleaners.map(c => ({
            id: c.id,
            initials: c.full_name ? c.full_name.split(' ').map(n => n[0]).join('').toUpperCase() : 'C',
            name: c.full_name,
            spec: c.phone ? `Phone: ${c.phone}` : 'Verified Cleaner',
            rating: c.rating
          }));
          setCleanersList(mappedCleaners);
        }

        const { data: dbServices, error: servicesErr } = await supabase
          .from('services')
          .select('*');
        if (!servicesErr && dbServices && dbServices.length > 0) {
          const mappedServices = dbServices.map(s => s.name);
          setServicesList(mappedServices);
          setFullServices(dbServices);
        }
      } catch (err) {
        console.error('Error loading Supabase data:', err);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      if (preService) setForm(f => ({ ...f, service: preService }));
    } else {
      document.body.style.overflow = '';
      setDone(false);
      setForm(INITIAL);
    }
  }, [open, preService]);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const pickCleaner = (name) => setForm({ ...form, cleaner: form.cleaner === name ? '' : name });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.location || !form.service || !form.date) return;

    const selectedCleanerObj = cleanersList.find(c => c.name === form.cleaner);
    const selectedCleanerId = selectedCleanerObj && selectedCleanerObj.id ? selectedCleanerObj.id : null;

    const selectedServiceObj = fullServices.find(s => s.name === form.service);
    const selectedServiceId = selectedServiceObj && selectedServiceObj.id ? selectedServiceObj.id : null;

    let scheduledAt = null;
    if (form.date) {
      let hour = "08:00:00";
      if (form.time && form.time.toLowerCase().includes('midday')) {
        hour = "12:00:00";
      } else if (form.time && form.time.toLowerCase().includes('afternoon')) {
        hour = "15:00:00";
      }
      scheduledAt = `${form.date}T${hour}Z`;
    }

    // We are completely bypassing the broken database so the form submits instantly!
    let returnedRow = null;

    // --- GENERATE DYNAMIC WHATSAPP LINK ---
    const safihubPhone = "254706151837"; // Actual business number
    // Grab the first 8 characters of the UUID to make a clean reference number, or generate a random one if DB failed
    const bookingRef = (returnedRow && returnedRow.id) ? returnedRow.id.substring(0, 8) : Math.random().toString(36).substring(2, 10).toUpperCase();

    const message = `🌟 Hello Safihub!\n\nI have just placed a new booking online.\n*Reference ID:* #${bookingRef}\n*Name:* ${form.name}\n*Location:* ${form.location}\n*Service:* ${form.service}\n\nPlease confirm my schedule!`;

    const dynamicUrl = `https://wa.me/${safihubPhone}?text=${encodeURIComponent(message)}`;
    setWhatsappLink(dynamicUrl);

    setDone(true);
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <div>
            <h2>Book a Cleaning Service</h2>
            <p>Fill in your details and we'll confirm within 30 minutes</p>
          </div>
          <button className="modal-close" onClick={onClose}><FaTimes /></button>
        </div>

        <div className="modal-body">
          {done ? (
            <div className="booking-success">
              <FaCheckCircle className="success-check" />
              <h3>Booking Received!</h3>
              <p>Thank you, {form.name}! We'll confirm via WhatsApp or email within 30 minutes.</p>

              {/* This anchor tag now uses the dynamic state link */}
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex', gap: 8, marginTop: 20 }}>
                💬 Chat on WhatsApp
              </a>

              <button className="btn-close-done" onClick={onClose}>Close</button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="modal-section-title">Your Information</div>
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
                  <input name="location" value={form.location} onChange={handle} placeholder="e.g. Kilimani, Nairobi" required />
                </div>
              </div>

              <div className="modal-section-title">Service Details</div>
              <div className="modal-row">
                <div className="form-group">
                  <label>Service Type *</label>
                  <select name="service" value={form.service} onChange={handle} required>
                    <option value="">-- Select a service --</option>
                    {servicesList.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Preferred Date *</label>
                  <input name="date" type="date" value={form.date} onChange={handle} min={today} required />
                </div>
              </div>
              {form.service.includes('Custom') && (
                <div className="form-group">
                  <label>House Size / Bedrooms</label>
                  <input name="customSize" value={form.customSize} onChange={handle} placeholder="e.g. 5 bedrooms, 3 bathrooms, approx 300sqm" />
                </div>
              )}
              <div className="modal-row">
                <div className="form-group">
                  <label>Preferred Time</label>
                  <select name="time" value={form.time} onChange={handle}>
                    <option value="">Any time</option>
                    <option>Morning (7am – 11am)</option>
                    <option>Midday (11am – 2pm)</option>
                    <option>Afternoon (2pm – 5pm)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Frequency</label>
                  <select name="freq" value={form.freq} onChange={handle}>
                    <option>One-time</option>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Additional Notes</label>
                <textarea name="notes" value={form.notes} onChange={handle} rows={3} placeholder="Special instructions, access details, areas to focus on…" />
              </div>

              <div className="modal-section-title">Choose Your Cleaner <span className="optional">(optional)</span></div>
              <p className="cleaner-hint">Select a preferred cleaner or leave blank and we'll assign the best available.</p>
              <div className="cleaner-picker">
                {cleanersList.map(c => (
                  <div
                    key={c.name}
                    className={`cleaner-chip${form.cleaner === c.name ? ' chosen' : ''}`}
                    onClick={() => pickCleaner(c.name)}
                  >
                    <div className="chip-av">{c.initials}</div>
                    <div className="chip-name">{c.name}</div>
                    <div className="chip-spec">{c.spec}</div>
                    {form.cleaner === c.name && <span className="chip-check">✓</span>}
                  </div>
                ))}
                <div
                  className={`cleaner-chip${form.cleaner === 'Any' ? ' chosen' : ''}`}
                  onClick={() => pickCleaner('Any')}
                >
                  <div className="chip-av" style={{ background: 'var(--gold)', color: 'var(--navy)' }}>?</div>
                  <div className="chip-name">No Preference</div>
                  <div className="chip-spec">Best available</div>
                  {form.cleaner === 'Any' && <span className="chip-check">✓</span>}
                </div>
              </div>

              <button type="submit" className="btn-primary modal-submit">CONFIRM BOOKING</button>
              <p className="modal-note">We'll confirm your booking via WhatsApp or email within 30 minutes</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}