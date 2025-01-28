import React from "react";

const BusinessSystemUI = () => {
  return (
    <div
      className="w-full min-h-screen p-2 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/assets/images/setup background.webp")',
      }}
    >
      {/* Top Buttons */}
      <div className="max-w-6xl mx-auto border-gray-300 p-2">
        <div className="flex mb-4">
          <button className="flex items-center justify-center">
            <img
              src="/assets/images/setup company button backgound.webp"
              alt="Company Button"
              className="w-[220px] h-[60px] "
            />
          </button>
          <button className="flex items-center justify-center">
            <img
              src="/assets/images/setup owners button backgound.webp"
              alt="Owners Icon"
              className="w-[220px] h-[60px]"
            />
          </button>
          <button className="flex items-center justify-center">
            <img
              src="/assets/images/setup financial button backgound.webp"
              alt="Financial Icon"
              className="w-[220px] h-[60px] shadow-[0_20px_20px_rgba(255,0,150,0.6),0_4px_10px_rgba(0,255,255,0.4)]"
            />
          </button>
          <button className="flex items-center justify-center">
            <img
              src="/assets/images/setup systems button backgound.webp"
              alt="Systems Icon"
              className="w-[220px] h-[60px]"
            />
          </button>
          <button className="flex items-center justify-center">
            <img
              src="/assets/images/setup break time button backgound.webp"
              alt="Breaktime Icon"
              className="w-[220px] h-[60px]"
            />
          </button>
        </div>
        </div>
      {/* Main Content */}
      <div className=" max-w-6xl ml-[100px] p-6">
        {/* Form Row 1 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block  text-3xl font-bold mb-1">Your Company Name is</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your company name"
            />
          </div>
          <div>
            <label className="block font-bold mb-1">
              Enter your last balance and the date for it
            </label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Month"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Day"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Year"
                className="p-2 border rounded-md"
              />
            </div>
            <label className="block font-bold mt-4">
              Enter what your company does
            </label>
          </div>
        </div>

        {/* Form Row 2 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-bold mb-1">
              When did you start your Company?
            </label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Month"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Day"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Year"
                className="p-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Estimate Section */}
        <div className="mb-4">
          <h2 className="font-bold mb-2">
            Estimate Set-up for the Perfect Business System
          </h2>
          <div className="border rounded-md p-2 bg-white">
            <ul className="list-none">
              <li className="flex justify-between">
                <span>Buggs Bunny Cart</span>
                <span>$236.00</span>
              </li>
              <li className="flex justify-between">
                <span>Daffy Duck hunting signs</span>
                <span>$150.00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Specials Section */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-bold mb-1">Do you charge for your time plus materials?</label>
            <div className="flex items-center gap-4">
              <label>
                <input type="radio" name="charge" /> Yes
              </label>
              <label>
                <input type="radio" name="charge" /> No
              </label>
            </div>
          </div>
          <div>
            <label className="font-bold">Starting Estimate Number:</label>
            <input
              type="text"
              className="w-24 p-2 border rounded-md"
              defaultValue="0001"
            />
          </div>
        </div>

        {/* Action Buttons */}
        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button className="  p-2 rounded-md">
            <img src="/assets/images/button help purple.webp" alt="" className="h-[100px] w-[100px]" />
          </button>
          <button className=" p-2 rounded-md">
            <img src="/assets/images/button cancel no.webp" alt="" className="h-[100px] w-[100px]" />
          </button>
          <button className=" p-2 rounded-md">
            <img src="/assets/images/button next.webp" alt="" className="h-[100px] w-[100px]" />
          </button>
          <button className=" p-2 rounded-md">
            <img src="/assets/images/button ok check.webp" alt="" className="h-[100px] w-[100px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSystemUI;
