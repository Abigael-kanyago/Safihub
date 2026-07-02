import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We cover all major areas in Nairobi including Westlands, Kilimani, Lavington, Karen, Kasarani, Embakasi, Ngumo, Lang\'ata, South B, South C, and more. Enter your location when booking for availability confirmation.',
  },
  {
    q: 'Do you bring cleaning supplies?',
    a: 'Yes! Our cleaners arrive fully equipped with professional, eco-friendly cleaning products and all necessary tools. You don\'t need to provide anything — just let us in and we\'ll handle the rest.',
  },
  {
    q: 'How do I book a service?',
    a: 'Click the "Book Now" button anywhere on the site, fill in your details, choose your service type and preferred cleaner, then submit. We\'ll confirm your booking via WhatsApp or email within 30 minutes.',
  },
  {
    q: 'Are your cleaners insured?',
    a: 'Absolutely. All Safihub cleaners are background-checked, trained, and covered by our professional liability insurance. Your belongings and property are fully protected during every clean.',
  },
  {
    q: 'Can I request the same cleaner each time?',
    a: 'Yes! You can select your preferred cleaner when booking. For recurring bookings, we always do our best to send the same cleaner so you build a consistent, trusted relationship.',
  },
  {
    q: 'How do I pay for the service?',
    a: 'We accept M-Pesa (Till & Paybill), cash, and bank transfer. Payment details are shared upon booking confirmation. No payment is required upfront — you pay after the service is completed.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="faq-section reveal" id="faq">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Everything you need to know before booking your first clean.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)}>
                <span>{f.q}</span>
                <span className="faq-icon"><FaChevronDown /></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
