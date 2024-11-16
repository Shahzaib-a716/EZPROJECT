import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomLayout = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second
    return () => clearInterval(timer); // Clean up the interval on unmount
  }, []);

  // Format the date
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long', // "Friday"
    year: 'numeric', // "2024"
    month: 'short',  // "Oct"
    day: 'numeric',  // "24"
  });

  // Format the time
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true, // Display 12-hour time with AM/PM
  });

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-5">
      {/* Top Logo and Title */}
      <div className="text-center mb-10">
        <img src="/assets/images/head logo.webp" alt="Logo" className="w-50 h-52 mx-auto" />
        <h1 className="text-black text-4xl font-bold ">Trades Persons Perfect Business System</h1>
      </div>

      {/* New Icons Container */}
      <div className="flex">
        <img src="/assets/images/button top blank.webp" alt="Icon 9" className="w-17 h-16" />
        <img src="/assets/images/button top blank.webp" alt="Icon 2" className="w-17 h-16" />
        <img src="/assets/images/button top blank.webp" alt="Icon 9" className="w-60 h-16" />
      </div>

      {/* Main Content Area */}
      <div className="relative h-[638px] w-[868px] p-4 border-4 border-gray-400">
      <img
            src="/assets/images/background.webp"
            alt="Your Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        
        {/* Left Side Icons */}
        <div className="absolute left-[-65px] top-[-64px] ">
          <img src="/assets/images/button left call.webp" className="w-16 h-16" />
          <img src="/assets/images/button left 1.webp" alt="Icon 1" className="w-16 h-53" />
          <img src="/assets/images/button left 2.webp" alt="Icon 2" className="w-16 h-48" />
          <img src="/assets/images/button left 3.webp" alt="Icon 3" className="w-16 h-54" />
          <img src="/assets/images/button virtual house back.webp" alt="Icon 3" className="w-17 h-16" />
        </div>

        {/* Right Side Icons */}
        <div className="absolute right-[-65px] top-[-62px]">
          <button onClick={() => handleClick('/home')}>
            <img src="/assets/images/button right call.webp" className="w-16 h-16" />
            <img src="assets/images/button right pizza.webp" alt="Icon 4" className="w-16 h-32" />
          </button>
          <img src="/assets/images/button right countdown.webp" className="w-16 h-32" />
          <img src="/assets/images/button right brain.webp" className="w-16 h-32" />
          <img src="assets/images/button right training.webp" className="w-16 h-32" />
          <img src="/assets/images/button right blank.webp" className="w-16 h-28" />
          <img src="/assets/images/button help dark yellow.webp" className="w-16 h-16" />
        </div>

        {/* Display Area */}
        <div className="bg-gray-200 h-[400px] w-[820px] border-4 border-white relative">
          <img
            src="/assets/images/background.webp"
            alt="Your Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Date and Time */}
        <div className="relative text-black font-extrabold flex items-center  justify-center text-2xl text-bold mt-5">
          {`${formattedDate}, ${formattedTime}`}
        </div>

        {/* Bottom Icons */}
        <div className="relative grid grid-cols-8 gap-4 mt-5">
          {/* First row of icons */}
          <button onClick={() => navigate('/Callback')}>
            <img src="/assets/images/button bottom 1.webp" alt="Icon 10" className="w-17 h-16" />
          </button>
          <img src="/assets/images/button2.webp" alt="Icon 9" className="w-17 h-16" />
          <img src="/assets/images/button bottom 3.webp" alt="Icon 9" className="w-17 h-16" />
          <img src="/assets/images/button bottom 4.webp" alt="Icon 9" className="w-17 h-16" />
          <img src="/assets/images/button bottom 5.webp" alt="Icon 9" className="w-17 h-16" />
          <img src="/assets/images/button bottom 6.webp" alt="Icon 9" className="w-17 h-16" />
          <img src="/assets/images/button bottom 7.webp" alt="Icon 9" className="w-17 h-16" />
          <img src="/assets/images/button bottom 8.webp" alt="Icon 9" className="w-17 h-16" />
          {/* Add other icons */}
        </div>

        <div className="relative grid grid-cols-8 gap-4 mt-3">
          {/* Second row of icons */}
          <img src="/assets/images/button bottom 9.webp" alt="Icon 9" className="w-17 h-16" />
          <button onClick={() => navigate('/Calculator')}>
            <img src="/assets/images/button bottom 10.webp" alt="Icon 10" className="w-17 h-16" />
          </button>
          <img src="/assets/images/button bottom 11.webp" alt="Icon 9" className="w-17 h-16" />
          <img src="/assets/images/button bottom 12.webp" alt="Icon 9" className="w-17 h-16" />
          <img src="/assets/images/button bottom 13.webp" alt="Icon 9" className="w-17 h-16" />
          <img src="/assets/images/button bottom 14.webp" alt="Icon 9" className="w-17 h-16" />
          <img src="/assets/images/button bottom 15.webp" alt="Icon 9" className="w-17 h-16" />
          <img src="/assets/images/button bottom 16.webp" alt="Icon 9" className="w-17 h-16" />
          {/* Add other icons */}
        </div>
      </div>

      {/* Footer Icons - remains outside Main Content Area */}
      <div className="grid-cols-6 flex">
        {/* Footer row of icons */}
        <img src="/assets/images/button bottom setup.webp" alt="Icon 9" className="w-36 h-18" />
        <img src="/assets/images/button bottom web.webp" alt="Icon 9" className="w-36 h-18" />
        <img src="/assets/images/button bottom movie maker.webp" alt="Icon 9" className="w-36 h-18" />
        <img src="/assets/images/button bottom graphic designer.webp" alt="Icon 9" className="w-36 h-18" />
        <img src="/assets/images/button bottom parcel.webp" alt="Icon 9" className="w-36 h-18" />
        <img src="/assets/images/button bottom financial result.webp" alt="Icon 9" className="w-36 h-18" />
      </div>
    </div>
  );
};

export default CustomLayout;
