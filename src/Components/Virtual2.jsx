import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom'; // Import useNavigate

const VirtualHousePage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const selectedCity = location.state?.selectedCity || 'BERLIN'; // Default to "BERLIN" if no city is passed

  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: 'url(/assets/images/day.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative">
        <div className="grid md:grid-cols-2 gap-0 text-center">
          {/* Back Section */}
          <div className="flex bg-orange-500 items-center">
            <img
              className="w-20 rounded-full cursor-pointer"
              src="/assets/images/button back.webp"
              alt="Back"
              onClick={() => navigate(-1)} // Navigate to the previous page
            />
            <div className="w-full">
              <h1 className="font-extrabold text-xl md:text-3xl">JUST LOOK AROUND</h1>
              <h1 className="m-0 pl-1 pr-1 text-white text-lg md:text-lg">
                IF YOU DO NOT SEE YOUR AREA, THEN{' '}
                <Link to="/ContactUs">
                  <span className="font-bold text-yellow-300 text-base md:text-xl cursor-pointer">
                    CLICK HERE
                  </span>
                </Link>
              </h1>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-blue-500">
            <h1 className="text-white text-lg md:text-xl m-0 p-0">
              When a{' '}
              <span className="text-md font-bold">Virtual House gets 75% full</span> of businesses,
              it automatically unlocks & everyone in it is informed that they can now see it online.
            </h1>
            <div className="ml-5 mr-5 grid grid-cols-3 gap-4">
              <div className="w-full p-0.1 bg-yellow-200 rounded-xl">
                <div
                  className="bg-red-400 rounded-xl p-1 text-center text-xs font-medium leading-none text-primary-100"
                  style={{ width: '60%' }}
                >
                  5-64%
                </div>
              </div>
              <div className="w-full p-0.1 bg-yellow-200 rounded-xl">
                <div
                  className="bg-orange-400 rounded-xl p-1 text-center text-xs font-medium leading-none text-primary-100"
                  style={{ width: '74%' }}
                >
                  65-74%
                </div>
              </div>
              <div className="w-full p-0.1 bg-yellow-200 rounded-xl">
                <div
                  className="bg-green-400 rounded-xl p-1 text-center text-xs font-medium leading-none text-primary-100"
                  style={{ width: '80%' }}
                >
                  75-100%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Content Section */}
        <div className="mt-1 flex justify-center">
          <div>
            <div className="flex justify-center flex-col items-center m-1">
              <h1 className="border-sky-600 px-2 border-2 text-2xl md:text-3xl w-full rounded-3xl text-center bg-white text-sky-600">
                We need another 35% of businesses in{' '}
                <span className="text-[#FF00FE] font-bold">{selectedCity}</span> before the Virtual
                House can be seen online. <br />
                <Link to="/NewTradePerson">
                  <span className="text-[#FF00FE] font-bold hover:underline">
                    Would you like to help us?
                  </span>
                </Link>
              </h1>

              {/* Virtual House Image with Navigation */}
              <Link to="/VirtualHouse">
                <div className="text-4xl flex flex-col text-[#FF00FE] font-bold">
                  <img className="w-70" src="/assets/images/vh.png" alt="VirtualHouse" />
                  <span className="border-sky-600 border-2 text-3xl rounded-full text-center bg-white text-sky-600 p-2">
                    Press on the house to try it
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="text-center pt-1 w-full text-xl text-white font-bold"
        style={{
          textShadow:
            '2px 0px 0px rgba(0, 0, 0, 1), 0px -1px 0px rgba(0, 0, 0, 1), 0px 1px 0px rgba(0, 0, 0, 1), -1px 0px 0px rgba(0, 0, 0, 1)',
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST
        (3278) Copyright © 2016 - 2025, Les The Handyman.
      </div>
    </div>
  );
};

export default VirtualHousePage;
