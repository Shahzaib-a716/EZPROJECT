import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EmailFormPage = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || ''); // Prefill email if passed back
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Conditional navigation
    if (email.toLowerCase() === 'les123@gmail.com') {
      navigate('/Booking', { state: { email } }); // Navigate to a specific page
    } else {
      navigate('/Enter1', { state: { email } }); // Default navigation
    }
  };

  return (
    <div
      className="min-h-screen bg-day bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}
    >
      <div className="flex flex-col gap-6 justify-center items-center min-h-screen">
        <form onSubmit={handleSubmit} className="rounded-3xl bg-pink-600 p-4 border border-black">
          <h1 className="text-xl md:text-3xl font-extrabold text-center mb-4">
            ENTER YOUR EMAIL BEFORE CONTINUING
          </h1>
          <div className="flex items-center bg-yellow-500 border-yellow-500 border-6 rounded-3xl">
            <input
              type="email"
              className="w-full text-3xl p-2 text-center bg-yellow-500 rounded-l-3xl focus:outline-none"
              placeholder="@"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
            <button type="submit" className="w-14 rounded-full">
              <img src="/assets/images/select.jpg" alt="Submit" />
            </button>
          </div>
        </form>
      </div>
      <footer className="text-center pt-4 text-white font-bold">
        All Rights Reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA
      </footer>
    </div>
  );
};

export default EmailFormPage;
