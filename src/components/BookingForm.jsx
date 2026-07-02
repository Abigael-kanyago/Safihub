import React, { useState } from 'react';
import { cleanersList } from '../data/Cleaners';

const houseSizes = [
  { id: 'studio', label: 'Studio / Bedsitter' },
  { id: '1bd', label: '1 Bedroom (1BD)' },
  { id: '2bd', label: '2 Bedroom (2BD)' },
  { id: '3bd', label: '3 Bedroom (3BD)' },
  { id: '4bd', label: '4 Bedroom (4BD)' },
  { id: '5bd', label: '5 Bedroom (5BD)' },
  { id: '6bd', label: '6 Bedroom (6BD)' },
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    houseSize: '',
    cleanerId: 'any',
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Safihub Booking Submitted:', formData);
    alert('Thank you! Your Safihub booking request has been received.');
    // Here you would integrate your backend API call
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      {/* Brand Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0B2240]">Book Your Safihub</h2>
        <p className="text-sm text-gray-500 mt-1">Reliable, Professional, Spotless</p>
        <div className="flex justify-center space-x-4 mt-4">
          <span className={`h-2 w-16 rounded ${step >= 1 ? 'bg-[#1E9E49]' : 'bg-gray-200'}`} />
          <span className={`h-2 w-16 rounded ${step >= 2 ? 'bg-[#1E9E49]' : 'bg-gray-200'}`} />
          <span className={`h-2 w-16 rounded ${step >= 3 ? 'bg-[#1E9E49]' : 'bg-gray-200'}`} />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* STEP 1: HOUSE SIZE */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-semibold text-[#0B2240] mb-4">1. Select House Size</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {houseSizes.map((size) => (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, houseSize: size.id })}
                  className={`p-4 border rounded-lg text-left transition-all font-medium ${
                    formData.houseSize === size.id
                      ? 'border-[#1E9E49] bg-green-50 text-[#0B2240]'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
            <div className="mt-6 text-right">
              <button
                type="button"
                disabled={!formData.houseSize}
                onClick={() => setStep(2)}
                className="px-6 py-2.5 rounded-lg bg-[#1E9E49] text-white font-semibold disabled:opacity-50 hover:bg-[#17853c]"
              >
                Next: Choose Cleaner
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SELECT CLEANER */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-semibold text-[#0B2240] mb-4">2. Choose Your Cleaner</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cleanersList.map((cleaner) => (
                <div
                  key={cleaner.id}
                  onClick={() => setFormData({ ...formData, cleanerId: cleaner.id })}
                  className={`p-4 border rounded-xl flex items-center space-x-4 cursor-pointer transition-all ${
                    formData.cleanerId === cleaner.id
                      ? 'border-[#1E9E49] bg-green-50 ring-1 ring-[#1E9E49]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={cleaner.image} alt={cleaner.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-[#0B2240]">{cleaner.name}</h4>
                    <p className="text-xs text-amber-500">⭐ {cleaner.rating.toFixed(1)} Rating</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-semibold"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-2.5 rounded-lg bg-[#1E9E49] text-white font-semibold hover:bg-[#17853c]"
              >
                Next: Contact Info
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: CONTACT DETAILS */}
        {step === 3 && (
          <div>
            <h3 className="text-xl font-semibold text-[#0B2240] mb-4">3. Contact & Location Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E9E49] focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E9E49] focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E9E49] focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Location / Address</label>
                <textarea
                  name="location"
                  required
                  rows="3"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E9E49] focus:outline-none"
                  placeholder="Apartment/House No, Street, City"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-semibold"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-[#0B2240] text-white font-semibold hover:bg-[#12335e] transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}