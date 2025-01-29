import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EnterS1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || { email: '' }; // Retrieve the email passed from the previous page

  const [inputEmail, setInputEmail] = useState(email); // Set the email as the default value

  useEffect(() => {
    setInputEmail(email); // Update the email if the location changes
  }, [email]);

  const handleInputChange = (e) => {
    setInputEmail(e.target.value); // Update email state on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', inputEmail); // Log the email when submitted
    
    // Navigate to the next page with the corrected email
    navigate('/EmailNotRecognized', { state: { email: inputEmail } });
  };

  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col gap-6 justify-center items-center min-h-screen">
        <div className="bg-yellow-500 p-4 md:p-16 rounded-2xl flex flex-col gap-6 justify-center items-center">
          <h1 className="text-5xl font-semibold md:text-5xl text-red-600">Please check and correct your email</h1>
          <form onSubmit={handleSubmit} className="w-full rounded-3xl">
            <div className="flex bg-blue-600 md:text-5xl justify-center mb-2 items-center gap-2 border-6 rounded-3xl">
              <input
                type="email"
                value={inputEmail}
                onChange={handleInputChange}
                className="w-full text-3xl text-center text-4xl text-white placeholder:text-4xl w-full bg-blue-600"
                placeholder="Email"
                required
              />
              {/* Icon for submit */}
              <img
                className="w-14 rounded-full cursor-pointer"
                src="/assets/images/select.jpg"
                alt="Select"
                onClick={handleSubmit} // Icon click triggers the form submission
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnterS1;
