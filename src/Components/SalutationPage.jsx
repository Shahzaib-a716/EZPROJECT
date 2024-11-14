import React, { useState } from 'react';
import StepComponent from './StepComponent';

const SalutationForm = () => {
  const [selectedSalutation, setSelectedSalutation] = useState("");
  const [name, setName] = useState("");
  const [iconClicked, setIconClicked] = useState(false);

  const handleSalutationChange = (e) => {
    setSelectedSalutation(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIconClick = () => {
    setIconClicked(!iconClicked); // Toggle the icon's state
  };

  // Render the StepComponent if iconClicked is true
  if (iconClicked) {
    return <StepComponent />;
  }

  return (
    <div
    className="min-h-screen flex justify-center items-center bg-cover bg-center"
    style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}
  >
      <div className="bg-white px-1 md:px-2 min-h-screen w-full md:w-11/12 lg:w-2/3">
        <div className="flex justify-between items-center">
          <h1 className="text-resp font-extrabold text-3xl text-purple-600">1 of 4</h1>
          <img
            className="rounded-full cursor-auto w-12 md:w-16"
            src="/assets/images/simples2.jpg"
            alt="Step Indicator"
          />
        </div>

        <h1 className="text-resp bg-green-600 text-center text-2xl font-bold text-white p-3 md:p-4 rounded-xl">Your Salutation?</h1>

        <div className="border-b-2 border-black mb-2">
          <div className="text-resp grid grid-cols-2 gap-4 text-2xl font-bold p-2">
            {['None', 'Mr.', 'Ms.', 'Dr.', 'Mrs.', 'Prof.', 'Miss', 'Sir.'].map((salutation) => (
              <div key={salutation}>
                <div className="flex items-center gap-2">
                  <input
                    name="salutation"
                    type="radio"
                    className="text-green-600 focus:ring-green-500"
                    id={salutation}
                    value={salutation}
                    onChange={handleSalutationChange}
                  />
                  <label htmlFor={salutation} className="text-blue-500">
                    {salutation}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedSalutation && (
          <label htmlFor="name" className="text-resp mb-2 text-3xl font-bold">
            {selectedSalutation}
          </label>
        )}

        <input
          className="border-gray-300 w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md text-4xl font-semibold bg-yellow-200"
          id="name"
          name="name"
          placeholder="WHATS YOUR FIRST AND LAST NAME?"
          required
          autoFocus
          value={name}
          onChange={handleNameChange}
        />

        {name && (
          <div className="flex justify-center mt-4">
            <img
              src={iconClicked ? "/assets/images/button ok check.webp" : "/assets/images/button ok check.webp"} 
              alt="Icon"
              className="w-[100px] h-[105px] cursor-pointer"
              onClick={handleIconClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SalutationForm;
