import React, { useState } from 'react';
import axios from 'axios';

function OTPForm({ email, setShowOtpForm, setShowWelcomePage }) {
    const [otps, setOtps] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!otps) {
            setError('OTP is required');
            return;
        }

        try {
            const response = await axios.post('http://localhost:27017/', { email, otps });
            if (response.status === 200) {
                setSuccess('OTP verified');
                setShowWelcomePage(true);
                setError('');
            }
        } catch (error) {
            setError('Invalid OTP');
            setSuccess('');
        }
    };

    return (
        <div>
            <h2>Enter OTP</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    OTP:
                    <input
                        type="text"
                        value={otps}
                        onChange={(e) => setOtps(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Verify</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
}

export default OTPForm;
