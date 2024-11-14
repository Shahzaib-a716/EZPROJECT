import React, { useState } from 'react';
import Apartment from './Apartment'; // Assuming ApartmentAddressForm is in the same directory

const StepComponent = () => {
  const [step, setStep] = useState(2);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [selectedOwnership, setSelectedOwnership] = useState("");
  const [showAddressForm, setShowAddressForm] = useState(false);

  const handlePropertyChange = (e) => {
    setSelectedProperty(e.target.value);
  };

  const handleOwnershipChange = (e) => {
    setSelectedOwnership(e.target.value);
    setShowAddressForm(true); // Switch to showing ApartmentAddressForm only
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1); // Increase the step on arrow click
  };

  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}>
      <div className="flex flex-col gap-6 justify-center items-center min-h-screen">
        
        {/* Show ApartmentAddressForm if showAddressForm is true; otherwise, show StepComponent content */}
        {showAddressForm ? (
          <Apartment />
        ) : (
          <div className="bg-white px-1 md:px-2 min-h-screen w-full md:w-11/12 lg:w-2/3">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-purple-600">{step} of 4</h1>
              <img
                className="rounded-full cursor-pointer w-12 md:w-16"
                src="/assets/images/simples2.jpg"
                alt="Next Step"
                onClick={handleNextStep}
              />
            </div>

            <h1 className="text-resp bg-green-600 text-center text-white text-4xl font-bold p-3 md:p-4 rounded-xl">You live in a:</h1>
            <div className="text-resp text-4xl font-bold grid grid-cols-1 md:grid-cols-2 gap-4 p-2 mb-2">
              {[
                { id: 'House', label: 'House', icon: '/assets/images/home.png' },
                { id: 'Apartment', label: 'Apartment', icon: '/assets/images/building.png' },
                { id: 'Condominium', label: 'Condominium', icon: '/assets/images/building.png' },
                { id: 'CO-OP', label: 'CO-OP', icon: '/assets/images/building.png' },
              ].map(({ id, label, icon }) => (
                <div key={id} className="flex items-center gap-2">
                  <input
                    name="property_type"
                    type="radio"
                    className="text-green-600 focus:ring-green-500"
                    id={id}
                    value={label}
                    checked={selectedProperty === label}
                    onChange={handlePropertyChange}
                  />
                  <img className="w-12" src={icon} alt={`${label} Icon`} />
                  <label htmlFor={id}>{label}</label>
                </div>
              ))}
            </div>

            {selectedProperty && (
              <>
                <h1 className="text-resp bg-green-600 text-center text-white p-3 md:p-4 font-bold text-5xl rounded-xl">Do you:</h1>
                <div className="text-resp grid grid-cols-3 gap-4 p-2 mb-2 text-4xl font-bold">
                  {['Rent', 'Own', 'Lease'].map((ownership) => (
                    <div key={ownership} className="flex items-center gap-2">
                      <input
                        name="do_you"
                        type="radio"
                        className="text-green-600 focus:ring-green-500"
                        id={ownership}
                        value={ownership}
                        checked={selectedOwnership === ownership}
                        onChange={handleOwnershipChange}
                      />
                      <label htmlFor={ownership}>{ownership}</label>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="text-center pt-1 w-full text-xl text-white font-bold" style={{ textShadow: '2px 0px 0px rgb(0, 0, 0), 0px -1px 0px rgb(0, 0, 0), 0px 1px 0px rgb(0, 0, 0), -1px 0px 0px rgb(0, 0, 0)' }}>
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024,
        Les The Handyman.
      </div>
    </div>
  );
};

export default StepComponent;
