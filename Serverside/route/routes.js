import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = ({ onOtpSent }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://mongodb://localhost:27017/', { email });
      onOtpSent();
    } catch (error) {
      alert('Failed to send OTP');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send OTP</button>
    </form>
  );
};

export default EmailForm;
