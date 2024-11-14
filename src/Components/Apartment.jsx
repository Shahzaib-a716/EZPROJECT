import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Apartment = () => {
  const [addressOption, setAddressOption] = useState('');
  const [addressDetails, setAddressDetails] = useState({
    address: '',
    postalCode: '',
    aptNumber: '',
    code: '',
  });
  const [phoneDetails, setPhoneDetails] = useState({
    work: '',
    extension: '',
    home: '',
    mobile: '',
  });
  const [showPhoneSection, setShowPhoneSection] = useState(false);
  const [showNextIcon, setShowNextIcon] = useState(false);

  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setAddressOption(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    if (name === 'aptNumber' || name === 'code') {
      setShowPhoneSection(value.trim() !== '');
    }
  };

  const handlePhoneInputChange = (e) => {
    const { name, value } = e.target;
    setPhoneDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setShowNextIcon(value.trim() !== '');
  };

  const goToNextStep = () => {
    navigate('/Parking');
  };

  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col gap-6 justify-center items-center min-h-screen">
        <div className="bg-white px-1 md:px-2 min-h-screen w-full md:w-11/12 lg:w-2/3">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-600">3 of 4</h1>
            <img
              className="rounded-full cursor-auto w-12 md:w-16"
              src="/assets/images/simples2.jpg"
              alt="Step Image"
            />
          </div>

          <h1 className="text-resp bg-green-600 text-center text-white font-bold text-3xl p-3 md:p-4 rounded-xl mb-1">
            Your Apartment Address
          </h1>

          <div className="flex md:gap-1 flex-col md:flex-row">
            <input
              className="border-gray-300 w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md font-bold text-4xl bg-yellow-200 mb-1"
              name="address"
              placeholder="123 Somewhere St."
              required
              autoFocus
              value={addressDetails.address}
              onChange={handleInputChange}
            />
            <input
              className="border-gray-300 w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md font-semibold text-4xl bg-yellow-200 mb-1"
              placeholder="POSTAL CODE or ZIP"
              required
              name="postalCode"
              value={addressDetails.postalCode}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex md:gap-1 flex-col md:flex-row">
            <div className="flex items-center gap-1 w-full justify-around font-bold text-3xl md:w-1/2 mb-1">
              {['STREET', 'AVENUE', 'ROAD'].map((option) => (
                <div key={option}>
                  <div className="flex items-center gap-2">
                    <input
                      name="addr_opt"
                      type="radio"
                      className="text-green-600 focus:ring-green-500"
                      id={option}
                      value={option}
                      checked={addressOption === option}
                      onChange={handleOptionChange}
                    />
                    <label className="text-sm md:text-xl" htmlFor={option}>
                      {option} ({option.slice(0, 2).toUpperCase()})
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {addressOption && (
            <div>
              <div className="flex flex-col md:flex-row gap-1 mb-1">
                <input
                  className="border-gray-300 w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md font-bold text-4xl bg-yellow-200"
                  placeholder="Apt. # 2345"
                  name="aptNumber"
                  value={addressDetails.aptNumber}
                  onChange={handleInputChange}
                />
                <input
                  className="border-gray-300 w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md font-bold text-4xl bg-yellow-200"
                  placeholder="Code 1234567"
                  name="code"
                  value={addressDetails.code}
                  onChange={handleInputChange}
                />
              </div>

              {showPhoneSection && (
                <>
                  <h1 className="text-resp bg-green-600 text-center text-white p-3 md:p-4 rounded-xl mb-1">
                    Your Phone Numbers
                  </h1>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <input
                      className="border-gray-300 w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md text-3xl bg-yellow-200"
                      placeholder="Work 36302308761"
                      name="work"
                      type="tel"
                      value={phoneDetails.work}
                      onChange={handlePhoneInputChange}
                    />
                    <input
                      className="border-gray-300 w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md text-3xl bg-yellow-200"
                      placeholder="Extension"
                      name="extension"
                      type="tel"
                      value={phoneDetails.extension}
                      onChange={handlePhoneInputChange}
                    />
                    <input
                      className="border-gray-300 w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md text-3xl bg-yellow-200"
                      placeholder="Home"
                      name="home"
                      type="tel"
                      value={phoneDetails.home}
                      onChange={handlePhoneInputChange}
                    />
                    <input
                      className="border-gray-300 w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md text-3xl bg-yellow-200"
                      placeholder="Mobile"
                      name="mobile"
                      type="tel"
                      value={phoneDetails.mobile}
                      onChange={handlePhoneInputChange}
                    />
                  </div>

                  {showNextIcon && (
                    <div className="text-center mt-4">
                      <img
                        src="/assets/images/button ok check.webp"
                        alt="Next Icon"
                        onClick={goToNextStep}
                        className="cursor-pointer w-16 md:w-20"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className="text-center pt-1 w-full text-xl text-white font-bold"
        style={{
          textShadow:
            '2px 0px 0px rgb(0, 0, 0), 0px -1px 0px rgb(0, 0, 0), 0px 1px 0px rgb(0, 0, 0), -1px 0px 0px rgb(0, 0, 0)',
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright ©
        2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default Apartment;
