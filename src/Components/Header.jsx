import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="bg-yellow-500">
      <div className="flex justify-evenly items-center">
        {/* Back Button */}
        <div className="tooltip-container w-16 shrink-0" onClick={handleBackClick}>
          <img src="/assets/images/button back.webp" alt="BACK" />
        </div>

        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            className="w-28 md:w-40 p-1 rounded-xl"
            src="/assets/images/Handyman0.png"
            alt="Les The Handyman"
          />
          <h1 className="hidden md:block text-center py-1 md:text-4xl lg:text-5xl text-black font-extrabold">
            Les The Handyman
          </h1>
        </div>

        {/* Help Button */}
        <div className="tooltip-container w-16 shrink-0">
          <img src="/assets/images/button help.webp" alt="Help" />
        </div>
      </div>

      {/* Title for Small Screens */}
      <h1 className="text-3xl md:hidden text-center py-1 text-white font-extrabold">
        Les The Handyman
      </h1>

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl rounded-xl text-center p-4 font-extrabold text-white bg-yellow-400 mb-1">
        {title}
      </h1>
    </div>
  );
};

export default Header;
