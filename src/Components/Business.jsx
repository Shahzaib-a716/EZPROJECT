import React from "react";

const NewCustomerForm = () => {
  return (
    <div className=" max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-green-700 text-white  px-4 py-2 flex justify-between items-center rounded-t-lg">
        <h1 className="text-2xl font-bold">New Business Record</h1>
        <div className="flex items-center space-x-3">
          <img
            src="path-to-icon1.png"
            alt="Icon 1"
            className="w-6 h-6"
          />
          <img
            src="path-to-icon2.png"
            alt="Icon 2"
            className="w-6 h-6"
          />
          <img
            src="path-to-icon3.png"
            alt="Icon 3"
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Form Section */}
        <div className="p-4 bg-white flex-1">
          {/* Buttons Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-3 py-2 rounded">Customer</button>
              <button className="bg-orange-500 text-white px-3 py-2 rounded">Family Company</button>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">References?</span>
                </label>
              </div>
            </div>
          </div>

          {/* Input Fields */}
          <div className="mt-4 space-y-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />

            {/* Phone Numbers */}
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  type="text"
                  placeholder="+36"
                  className="w-1/4 h-[30px] border border-gray-300 rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="(XXX)"
                  className="w-1/4 border border-gray-300 rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="XXX-XXXX"
                  className="w-1/2 border border-gray-300 rounded px-3 py-2"
                />
              </div>
            ))}

            {/* Address Fields */}
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Province"
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Country"
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Apt. #"
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Entry Code"
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <textarea
              placeholder="Wants"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Dropdown Section */}
          <div className="flex items-center mt-4 space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Google_Maps_icon_%282020%29.svg"
              alt="Google Maps"
              className="w-[50px] h-8"
            />
            <select className="border border-gray-300 rounded px-3 py-2 flex-1">
              <option>First Contact</option>
            </select>
            <select className="border border-gray-300 rounded px-3 py-2 ">
              <option>How did they find me?</option>
            </select>
            <select className="border border-gray-300 rounded px-3 ">
              <option>Client Comments</option>
            </select>
          </div>
        </div>

        {/* Check and Cross Section */}
        <div className="flex flex-col justify-between bg-white border-l border-black w-[140px] items-center py-4">
          <button className="bg-green-500 text-white p-4 mt-10 rounded-full shadow-lg border-2 border-white">
            ✔
          </button>
          <button className="bg-red-500 text-white p-4 rounded-full shadow-lg mb-11 border-2 border-white">
            ✘
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCustomerForm;