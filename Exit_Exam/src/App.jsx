import React, { useState } from 'react';
import EmailForm from './components/EmailForm';
import OTPForm from './components/OTPForm';
import WelcomePage from './components/WelcomePage';

const App = () => {
  const [otpSent, setOtpSent] = useState(false);

  return (
    <BrowserRouter>
    <Routes>
      {otpSent ? (
        <OTPForm onSuccess={() => alert('Welcome!')} />
      ) : (
        <EmailForm onOtpSent={() => setOtpSent(true)} />
      )}
      <WelcomePage/>
      </Routes>
 </BrowserRouter>
  );
};

export default App;




