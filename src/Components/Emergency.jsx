import React, { useState } from 'react';
import Header from './Header';
import Step1 from './Step1';

const Emergency = () => {
  const [showBookingStep, setShowBookingStep] = useState(false);

  const handleShowBookingStep = () => {
    setShowBookingStep(true);
  };

  return (
    <div
      className="min-h-screen bg-day bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}
    >
      {/* Header Component */}
      <Header title="Emergency" />

      {/* Toggle Content */}
      {!showBookingStep ? (
        // Emergency service intro section
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-xl text-center mt-5">
            This is the Emergency service page. Select an option to proceed!
          </p>
          <button
            className="mt-5 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600"
            onClick={handleShowBookingStep}
          >
            Select a Day
          </button>
        </div>
      ) : (
        // BookingStep1 component
        <Step1 />
      )}

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

export default Emergency;
