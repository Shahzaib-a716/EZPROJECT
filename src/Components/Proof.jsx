import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation in React Router v6

const Proof = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Texts for each number, customize as needed
  const texts = [
    "BICYCLES,BYCYCLE TRAILERS DESIGNED AND BUILD",
    "FASHION AND ALL TYPE OF PHOTOGRAPHY",
    "FATHER'S ENGINEERING",
    "ENTERTAINING AND EASY TO USE VOICEMAIL SYSTEM",
    "DONATING CLINICAL ENGINEERING",
    "SONGS WHICH MADE ME FAMOUS",
    "I DIDN'T BUILD THEM,I JUST MADE THEM BETTER",
    "I LOVE TO DREAM ,DESIGN AND+ BUILD ANYTHING",
    "I WELCOME BUSINESS DEALS",
    "BECAME A FRANCHISE PARTNER IN VIRTUAL HOUSE",
    "MARKETING",
    "PROGRAMMING",
    "THE JOURNEY WHICH BROUGHT ME HERE",
    "CISCO PARTNER & THE FAILED DEALS",
    "THROUGH CREATIVILY INNOVATION, DRIVE, YOU CAN",
    "MOTORHOME MODIFICATIONS",
    "CUSTOM MADE MOTORHOME TRAILERS FOR YOU",
    "EVERYTHING ELSE",
  ];

  // Function to navigate to specific page based on button click
  const handleButtonClick = (index) => {
    // Define unique routes for each number
    const routes = [
      '/page1', '/paage2', '/page3', '/paage4', '/page5', '/page6', 
      '/page7', '/page8', '/page9', '/page10', '/page11', '/page12', 
      '/page13', '/page14', '/page15', '/page16', '/page17', '/page18'
    ];

    // Navigate to the corresponding route
    navigate(routes[index]);
  };

  return (
    <div
      className="min-h-screen bg-day bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}
    >
      <div className="min-h-screen w-full md:pt-6">
        <div className="max-w-6xl bg-black bg-opacity-[70%] rounded-md flex justify-center mx-auto">
          {/* Left Panel */}
          <div className="basis-32 flex flex-col items-center">
            {[...Array(9)].map((_, index) => (
              <a
                key={index}
                className="flex justify-center flex-col items-center w-full"
                onClick={() => handleButtonClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h1
                  className="flex justify-center text-white text-6xl py-0.5 rounded-full font-bold hover:bg-slate-200 hover:text-black w-full"
                >
                  {index + 1}
                </h1>
              </a>
            ))}
          </div>

          {/* Center Content */}
          <div className="w-full">
            {/* Quote Section */}
            <div className="w-full flex justify-center gap-4 mt-4">
              <div className="basis-1/2 md:flex justify-center items-center hidden sm:block">
                <div className="font-extrabold p-8 text-3xl border-2 border-gray-700 rounded-3xl bg-opacity-90 text-center bg-yellow-400">
                  {hoveredIndex !== null ? texts[hoveredIndex] : "LESS STRESS WHEN YOU HIRE LESS"}
                </div>
              </div>
            </div>

            {/* Proof Statement */}
            <div className="flex flex-col justify-center gap-4 w-full">
              <div className="flex justify-center">
                <a href="LESTHEHANDYMAN">
                  <img
                    src="/assets/images/LesHandyman.png"
                    className="w-52 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
                    alt="Les The Handyman"
                  />
                </a>
              </div>
              <h1 className="border-4 bg-black border-yellow-500 text-yellow-500 text-3xl text-center">
                I am living proof that anything is possible and my software will help you achieve great things if we customize it for you further
              </h1>
            </div>
          </div>

          {/* Right Panel */}
          <div className="basis-32 flex flex-col items-center">
            {[...Array(9)].map((_, index) => (
              <a
                key={index + 9}
                className="flex justify-center flex-col items-center w-full"
                onClick={() => handleButtonClick(index + 9)}
                onMouseEnter={() => setHoveredIndex(index + 9)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h1
                  className="flex justify-center text-white text-6xl py-0.5 rounded-full font-bold hover:bg-slate-200 hover:text-black w-full"
                >
                  {index + 10}
                </h1>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="text-center pt-1 w-full text-3xl font-bold text-white font-bold"
        style={{
          textShadow:
            'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px',
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario
        CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default Proof;
