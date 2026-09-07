import React from 'react';
import { FaCalendarCheck, FaEnvelopeOpenText, FaSmile } from 'react-icons/fa';
import './Process.css';

const steps = [
  {
    title: 'Pick your perfect slot',
    description: 'Choose a date that fits your routine and let us handle the rest.',
    icon: FaCalendarCheck,
    type: 'calendar',
    badge: 'Step 01',
  },
  {
    title: 'We confirm and prepare',
    description: 'Your booking is secured, and our team maps out the clean with care.',
    icon: FaEnvelopeOpenText,
    type: 'checkedForm',
    badge: 'Step 02',
  },
  {
    title: 'Enjoy the fresh finish',
    description: 'Walk into a brighter, calmer space while we take care of the details.',
    icon: FaSmile,
    type: 'relax',
    badge: 'Step 03',
  },
];

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <div className="process-header text-center">
          <span className="process-label">OUR WORKING PROCESS</span>
          <h2 className="process-title">A simple path to a spotless space</h2>
          <p className="process-copy">
            From the first booking to the final shine, we keep things effortless, polished, and truly stress-free.
          </p>
        </div>

        <div className="process-deck">
          <div className="process-line" aria-hidden="true" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className={`process-step-wrapper step-${index + 1}`}>
                <div className="process-step-card">
                  <div className="step-badge">{step.badge}</div>
                  <div className="step-icon">
                    <Icon />
                  </div>

                  {step.type === 'calendar' && (
                    <div className="step-graphic step-calendar">
                      <div className="calendar-header">
                        <span>Aug</span>
                        <strong>12</strong>
                      </div>
                      <div className="calendar-weekdays">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                          <span key={day} className="calendar-day-header">{day}</span>
                        ))}
                      </div>
                      <div className="calendar-grid">
                        {Array.from({ length: 35 }, (_, idx) => {
                          const dayNumber = idx + 1;
                          const isBooked = dayNumber === 12;
                          return (
                            <div
                              key={dayNumber}
                              className={`calendar-cell ${isBooked ? 'calendar-cell-active' : ''} ${dayNumber > 31 ? 'calendar-cell-empty' : ''}`}
                            >
                              {dayNumber <= 31 ? dayNumber : ''}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step.type === 'checkedForm' && (
                    <div className="step-graphic step-form">
                      <div className="form-row">
                        <span className="form-label">Name</span>
                        <div className="form-input"></div>
                      </div>
                      <div className="form-row">
                        <span className="form-label">Date</span>
                        <div className="form-input"></div>
                      </div>
                      <div className="form-row form-checked">
                        <span className="checkbox">✓</span>
                        <span className="form-label">Booked</span>
                      </div>
                    </div>
                  )}

                  {step.type === 'relax' && (
                    <div className="step-graphic step-relax">
                      <div className="relax-lounge" />
                      <div className="relax-sun" />
                      <div className="relax-plant" />
                      <div className="relax-ribbon">Enjoy</div>
                      <div className="relax-smile">☺</div>
                    </div>
                  )}

                  <div className="step-body">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
