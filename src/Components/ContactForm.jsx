import React from "react";

const ContactManager = () => {
  return (
    <div className="bg-blue-100 p-2 rounded-lg max-w-lg mx-auto shadow-md">
      {/* Header */}
      <div className="bg-blue-400 text-white text-center font-bold text-sm py-1 rounded">
        Contact Manager
      </div>

      {/* Form Section */}
      <div className="mt-2 w-full grid grid-cols-5 gap-2">
        {/* Left Side - Contact Information */}
        <div className="col-span-3">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-semibold text-xs mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-1 text-xs"
            />
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-4 gap-1 mt-2">
            {[1, 2, 3].map((item) => (
              <React.Fragment key={item}>
                <input
                  type="text"
                  placeholder="+36"
                  className="border border-gray-300 p-1 rounded text-xs"
                />
                <input
                  type="text"
                  placeholder="(XX)"
                  className="border border-gray-300 p-1 rounded text-xs"
                />
                <input
                  type="text"
                  placeholder="(XXX-XXXX)"
                  className="col-span-2 border border-gray-300 p-1 rounded text-xs"
                />
              </React.Fragment>
            ))}
          </div>

          {/* Street and City */}
          <div className="grid grid-cols-4 gap-2 mt-2">
            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold text-xs mb-1">Street</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-1 text-xs"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold text-xs mb-1">City</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-1 text-xs"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold text-xs mb-1">Country</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-1 text-xs"
              />
            </div>
          </div>

          {/* Wants Input */}
          <div className="mt-2">
            <label className="block text-gray-700 font-semibold text-xs mb-1">Wants</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-1 text-xs"
            />
          </div>
        </div>

        {/* Right Side - Button Section */}
        <div className="col-span-2 border border-white rounded p-2">
          <div className="space-y-1">
            <button className="bg-blue-500 text-white w-full py-1 text-xs rounded shadow">
              Send Referral
            </button>
            <button className="bg-gray-500 text-white w-full py-1 text-xs rounded shadow">
              Delete Customer Callback
            </button>
            <button className="bg-blue-500 text-white w-full py-1 text-xs rounded shadow">
              Show Referrals
            </button>
            <button className="bg-blue-500 text-white w-full py-1 text-xs rounded shadow">
              Next Call
            </button>
          </div>
        </div>
      </div>

      {/* Status and Call Tracking Section */}
      <div className="mt-2 grid grid-cols-5 gap-2">
        {/* Status Section */}
        <div className="col-span-2 border border-white rounded p-2">
          <div className="text-gray-700 font-semibold text-xs mb-1">Status</div>
          <ul className="space-y-1">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-1"></div>
              <span className="text-xs">Left Message on Machine</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-1"></div>
              <span className="text-xs">Left Message with Person</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-1"></div>
              <span className="text-xs">Busy</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-1"></div>
              <span className="text-xs">No Answer</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-white border border-gray-500 rounded-full mr-1"></div>
              <span className="text-xs">Talking to Customer</span>
            </li>
          </ul>
          {/* Image Section */}
          <div className="mt-2">
            <img
              src="https://via.placeholder.com/100"
              alt="Keyboard"
              className="w-full rounded"
            />
          </div>
        </div>

        {/* Call Tracking Section */}
        <div className="col-span-3 border border-white rounded p-2">
          <div className="text-gray-700 font-semibold text-xs mb-1">Call Tracking</div>
          <input
            type="text"
            placeholder="Find it"
            className="w-full border border-gray-300 rounded p-1 text-xs"
          />
          <div className="mt-2 grid grid-cols-2 gap-1">
            <button className="bg-gray-300 p-1 rounded">
              <img
                src="https://via.placeholder.com/20"
                alt="Icon A"
                className="mx-auto"
              />
            </button>
            <button className="bg-gray-300 p-1 rounded">
              <img
                src="https://via.placeholder.com/20"
                alt="Icon B"
                className="mx-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactManager;
