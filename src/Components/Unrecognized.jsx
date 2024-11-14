import React from 'react';
import { useNavigate } from 'react-router-dom';

const UnrecognizedEmailPage = () => {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate('/Enter1'); // Replace with the actual path of the confirm page
  };

  const handleRejectClick = () => {
    navigate('/reject-page'); // Replace with the actual path of the reject page
  };

  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col gap-6 justify-center items-center min-h-screen">
        <div className="flex text-center bg-yellow-500 p-4 md:p-16 rounded-2xl flex-col gap-6 justify-center items-center">
          <img src="/assets/images/Sad.png" className="w-20 md:w-40" alt="Sad Emoji" />
          
          <h1 className="text-center rounded-xl p-2 bg-blue-600 text-xl md:text-5xl text-white">
            hhhh2www@gmail.com
          </h1>
          
          <h1 className="text-3xl md:text-5xl text-red-600">
            Is not recognized.
          </h1>
          
          <h1 className="text-3xl md:text-5xl text-green-700">
            Is it spelled correctly?
          </h1>
          
          <div className="flex justify-evenly items-center w-full">
            <img
              className="w-20 md:w-28 rounded-full hover:scale-125 duration-150"
              src="/assets/images/button cancel no.webp"
              alt="Reject Button"
              onClick={handleRejectClick}
            />
            <img
              className="w-20 md:w-28 rounded-full hover:scale-125 duration-150"
              src="/assets/images/button ok check.webp"
              alt="Confirm Button"
              onClick={handleConfirmClick}
            />
          </div>
        </div>
      </div>

      <div
        className="text-center pt-1 w-full text-xl text-white font-bold"
        style={{
          textShadow: "2px 0 0 rgb(0, 0, 0), 0 -1px 0 rgb(0, 0, 0), 0 1px 0 rgb(0, 0, 0), -1px 0 0 rgb(0, 0, 0)"
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278)
        Copyright © 2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default UnrecognizedEmailPage;
