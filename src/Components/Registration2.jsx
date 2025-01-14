import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation for accessing state

const Registration2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { country, province, city } = location.state || {};

  // Function to handle navigation when a list item is clicked
  const handleItemClick = () => {
    navigate('/RegistrationForm31', {
      state: {
        country: country,
        province: province,
        city: city,
      },
    });
  };

  // Function to handle back navigation
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}>
      <div className="relative">
        <div className="grid md:grid-cols-2 gap-0 text-center">
          <div className="flex bg-orange-500 items-center">
            <img className="w-20 rounded-full cursor-pointer" src="/assets/images/button back.webp" alt="Back" onClick={handleBackClick} />
            
            <div className="w-full">
              <h1 className="font-extrabold md:text-3xl">FREE BUSINESS REGISTRATION</h1>
              <h1 className="m-0 pl-1 pr-1 text-white text-xl md:text-base">
                DO NOT SEE YOUR AREA, THEN{' '}
                <a className="font-bold text-yellow-300 text-base md:text-xl cursor-pointer" href="/ContactUs">
                  CLICK HERE
                </a>
              </h1>
            </div>
          </div>
          <h1 className="flex font-extrabold justify-center items-center text-center bg-yellow-500 text-4xl">
            NO CREDIT CARD INFORMATION WILL BE ASKED
          </h1>
        </div>

        <div className="mt-1 flex">
          <div className="w-full md:w-1/3">
            <div className="bg-blue-900 p-2">
              <h1 className="text-green-500 font-bold text-center text-xl md:text-2xl">
                Select Your Type of Business
              </h1>
            </div>
            <ul>
              {/* List Item 1 */}
              <li className="rounded-3xl h-3/4">
                <div className="ml-2 mr-2 font-bold cursor-pointer hover:rounded-3xl hover:bg-yellow-300" onClick={handleItemClick}>
                  <a className="group relative duration-600">
                    <img src="/assets/images/1.webp" alt="Option 5" />
                    <span className="absolute hidden group-hover:flex mt-4 group-hover:items-center -top-16 -right-12 translate-x-full w-full px-4 py-4 bg-yellow-500 rounded-lg text-center text-black text-2xl">
                      If you are a tradesperson and go to customers' houses or businesses to make repairs on the certain day and time
                      <span className="absolute -right-10 top-1/2 w-0 h-0 border-l-[20px] border-l-yellow-500 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent transform -translate-y-1/2"></span>


                      </span>

                  </a>
                </div>
              </li>

              {/* List Item 2 */}
              <li className="rounded-3xl h-3/4">
                <div className="ml-2 mr-2 font-bold cursor-pointer hover:rounded-3xl hover:bg-yellow-300" onClick={handleItemClick}>
                  <a className="group relative duration-600">
                    <img src="/assets/images/2.webp" alt="Option 5" />
                    <span className="absolute hidden group-hover:flex mt-4 group-hover:items-center -top-16 -right-12 translate-x-full w-full px-4 py-4 bg-yellow-500 rounded-lg text-center text-black text-2xl">
                      If you are a professional like a photographer, model, lawyer, etc., and you have customers coming to your office on a specific day and time
                      <span className="absolute -left-10 top-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-yellow-500 border-r-[23px] border-r-transparent transform -translate-y-1/2"></span>
                    </span>
                  </a>
                </div>
              </li>

              {/* List Item 3 */}
              <li className="rounded-3xl h-3/4">
                <div className="ml-2 mr-2 font-bold cursor-pointer hover:rounded-3xl hover:bg-yellow-300" onClick={handleItemClick}>
                  <a className="group relative duration-600">
                    <img src="/assets/images/3.webp" alt="Option 5" />
                    <span className="absolute hidden group-hover:flex mt-4 group-hover:items-center -top-16 -right-12 translate-x-full w-full px-4 py-4 bg-yellow-500 rounded-lg text-center text-black text-2xl">
                      When customers come to your store to purchase something(s) and you will install it for the customers on a particular day and time
                      <span className="absolute -left-10 top-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-yellow-500 border-r-[23px] border-r-transparent transform -translate-y-1/2"></span>
                    </span>
                  </a>
                </div>
              </li>

              {/* List Item 4 */}
              <li className="rounded-3xl h-3/4">
                <div className="ml-2 mr-2 font-bold cursor-pointer hover:rounded-3xl hover:bg-yellow-300" onClick={handleItemClick}>
                  <a className="group relative duration-600">
                    <img src="/assets/images/4.webp" alt="Option 5" />
                    <span className="absolute hidden group-hover:flex mt-4 group-hover:items-center -top-16 -right-12 translate-x-full w-full px-4 py-4 bg-yellow-500 rounded-lg text-center text-black text-2xl">
                      If you are a store with a delivery service like Groceries etc., which you deliver to the customers home on the certain day and time
                      <span className="absolute -left-10 top-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-yellow-500 border-r-[23px] border-r-transparent transform -translate-y-1/2"></span>
                    </span>
                  </a>
                </div>
              </li>

              {/* List Item 5 */}
              <li className="rounded-3xl h-3/4">
                <div className="ml-2 mr-2 font-bold cursor-pointer hover:rounded-3xl hover:bg-yellow-300" onClick={handleItemClick}>
                  <a className="group relative duration-600">
                    <img src="/assets/images/5.webp" alt="Option 5" />
                    <span className="absolute hidden group-hover:flex mt-4 group-hover:items-center -top-16 -right-12 translate-x-full w-full px-4 py-4 bg-yellow-500 rounded-lg text-center text-black text-2xl">
                      If you are a store and your customers come to you during your open hours and do not require a booking system
                      <span className="absolute -left-10 top-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-yellow-500 border-r-[23px] border-r-transparent transform -translate-y-1/2"></span>
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-1 w-full text-xl text-white font-bold" style={{ textShadow: 'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px' }}>
          All Rights Reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
        </footer>
      </div>
    </div>
  );
};

export default Registration2;
