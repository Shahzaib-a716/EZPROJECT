import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LesHandyman = () => {
  return (
    <div className="font-arial bg-white border-8 py-4 border-green-500 mt-3">
      <h1 className="text-center mb-12 text-5xl font-extrabold">Les the Handyman</h1>
      <div className="flex justify-evenly text-center text-4xl">
        <a
          className="flex flex-col items-center justify-center"
          href="https://hm.ez123.eu/WhatDoIDo/2"
        >
          <img
            className="rounded-full w-28"
            src="/assets/images/1.jpg"
            alt="What do I do?"
          />
          <h1 className="font-extrabold">What do I do?</h1>
        </a>
        <a
          className="flex flex-col items-center justify-center"
          href="https://hm.ez123.eu/VideoReferences/2"
        >
          <img
            className="rounded-full w-28"
            src="/assets/images/2.jpg"
            alt="Video References"
          />
          <h1 className="font-extrabold">Video References</h1>
        </a>
        <a
          className="flex flex-col items-center justify-center"
          href="/Enter"
        >
          <img
            className="rounded-full w-28"
            src="/assets/images/3.jpg"
            alt="Book me in"
          />
          <h1 className="font-extrabold">Book me in</h1>
        </a>
      </div>
    </div>
  );
};

const TradesPersonSelection = () => {
  const [showLesHandyman, setShowLesHandyman] = useState(false);

  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}
    >
      {/* Header Section */}
      <div className="relative flex h-[90px] justify-center items-center bg-yellow-400 gap-1">
        <img
          className="absolute left-0 top-0 h-full rounded-full"
          src="/assets/images/button back.webp"
          alt="Back"
        />
        <h1 className="p-3 text-xl md:text-3xl text-center font-bold ml-20">
          Select a trades person or{' '}
          <a
            className="md:p-3 md:text-3xl text-center font-bold text-blue-600 underline"
            href="/FreeRegistration1"
          >
            recommend your own
          </a>
        </h1>
        <a href="/Landing">
          <img
            className="absolute right-0 top-0 h-full rounded-full"
            src="/assets/images/button help.webp"
            alt="Help"
          />
        </a>
      </div>

      {/* Tradesperson Cards */}
      <div className="flex flex-col justify-center">
        <div className="flex justify-center gap-1 mt-6">
          <div
            className="bg-white p-1 border-8 cursor-pointer rounded-3xl border-white hover:border-green-600 hover:scale-105"
            onClick={() => setShowLesHandyman(true)}
          >
            <div className="flex flex-col justify-center gap-3">
              <img
                className="w-44 rounded-xl"
                src="/assets/images/les.webp"
                alt="Handyman"
              />
              <div className="flex h-6 justify-center">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className="text-yellow-500"
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                  
                ))}
                
              </div>
              
            </div>
            
          </div>
          
        </div>
      </div>

      {/* Show LesHandyman Section based on state */}
      {showLesHandyman && <LesHandyman />}
      <div className="text-center mt-8">
                    <p className="text-2xl text-white font-bold"> {/* Increased size */}
                      All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) • Copyright © 2016–2024 Les The Handyman.
                    </p>
                  </div>
    </div>
  );
};

export default TradesPersonSelection;