import React from "react";

const VehicleDimensions = () => {
  return (
    <div className=" flex justify-center  bg-cover bg-centeritems-center h-screen"
    
    
    >
      <div className="relative w-full max-w-4xl p-4 bg-white border border-gray-300 shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold text-center text-purple-600 mb-6 uppercase">
          The Customer Needs to Know the Dimensions of Your Vehicle + The Weight
        </h1>
        {/* Vehicle Image */}
        <div className="relative flex justify-center mb-6">
          <img
            src="/assets/images/motorhome.webp"
            alt="Motorhome"
            className="w-2/3"
          />
          {/* Dimensions */}
          <div className="absolute top-0 left-10 text-purple-600 text-5xl font-bold">
            <span>1</span>
          </div>
          <div className="absolute bottom-10 right-10 text-purple-600 text-5xl font-bold">
            <span>3</span>
          </div>
          <div className="absolute bottom-32 left-28 text-purple-600 text-5xl font-bold">
            <span>2</span>
          </div>
        </div>
        {/* Input fields with lines */}
        <div className="space-y-4">
          {/* Line 1 */}
          <div className="flex items-center space-x-4">
            <span className="text-purple-600 text-3xl font-bold">1.</span>
            <div className="flex-grow border-b-4 border-purple-600"></div>
            <input
              type="text"
              className="w-[200px] border-4 border-purple-600 rounded-lg p-3 text-3xl font-bold focus:outline-none"
            />
          </div>
          {/* Line 2 */}
          <div className="flex items-center space-x-4">
            <span className="text-purple-600  text-3xl  font-bold">2.</span>
            <div className="flex-grow border-b-4 border-purple-600"></div>
            <input
              type="text"
              className="w-[200px] border-4 border-purple-600 rounded-lg p-3 text-3xl font-bold focus:outline-none"
            />
          </div>
          {/* Line 3 */}
          <div className="flex items-center space-x-4">
            <span className="text-purple-600 text-3xl font-bold">3.</span>
            <div className="flex-grow border-b-4 border-purple-600"></div>
            <input
              type="text"
              className="w-[200px] border-4 border-purple-600 rounded-lg p-3 text-3xl font-bold focus:outline-none"
            />
          </div>
        </div>
        {/* Weight selection */}
        <div className="flex justify-end mt-4">
          <label className="flex items-center text-purple-600 text-3xl font-bold space-x-2">
            <input
              type="radio"
              name="weight"
              value="kg"
              className="text-green-500"
            />
            <span>Kg.</span>
          </label>
          <label className="flex items-center text-purple-600 text-3xl font-bold space-x-2 ml-4">
            <input
              type="radio"
              name="weight"
              value="lbs"
              className="text-green-500"
            />
            <span>lbs.</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default VehicleDimensions;
