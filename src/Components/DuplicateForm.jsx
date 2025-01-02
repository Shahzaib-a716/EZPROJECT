import React, { useState } from "react";

const MatchForm = () => {
  const [zoomLevel, setZoomLevel] = useState(1); // Default zoom level

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2)); // Minimum zoom level is 0.5
  };

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Maximum zoom level is 2
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          'url("/assets/images/Background textures green1.webp")',
      }}
    >
      {/* Top Header */}
      <div className="flex justify-center ">
        <div className="bg-blue-400 text-white w-[80%] px-4 py-2 flex justify-between items-center rounded-t-lg">
          <h1 className="text-2xl font-bold">Matches have beeen found <span className="text-yellow-300 text-4xl">:Bart</span></h1>
          <div className="flex items-center space-x-3">
            {/* Zoom Minus (Zoom Out) Icon */}
            <img
              src="/assets/images/button plus.webp"
              alt="Zoom Out"
              className="w-12 h-12 cursor-pointer"
              onClick={zoomOut}
            />
            {/* Zoom Plus (Zoom In) Icon */}
            <img
              src="/assets/images/button minus.webp"
              alt="Zoom In"
              className="w-12 h-12 cursor-pointer"
              onClick={zoomIn}
            />
            <img
              src="/assets/images/button help purple.webp"
              alt="Help"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex justify-center mt-2"
        style={{
          transform: `scale(${zoomLevel})`, // Apply zoom level
          transformOrigin: "top center", // Adjust zoom origin
        }}
      >
        <div
          className="bg-cover bg-center shadow-lg rounded-lg w-[80%] h-[80%] p-5 relative"
          style={{
            backgroundImage:
              'url("/assets/images/background metal texture.webp")',
          }}
        >
          <div className="flex gap-4 relative">
            {/* Left Section */}
            <div
              className="w-[400px] border-2 border-white p-4 mt-2 mb-2 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("/assets/images/Background textures indigo blue.webp")',
              }}
            >
              <h2 className="text-blue-900 mb-2 font-extrabold text-5xl flex justify-center mt-2">
                ORIGINAL
              </h2>
              <div className="space-y-2">
                {[
                  "Salutation",
                  "Name",
                  "Company",
                  "Search Phrase",
                  "Home",
                  "Pager",
                  "Work",
                  "Mobile",
                  "Address",
                ].map((placeholder) => (
                  <div className="flex flex-col" key={placeholder}>
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="border border-gray-300 rounded text-2xl font-bold text-gray-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="w-[400px] border-2 border-white bg-yellow-200 p-4 mt-2 mb-2">
              <h2 className="text-green-700 mb-2 font-extrabold text-5xl mt-2 flex justify-center whitespace-nowrap">
                NEW MATCH
              </h2>
              <div className="space-y-2">
                {[
                  "Salutation",
                  "Name",
                  "Company",
                  "Search Phrase",
                  "Home",
                  "Pager",
                  "Work",
                  "Mobile",
                  "Address",
                ].map((placeholder) => (
                  <div className="flex flex-col" key={placeholder}>
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="border border-gray-300 rounded text-2xl font-bold text-gray-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Icon Section */}
            <div
              className="absolute top-0 right-0 h-[720px] w-[190px] border-2 border-white space-y-2"
              style={{ transform: "translateY(11px)" }}
            >
              <h1 className="font-bold flex mt-6 justify-center text-4xl">
                Select
              </h1>
              <h1 className="font-bold flex justify-center text-4xl">Below</h1>
              <div className="flex flex-col items-center space-y-8">
                <button>
                  <img
                    src="/assets/images/button add message.webp"
                    alt="Add"
                    className="h-[130px] w-[180px]"
                  />
                </button>
                <button>
                  <img
                    src="/assets/images/button ignore new.webp"
                    alt="Next"
                    className="h-[130px] w-[180px]"
                  />
                </button>
              </div>
              <button>
                <img
                  src="/assets/images/button combine them both.webp"
                  alt="Combine"
                  className="h-[130px] w-[140px] ml-6 mt-2"
                />
              </button>
              <button className="mt-7">
                <img
                  src="/assets/images/button cancel vertical.webp"
                  alt="Cancel"
                  className="mt-2 h-[130px] w-[140px] ml-6"
                />
              </button>
            </div>
          </div>

          {/* Other Matches Section */}
          <div className="mt-4 flex space-x-4">
            {/* First Box */}
            <div
              className="w-[572px] h-[230px] bg-cover bg-center flex flex-col justify-between"
              style={{
                backgroundImage:
                  'url("/assets/images/Background textures red.webp")',
              }}
            >
              <h3 className="text-black font-bold text-4xl">
                Other matches found
              </h3>
              <div className="ml-3 w-[540px]">
                {[
                  "Les Bubik (416)-484-4611",
                  "Les Bubik (416)-484-4611",
                  "Leslie Bart (416)-484-4611",
                ].map((text, idx) => (
                  <p
                    key={idx}
                    className="text-blue-500 bg-white text-3xl font-bold hover:underline cursor-pointer"
                  >
                    {text}
                  </p>
                ))}
              </div>

              {/* Row of Icon Buttons */}
              <div className="flex w-full mb-2">
                {[
                  "button customer.webp",
                  "button company.webp",
                  "button business.webp",
                  "button personal.webp",
                  "button privat.webp",
                ].map((icon, idx) => (
                  <button key={idx} className="flex">
                    <img
                      src={`/assets/images/${icon}`}
                      alt={`Icon ${idx + 1}`}
                      className="w-[105px] ml-1 h-[35px]"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Second Box */}
            <div
              className="w-[225px] h-[230px] bg-cover bg-center p-4"
              style={{
                backgroundImage:
                  'url("/assets/images/Background textures orange.webp")',
              }}
            >
              <h3 className="text-black font-bold mt-4 mb-8 text-3xl">
                What to do with the NEW MATCH?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchForm;
