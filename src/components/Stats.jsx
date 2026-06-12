import React from 'react';
import { FaMedal, FaUsers, FaLeaf, FaHeadset } from 'react-icons/fa';
import './Stats.css';

const stats = [
  { icon: <FaMedal />, num: '100%', label: 'Satisfaction Guaranteed' },
  { icon: <FaUsers />, num: 'Expert', label: 'Professional Team' },
  { icon: <FaLeaf />,  num: 'Eco', label: 'Eco-Friendly Products' },
  { icon: <FaHeadset />, num: '24/7', label: 'Customer Support' },
];

export default function Stats() {
  return (
    <div className="stats-bar reveal">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <React.Fragment key={i}>
            <div className="stat-item">
              <span className="stat-icon">{s.icon}</span>
              <div>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
            {i < stats.length - 1 && <div className="stat-divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
