import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Emergency from './Emergency';

const ServiceTypeSelection = () => {
  const navigate = useNavigate();
  const [showEmergency, setShowEmergency] = useState(false);

  const handleEmergencyClick = () => {
    setShowEmergency(true); // Show Emergency component
  };

  const handleEstimateClick = () => {
    navigate('/estimate');
  };

  const handleWaitingListClick = () => {
    navigate('/waiting-list');
  };

  if (showEmergency) {
    return <Emergency />; // Render Emergency component
  }

  return (
    <div
      className="min-h-screen bg-day bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}
    >
      <Header title="Select Service Type" />

      {/* Main Content Section */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="mt-1">
          {/* Emergency Service Option */}
          <div
            className="flex mb-1 cursor-pointer hover:scale-105 bg-white items-center p-5 border-4 border-white hover:border-black rounded-3xl"
            onClick={handleEmergencyClick}
          >
            <img className="w-4 basis-1/4 mr-4" src="/assets/images/emergency.png" alt="Emergency" />
            <div className="flex flex-col hover:text-4xl">
              <h1 className="text-3xl font-bold">Emergency</h1>
              <span className="text-xl">Do it Now</span>
            </div>
          </div>

          {/* Estimate Service Option */}
          <div
            className="flex mb-1 cursor-pointer hover:scale-105 bg-white items-center p-5 border-4 border-white hover:border-black rounded-3xl"
            onClick={handleEstimateClick}
          >
            <img className="w-4 basis-1/4 mr-4" src="/assets/images/estimate.png" alt="Estimate" />
            <div className="flex flex-col hover:text-4xl">
              <h1 className="text-3xl font-bold">Estimate</h1>
            </div>
          </div>

          {/* Waiting List Service Option */}
          <div
            className="flex mb-1 cursor-pointer hover:scale-105 bg-white items-center p-5 border-4 border-white hover:border-black rounded-3xl"
            onClick={handleWaitingListClick}
          >
            <img className="w-4 basis-1/4 mr-4" src="/assets/images/waiting.png" alt="Waiting List" />
            <div className="flex flex-col hover:text-4xl">
              <h1 className="text-3xl font-bold">Waiting List</h1>
              <span className="text-xl">Not In Hurry</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="text-center pt-1 w-full text-xl text-white font-bold"
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
