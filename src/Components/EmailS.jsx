import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EmailNotRecognized = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || { email: 'Unknown' }; // Default to 'Unknown' if no email is passed

  const handleReject = () => {
    navigate('/');
  };

  const handleSelect = () => {
    navigate('/Enter1');
  };
  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}>
      <div className="flex flex-col gap-6 justify-center items-center min-h-screen">
        <div className="flex text-center bg-yellow-500 p-4 md:p-16 rounded-2xl flex-col gap-6 justify-center items-center">
          <img src="/assets/images/Sad.png" className="w-20 md:w-40" alt="Sad emoji" />
          
          {/* Display the dynamic email */}
          <h1 className="text-center rounded-xl p-2 bg-blue-600 text-xl md:text-5xl text-white">{email}</h1>
          
          <h1 className="text-3xl md:text-5xl text-red-600">Is not recognized.</h1>
          <h1 className="text-3xl md:text-5xl text-green-700">Is it spelled correctly?</h1>

          <div className="flex justify-around items-center w-full">
            {/* Reject button */}
            <img
              className="w-20 md:w-28 rounded-full hover:scale-125 duration-150 cursor-pointer"
              src="/assets/images/reject.png"
              alt="Reject"
              onClick={handleReject}
            />

            {/* Select button */}
            <img
              className="w-20 md:w-28 rounded-full hover:scale-125 duration-150 cursor-pointer"
              src="/assets/images/select.jpg"
              alt="Select"
              onClick={handleSelect}
            />
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center pt-1 w-full text-xl text-white font-bold" style={{ textShadow: 'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px' }}>
          All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
        </div>
      </div>
    </div>
  );
};

export default EmailNotRecognized;
