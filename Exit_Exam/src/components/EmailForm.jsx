import React, { useState } from 'react';
import axios from 'axios';

function EmailForm({ setShowOtpForm }) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setError('Email is required');
            return;
        }

        try {
            await axios.post('http:/localhost:27017/', { email });
            setSuccess('OTP sent to your email');
            setError('');
            setShowOtpForm(true);
        } catch (error) {
            setError('Error sending OTP');
            setSuccess('');
        }
    };

    return (
        <div>
            <h2>Enter your Email</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
               
                <br />
                <label>
                    TextBox:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
}

export default EmailForm;
