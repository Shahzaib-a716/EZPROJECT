import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceTypeSelection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}>
      {/* Header Section */}
      <div className="bg-yellow-500">
        <div className="flex justify-evenly items-center">
          <div className="tooltip-container w-16 shrink-0">
            <img src="/assets/images/button back.webp" alt="BACK" />
          </div>
          <div className="flex items-center">
            <img
              className="w-28 md:w-40 p-1 rounded-xl"
              src="/assets/images/Handyman0.png"
              alt="Les The Handyman"
            />
            <h1 className="hidden md:block text-center py-1 md:text-4xl lg:text-5xl text-white font-extrabold">
              Les The Handyman
            </h1>
          </div>
          <div className="tooltip-container w-16 shrink-0">
            <img src="/assets/images/button help.webp" alt="Help" />
          </div>
        </div>
        <h1 className="text-3xl md:hidden text-center py-1 text-white font-extrabold">
          Les The Handyman
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="mt-1">
          <h1 className="text-3xl md:text-4xl rounded-xl text-center p-4 font-extrabold text-black bg-yellow-400 mb-1">
            Select Service Type
          </h1>

          {/* Emergency Service Option */}
          <div 
            onClick={() => handleNavigation('/emergency')}
            className="flex mb-1 cursor-pointer hover:scale-105 bg-white items-center p-5 border-4 border-white hover:border-black rounded-3xl"
          >
            <img className="w-4 basis-1/4 mr-4" src="/assets/images/emergency.png" alt="Emergency" />
            <div className="flex flex-col hover:text-4xl">
              <h1 className="text-3xl font-bold">Emergency</h1>
              <span className="text-xl">Do it Now</span>
            </div>
          </div>

          {/* Estimate Service Option */}
          <div 
            onClick={() => handleNavigation('/estimate')}
            className="flex mb-1 cursor-pointer hover:scale-105 bg-white items-center p-5 border-4 border-white hover:border-black rounded-3xl"
          >
            <img className="w-4 basis-1/4 mr-4" src="/assets/images/estimate.png" alt="Estimate" />
            <div className="flex flex-col hover:text-4xl">
              <h1 className="text-3xl font-bold">Estimate</h1>
            </div>
          </div>

          {/* Waiting List Service Option */}
          <div 
            onClick={() => handleNavigation('/waiting-list')}
            className="flex mb-1 cursor-pointer hover:scale-105 bg-white items-center p-5 border-4 border-white hover:border-black rounded-3xl"
          >
            <img className="w-4 basis-1/4 mr-4" src="/assets/images/waiting.png" alt="Waiting List" />
            <div className="flex flex-col hover:text-4xl">
              <h1 className="text-3xl font-bold">Waiting List</h1>
              <span className="text-xl">Not In Hurry</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center pt-1 w-full text-xl text-white font-bold"
        style={{
          textShadow:
            '2px 0px 0px rgb(0, 0, 0), 0px -1px 0px rgb(0, 0, 0), 0px 1px 0px rgb(0, 0, 0), -1px 0px 0px rgb(0, 0, 0)',
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416)
        333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default ServiceTypeSelection;
