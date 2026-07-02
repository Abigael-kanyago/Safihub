import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function JoinUsCTA({ onJoinUs }) {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, var(--navy), var(--navy2))', 
      padding: '60px 20px', 
      textAlign: 'center', 
      color: 'white',
      borderTop: '5px solid var(--green)'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '16px', fontWeight: '800' }}>Are you a professional cleaner?</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px', lineHeight: '1.6' }}>
          Join our verified network of Safihub cleaners. Enjoy flexible working hours, great pay, and a supportive community.
        </p>
        <button 
          onClick={onJoinUs} 
          className="btn-green-full" 
          style={{ padding: '16px 32px', fontSize: '18px', display: 'inline-flex', gap: '10px' }}
        >
          Apply to Join Us <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
