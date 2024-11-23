import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Enter1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {}; // Retrieve email passed from the previous page

  const handleRejectClick = () => {
    navigate(-1, { state: { email } }); // Navigate back to the previous page with the email passed back
  };

  const handleConfirmClick = () => {
    navigate('/SalutationPage'); // Navigate to the Salutation page
  };

  return (
    <div
      className="min-h-screen bg-day bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}
    >
      <div className="flex flex-col gap-6 justify-center items-center min-h-screen">
        <div className="p-6 bg-yellow-500 md:p-20 rounded-2xl flex flex-col gap-6 items-center">
          <img
            src="/assets/images/smile.png"
            className="w-28 md:w-40 rounded-full"
            alt="Happy Emoji"
          />
          <h1 className="p-2 text-center rounded-xl bg-green-600 text-2xl md:text-5xl text-white">
            {email || "No email provided"} {/* Display the passed email */}
          </h1>
          <h1 className="text-center text-3xl md:text-5xl">
            You Must Register to make bookings!
          </h1>
          <div className="flex justify-around items-center w-full">
            <img
              src="/assets/images/button cancel no.webp"
              alt="Reject"
              className="w-20 md:w-28 rounded-full hover:scale-125 duration-150"
              onClick={handleRejectClick} // Navigate back on click
            />
            <img
              src="/assets/images/button ok check.webp"
              alt="Confirm"
              className="w-20 md:w-28 rounded-full hover:scale-125 duration-150"
              onClick={handleConfirmClick} // Navigate to the Salutation page
            />
          </div>
        </div>
      </div>
      <footer className="text-center pt-4 text-white font-bold">
        All Rights Reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA
      </footer>
    </div>
  );
};

export default Enter1;
