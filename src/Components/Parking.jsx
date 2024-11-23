import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const ParkingAnimalsForm = () => {
  const [parkingOption, setParkingOption] = useState('');
  const [showAnimalWarning, setShowAnimalWarning] = useState(false);
  const [showReminderScreen, setShowReminderScreen] = useState(false);

  const navigate = useNavigate(); // Create a navigate function to use later

  const handleParkingChange = (e) => {
    setParkingOption(e.target.value);
    setShowAnimalWarning(true); // Show animal warning when a parking option is selected
  };

  const handleSelectClick = () => {
    setShowReminderScreen(true); // Show reminder screen when "Select Option" is clicked
  };

  const handleOkClick = () => {
    navigate('/ServiceSelection'); // Navigate to the next page when "Ok" is clicked
  };

  const handleCancelClick = () => {
    navigate('/ServiceSelection'); // Navigate to the next page when "Cancel" is clicked
  };

  if (showReminderScreen) {
    return (
      <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover">
        <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}>
          <div className="bg-white px-1 md:px-2 min-h-screen w-full md:w-11/12 lg:w-2/3">
            <div className="bg-yellow-400 rounded-xl p-4 flex flex-col justify-center items-center text-center gap-4 my-1">
              <h1 className="text-3xl md:text-5xl">
                Make sure that all animals that bite are away in their secure areas before the tradespeople arrive!
              </h1>
              <div className="flex justify-center items-center gap-1">
                <input
                  name="animal_save"
                  type="radio"
                  className="text-green-600 focus:ring-green-500 checked:bg-none"
                  id="ok"
                  value="ok"
                  onClick={handleOkClick} // Navigate when "Ok" is clicked
                />
                <label className="text-3xl md:text-5xl" htmlFor="ok">
                  Ok
                </label>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center pt-1 w-full text-xl text-white font-bold"
          style={{
            textShadow: '2px 0px 0px rgb(0, 0, 0), 0px -1px 0px rgb(0, 0, 0), 0px 1px 0px rgb(0, 0, 0), -1px 0px 0px rgb(0, 0, 0)',
          }}
        >
          All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}>
      <div className="bg-white px-1 md:px-2 min-h-screen w-full md:w-11/12 lg:w-2/3">
        <div>
          {/* Step Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-purple-600">4 of 4</h1>
            <img className="rounded-full cursor-auto w-12 md:w-16" src="/assets/images/simples4.jpg" alt="Step Icon" />
          </div>

          {/* Parking Question */}
          <h1 className="text-resp text-center font-bold text-4xl bg-green-600 text-white p-3 md:p-4 rounded-xl mb-2">Where can you park?</h1>

          {/* Parking Options */}
          <div className="text-resp grid grid-cols-1 md:grid-cols-2 font-bold text-4xl ap-4 p-2 mb-2">
            {['Street', 'Behind the Building', 'Underground', 'Concierge'].map((option) => (
              <div key={option}>
                <div className="flex items-center gap-2">
                  <input
                    name="parking"
                    type="radio"
                    className="text-green-600 focus:ring-green-500 checked:bg-none"
                    id={option}
                    value={option}
                    checked={parkingOption === option}
                    onChange={handleParkingChange}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              </div>
            ))}
          </div>

          {/* Animals Question */}
          {showAnimalWarning && (
            <div className="bg-yellow-600">
              <div className="bg-red-600 flex justify-center items-center">
                <h1 className="basis-3/4 p-2 text-3xl md:text-6xl">Do you have Animals THAT BITE???</h1>
                <div className="basis-1/2 md:basis-1/3 flex gap-4 justify-start">
                  <img
                    className="w-14 md:w-18 rounded-full cursor-pointer"
                    src="/assets/images/button cancel no.webp"
                    alt="Reject Option"
                    onClick={handleCancelClick} // Navigate when "Cancel" is clicked
                  />
                  <img
                    className="w-14 md:w-18 rounded-full cursor-pointer"
                    src="/assets/images/button ok check.webp"
                    alt="Select Option"
                    onClick={handleSelectClick} // Open reminder screen on click
                  />
                </div>
              </div>
              <img src="/assets/images/animals.png" alt="Animals" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParkingAnimalsForm;
