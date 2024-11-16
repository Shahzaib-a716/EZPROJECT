import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterReminderPage = () => {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate('/SalutationPage'); // Replace '/new-page' with the path to navigate to
  };

  return (
    <div
      className="min-h-screen bg-day bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}
    >
      <div className="flex flex-col gap-6 justify-center items-center min-h-screen">
        <div className="flex p-2 bg-yellow-500 md:p-20 rounded-2xl flex-col gap-6 justify-center items-center">
          <img
            src="/assets/images/smile.png"
            className="w-28 md:w-40 rounded-full"
            alt="Happy Emoji"
          />
          <h1 className="p-2 text-center rounded-xl bg-green-600 text-2xl md:text-5xl text-white">
            hhhh2www@gmail.com
          </h1>
          <h1 className="text-center text-3xl md:text-5xl">
            You Must Register to make bookings!
          </h1>
          <div className="flex justify-around items-center w-full">
            <img
              className="w-20 md:w-28 rounded-full hover:scale-125 duration-150"
              src="/assets/images/button cancel no.webp"
              alt="Reject"
              onClick={() => alert("Registration rejected!")}
            />
            <img
              className="w-20 md:w-28 rounded-full hover:scale-125 duration-150"
              src="/assets/images/button ok check.webp"
              alt="Select"
              onClick={handleConfirmClick} // Navigate on click
            />
          </div>
        </div>
      </div>

      <div
        className="text-center pt-1 w-full text-xl text-white font-bold"
        style={{
          textShadow:
            "2px 0 0 rgb(0, 0, 0), 0 -1px 0 rgb(0, 0, 0), 0 1px 0 rgb(0, 0, 0), -1px 0 0 rgb(0, 0, 0)",
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario
        CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les
        The Handyman.
      </div>
    </div>
  );
};

export default RegisterReminderPage;
