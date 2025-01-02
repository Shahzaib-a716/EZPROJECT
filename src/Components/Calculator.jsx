import React from "react";

const NewCustomerForm = () => {
  return (
    <div className=" max-w-4xl  mx-auto">
      {/* Header */}
      <div className="bg-green-700 text-white  px-4 py-2 flex justify-between items-center rounded-t-lg">
        <h1 className="text-2xl font-bold">New Business Record</h1>
        <div className="flex items-center space-x-3">
          <img
            src="/assets/images/button zoom out.webp"
            alt="Icon 1"
            className="w-12 h-12"
          />
          <img
             src="/assets/images/button zoom in.webp"
            alt="Icon 2"
            className="w-12 h-12"
          />
          <img
             src="/assets/images/button help purple.webp"
            alt="Icon 3"
            className="w-12 h-12"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex mt-2">
        {/* Form Section */}
        <div className="p-4 bg-green-700 flex-1">
          {/* Buttons Section */}
          <div className="grid grid-cols-2 gap-4">
          <div className="flex space-x-8 items-center">
  {/* Customer Section */}
  <div className="flex items-center space-x-4">
    {/* Customer Button */}
    <button className="bg-blue-500 text-white px-6 py-12 rounded">
      Customer
    </button>
    {/* Icons in Column */}
    <div className="flex flex-col space-y-">
      <img
        src="/assets/images/button green search big.webp"
        alt="Icon 1"
        className="w-8 h-8"
      />
      <img
        src="/assets/images/button green search .webp"
        alt="Icon 2"
        className="w-8 h-8"
      />
      <img
        src="/assets/images/button red search big.webp"
        alt="Icon 2"
        className="w-8 h-8"
      />
    </div>
  </div>

  {/* Family Company Section */}
  <div className="flex items-center space-x-4">
    {/* Family Company Button */}
    <button className="bg-orange-500 text-white px-6 py-9 rounded">
      Family Company
    </button>
    {/* Icons in Column */}
    <div className="flex flex-col space-y-2">
      <img
        src="/assets/images/button add message vertical.webp"
        alt="Icon 3"
        className="w-8 h-8"
      />
       <img
        src="/assets/images/button cancel vertical.webp"
        alt="Icon 3"
        className="w-8 h-8"
      />
      <img
        src="/assets/images/button edit mini.webp"
        alt="Icon 4"
        className="w-8 h-8"
      />
    </div>

                <label className="inline-flex items-center">
                  <input type="checkbox" className="ml-[200px] form-checkbox" />
                  <span className="ml-2 font-bold text-white">References?</span>
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
                  className="w-1/4  border border-gray-300 rounded px-3 py-2"
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
       {/* Check and Cross Section */}
<div className="flex flex-col justify-between bg-green-700 w-[160px] items-center py-4">
  {/* Rectangle Box */}
  <div className="border-2 border-white h-[650px]  p-4 flex flex-col items-center">
    {/* Approve Button */}
    <button
      onClick={() => alert('Approved!')}
      className="mt-4"
      aria-label="Approve"
    >
      <img
        src="/assets/images/button ok check.webp"
        alt="Approve"
        className="w-[100px] h-[100px]"
      />
    </button>

    {/* Reject Button */}
    <button
      onClick={() => alert('Rejected!')}
      className="mt-4"
      aria-label="Reject"
    >
      <img
        src="/assets/images/button cancel no.webp"
        alt="Reject"
        className="w-[100px] h-[100px]"
      />
    </button>
  </div>
  
</div>


      </div>
    </div>
  );
};

export default NewCustomerForm;