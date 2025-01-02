import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CallBackList = () => {
  const [zoomLevel, setZoomLevel] = useState(1); // Start with zoom level 1 (original size)
  const [selectedRadio, setSelectedRadio] = useState(null); // Track selected radio button
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the specified path
  };
  // Function to zoom in (increase the zoom level)
  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Keep the zoom level at or below 1
  };

  // Function to zoom out (decrease the zoom level)
  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 1)); // Min zoom level is 0.5
  };
  

  // Handle radio button click
  const handleRadioClick = (i) => {
    setSelectedRadio(i); // Set selected radio index
  };
  

  return (
  
    <div
      style={{
        transform: `scale(${zoomLevel})`, // Apply zoom level to the entire content
        transformOrigin: "top center", // Keep content centered on zoom
        transition: "transform 0.3s ease", // Smooth transition for zoom
      }}
    >
      {/* Top Header */}
      <div
        className="bg-cover bg-center text-white max-w-4xl px-4 py-2 ml-[259px] flex justify-between items-center rounded-t-lg w-full"
        style={{
          backgroundImage: 'url("/assets/images/background metal texture light blue.webp")',
        }}
      >
        <h1 className="text-2xl font-bold"> Call Back List</h1>
        <div className="flex items-center space-x-3">
          {/* Zoom Minus (Zoom Out) Icon */}
          <img
            src="/assets/images/button plus.webp"
            alt="Zoom Out"
            className="w-12 h-12 cursor-pointer transform transition duration-500 hover:scale-125"
            title="Zoom Out"
            onClick={zoomOut} // Zoom out (decrease size) on click
          />
          {/* Zoom Plus (Zoom In) Icon */}
          <img
            src="/assets/images/button minus.webp"
            alt="Zoom In"
            className="w-12 h-12 cursor-pointer transform transition duration-500 hover:scale-125"
            title="Zoom In"
            onClick={zoomIn} // Zoom in (increase size) on click
          />
          <img
            src="/assets/images/button help purple.webp"
            alt="Help"
            className="w-12 h-12 cursor-pointer transform transition duration-500 hover:scale-125"
            title="Help"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div
        className="max-w-4xl ml-[259px] bg-cover bg-center mt-4"
        style={{
          backgroundImage: "url('/assets/images/background metal texture.webp')",
          minHeight: "100vh",
        }}
      >
        {/* Main Content */}
        <div className="bg-cover bg-center rounded-b-lg w-[900px] p-4 shadow-lg">
          <div className="grid grid-cols-12 gap-4">
            {/* Left Section */}
            <div className="col-span-9">
              {/* Customer and Wants */}
              <div className="grid grid-cols-12 gap-2 mb-4">
                {/* Customer Button */}
                <button className="col-span-2 w-[130px] bg-green-500 text-white text-lg font-bold py-10 rounded">
                  Customer
                </button>

                {/* Add "WANTS" Heading and Input Field in One Line */}
                <div className="col-span-10 ml-2 flex items-center">
                  {/* "WANTS" Heading */}
                  <div className="text-xl ml-6 mb-[80px] font-bold text-black mr-4">
                    WANTS
                  </div>

                  <textarea
                    placeholder=""
                    className="p-4 pl-4 border text-xl font-bold w-[440px] h-[100px] border-gray-400 rounded text-left resize-none"
                  />
                </div>
              </div>

              {/* Name and Country Fields */}
              <div className="grid grid-cols-12 w-[700px] gap-2 mb-4">
                {/* Name Input */}
                <div className="col-span-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-[330px] p-2 text-2xl font-bold border border-gray-400 rounded"
                  />
                </div>
                {/* Country Input */}
                <div className="col-span-6">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-2 text-2xl font-bold border border-gray-400 rounded"
                  />
                </div>
              </div>

              {/* Phone Number Table */}
              <div className="grid grid-cols-12 w-[840px] items-center mb-4">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <React.Fragment key={i}>
                      <div className="col-span-1">
                        <label
                          className={`block w-4 h-4 ${selectedRadio === i ? "bg-orange-500" : "bg-white"} rounded-full  mx-auto cursor-pointer`}
                        >
                          {/* Radio button */}
                          <input
                            type="radio"
                            name="phone-radio"
                            className="opacity-0 absolute w-0 h-0"
                            onClick={() => handleRadioClick(i)}
                          />
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="1"
                        className="col-span-1 p-2 w-[60px] border text-2xl font-bold border-gray-400 rounded"
                      />
                      <input
                        type="text"
                        placeholder="(XXX)"
                        className="col-span-2 p-2 border w-[130px] text-2xl font-bold border-gray-400 rounded"
                      />
                      {/* Input with embedded icon */}
                      <div className="col-span-6 relative">
                        <input
                          type="text"
                          placeholder="XXX-XXXX"
                          className="w-full p-2 border text-2xl font-bold border-gray-400 rounded"
                        />
                        {/* Dynamic Image Source */}
                        <img
                          src={`/assets/images/${[
                            "button home phone black.webp",
                            "button mobile phone black.webp",
                            "button office phone black.webp",
                            "button voicemail phone black.webp",
                          ][i]}`}
                          alt={`phone-icon-${i + 1}`}
                          className="absolute top-1/2 right-2 cursor-pointer transform transition duration-500 hover:scale-125 transform -translate-y-1/2 w-9 h-9"
                        />
                      </div>
                      {/* Empty column for spacing */}
                      <div className="col-span-2"></div>
                    </React.Fragment>
                  ))}
              </div>

              {/* Table of Calls */}
              <div className="border-t w-[700px] h-auto bg-white border-gray-400 mt-4 pt-4">
                <div className="grid grid-cols-12 font-bold text-gray-700">
                  <div className="col-span-3">Date last called</div>
                  <div className="col-span-3">When called</div>
                  <div className="col-span-3">Customer Name</div>
                  <div className="col-span-3">Phone number</div>
                </div>

                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="grid grid-cols-12 text-gray-700 text-sm font-bold mt-2">
                      <div className="col-span-3 text-blue-500">Sun, Dec 27, 2015</div>
                      <div className="col-span-3 text-green-500">(1 day)</div>
                      <div className="col-span-3 text-red-500">Robbie</div>
                      <div className="col-span-3 text-purple-500">(416)-442-9066</div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-3 h-[670px] flex flex-col border border-white items-center ml-[50px] relative">
      {/* Tooltip for icons */}
      <div className="absolute left-14 top-1/2 transform -translate-y-1/2 w-[150px] text-center text-sm font-bold bg-gray-700 text-white py-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
        Add Call
      </div>
      {/* Buttons */}
      <h1 className="font-bold text-xl flex justify-center mt-5">for this client</h1>
      <div className="flex flex-col items-center group">
        <button className="mt-2" onClick={() => handleNavigate('/add-call')}>
          <img
            src="/assets/images/button call.webp"
            alt="Add"
            className="h-[110px] w-[130px] cursor-pointer transform transition duration-300 hover:scale-110"
            title="Add Call"
          />
        </button>
        <button className="mt-2" onClick={() => handleNavigate('/next-call')}>
          <img
            src="/assets/images/button call2.webp"
            alt="Next"
            className="h-[110px] w-[130px] cursor-pointer transform transition duration-500 hover:scale-110"
            title="Next Call"
          />
        </button>
      </div>
      <button
        className="mt-2 relative group"
        onClick={() => handleNavigate('/cancel')}
      >
        <img
          src="/assets/images/button cancel vertical.webp"
          alt="Cancel"
          className="h-[80px] w-[100px] shadow-xl group-hover:shadow-purple-500 cursor-pointer transform transition duration-300 hover:scale-110"
        />
        <div className="tooltip absolute left-full top-1/2 transform -translate-y-1/2 ml-5 text-4xl font-bold text-black py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Cancel
        </div>
      </button>
      <button
        className="mt-0 relative group"
        onClick={() => handleNavigate('/ContactManager')}
      >
        <img
          src="/assets/images/button next go.webp"
          alt="Next Call"
          className="h-[80px] w-[100px] shadow-xl group-hover:shadow-purple-500 cursor-pointer transform transition duration-300 hover:scale-110"
        />
        <div className="tooltip absolute left-full top-1/2 transform -translate-y-1/2 ml-5 text-4xl font-bold text-black py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Next
        </div>
      </button>
      <button
        className="mt-[132px] relative group"
        onClick={() => handleNavigate('/VBEnd')}
      >
        <img
          src="/assets/images/button exit.webp"
          alt="Exit"
          className="h-[80px] w-[110px] shadow-xl group-hover:shadow-purple-500 cursor-pointer transform transition duration-300 hover:scale-110"
        />
        <div className="tooltip absolute left-full top-1/2 transform -translate-y-1/2 ml-5 text-4xl font-bold text-black py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Exit
        </div>
      </button>
    </div>

          {/* Bottom Navigation */}
          <div className="flex w-[700px]">
            <button className="flex-1">
              <img
                src="/assets/images/button customer.webp "
                alt="Customer"
                className="w-[135px] h-[35px] cursor-pointer transform transition duration-200 hover:scale-105"
               
              />
            </button>
            <button className="flex-1">
              <img
                src="/assets/images/button company.webp"
                alt="Company"
                className="w-[135px] h-[35px] cursor-pointer transform transition duration-200 hover:scale-105"
               
              />
            </button>
            <button className="flex-1">
              <img
                src="/assets/images/button business.webp"
                alt="Business"
                className="w-[135px] h-[35px] cursor-pointer transform transition duration-200 hover:scale-105"
               
              />
            </button>
            <button className="flex-1">
              <img
                src="/assets/images/button personal.webp"
                alt="Personal"
                className="w-[135px] h-[35px]  cursor-pointer transform transition duration-200 hover:scale-105"
             
              />
            </button>
            <button className="flex-1">
              <img
                src="/assets/images/button privat.webp"
                alt="Private"
                className="w-[140px] h-[35px] cursor-pointer transform transition duration-200 hover:scale-105"
                
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default CallBackList;
