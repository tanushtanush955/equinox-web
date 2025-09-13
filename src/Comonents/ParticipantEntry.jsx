import React, { useState } from 'react';
import '../Styles/Registration.css';

const ParticipantEntry = ({ participantNumber, theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const labelColor = theme === 'gold' ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="registration-card mb-8">
      <h2 className="text-xl font-semibold mb-6 text-white">Participant {participantNumber}</h2>
      <div className="flex flex-col space-y-8">
        <div className="flex items-center input-container">
          <label className='entry-label'>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter name"
            className='input-field'
          />
        </div>
        <div className="flex items-center input-container">
          <label className='entry-label'>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            className='input-field'
          />
        </div>
        <div className="flex items-center input-container">
          <label className='entry-label'>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            className='input-field'
          />
        </div>
      </div>
    </div>
  );
};

export default ParticipantEntry;