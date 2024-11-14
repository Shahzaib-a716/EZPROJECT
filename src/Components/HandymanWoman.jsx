import React, { useState } from 'react';

const HandyManWoman = ({ onClose }) => (
  <div className="z-50 border-2 border-gray-700 rounded-3xl opacity-90 w-[95%] absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6">
    <div className="relative">
      <h1 className="text-5xl font-bold">HANDYMAN / WOMAN</h1>
      <h1
        className="cursor-pointer hover:text-4xl bg-red-600 text-white font-extrabold text-3xl absolute px-2 rounded-full -top-4 -right-4"
        onClick={onClose}
      >
        X
      </h1>
    </div>
    <p className="text-3xl p-6">
      Is a person who can usually do many different types of small jobs well,
      like hang pictures or fix a deck. Ours are skilled and are supposed to
      clean up after every job.
    </p>
    <div className="flex justify-around text-2xl">
      <a href="https://hm.ez123.eu/TradesPeople">
        <div className="group relative inline-block text-blue-500 underline duration-300">
          <div className="w-44 flex justify-center rounded-xl border-solid border-4 border-green-400 cursor-pointer">
            <img className="h-40" src="/img/btn/single.png" alt="Single Trades Person" />
          </div>
          <span className="absolute -translate-y-full p-1 bg-green-500 rounded-lg text-center text-white text-xl hidden group-hover:flex">
            Book a Single Trades Person
          </span>
        </div>
      </a>
      <a>
        <div className="group relative inline-block text-blue-500 underline duration-300">
          <div className="w-44 rounded-xl border-solid border-4 border-white cursor-pointer">
            <img className="h-40" src="/img/btn/multiple.png" alt="Multiple Trades People" />
          </div>
          <span className="absolute -translate-y-full p-1 bg-yellow-500 rounded-lg text-center text-white text-xl hidden group-hover:flex">
            Book Multiple Trades People
          </span>
        </div>
      </a>
    </div>
  </div>
);
export default HandyManWoman;