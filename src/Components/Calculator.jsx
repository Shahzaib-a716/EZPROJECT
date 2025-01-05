import React from "react";
const alertImages = [
  "/assets/images/siren 12.webp",
  "/assets/images/siren 13.webp",
  "/assets/images/siren 13.webp"
];

const ReminderForm = () => {
  return (
    <div
      className="max-w-6xl mx-auto p-4 border-2 rounded-lg shadow-lg"
      style={{
        backgroundColor: "#6B46C1", // Unified background color for the entire form
      }}
    >
      {/* Header Section */}
      <div className="bg-blue-700 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
        <h1 className="text-3xl font-extrabold">Reminder for Vehicle, Licence, Insurance, Passport ...</h1>
        <div className="flex items-center space-x-3">
          <img src="/assets/images/button plus.webp" alt="Zoom Out" className="w-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-10 h-12" />
          <img src="/assets/images/button minus.webp" alt="Zoom In" className="w-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-10 h-12" />
          <img src="/assets/images/button help.webp" alt="Help" className="w-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-10 h-12" />
        </div>
      </div>

      {/* Search Section */}
      <div className="my-2 w-full p-2 relative">
  <input
    type="text"
    placeholder="Search"
    className="w-[887px] p-2 pl-4 pr-12 border border-gray-400 rounded text-2xl font-bold"
  />
  <img
    src="/assets/images/search.webp"
    alt="Search Icon"
    className="absolute right-3 mr-[220px] top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 w-16 h-16"
  />
</div>

    
      {/* Main Content Section */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Section - Form Rows */}
        <div className="col-span-10 space-y-6 p-4 rounded-lg">
          {[1, 2, 3].map((row, index) => (
            <div key={row} className="grid grid-cols-12 items-center gap-4 p-4 rounded-lg">
              {/* Alert Icon - Dynamically rendered based on index */}
              <div className="col-span-1 flex justify-center">
                <img
                  src={alertImages[index]} // Using the index to select the correct image
                  alt="Alert Icon"
                  className="w-[200px] h-[80px] mt-11"
                />
              </div>

              {/* Input Fields */}
              <div className="col-span-11 space-y-2">
  {/* Row Header */}
  <div className="grid grid-cols-12 items-center gap-4">
    <div className="col-span-3 text-2xl font-bold text-black">
      <input
        id="passport"
        type="text"
        placeholder="Passport Number"
        className="w-full p-2 border border-gray-300 rounded text-2xl font-extrabold"
      />
    </div>
    <div className="col-span-3 text-2xl">
      <input
        id="passport-no"
        type="text"
        placeholder="Passport No."
        className="w-full p-2 border border-gray-300 rounded text-2xl font-extrabold"
      />
    </div>
    <div className="col-span-6">
      <input
        id="passport-expiry"
        type="text"
        placeholder="Expiry (MM/DD/YYYY)"
        className="w-full p-2 border border-gray-300 rounded text-2xl font-extrabold"
      />
    </div>
  </div>

  {/* Name and Country */}
  <div className="grid grid-cols-12 items-center gap-4">
    <div className="col-span-6">
      <input
        id="first-name"
        type="text"
        placeholder="First Name"
        className="w-full p-2 border border-gray-300 rounded text-2xl font-extrabold"
      />
    </div>
    <div className="col-span-6">
      <input
        id="country"
        type="text"
        placeholder=" Origin"
        className="w-full p-2 border border-gray-300 rounded text-2xl font-extrabold"
      />
    </div>
  </div>

  {/* Other Information */}
  <div>
    <input
      id="other-info"
      type="text"
      placeholder="Additional Information"
      className="w-full p-2 border border-gray-300 rounded text-2xl font-extrabold"
    />
  </div>
</div>

            </div>
          ))}
        </div>

        {/* Right Section - Additional Content */}
        <div className="col-span-2 p-4 rounded-lg">
          <div className="border-2 border-white h-[650px] p-4 flex flex-col items-center" style={{ backgroundColor: "#6B46C1" }}>
            {/* Approve Button */}
            <button
              onClick={() => alert('Approved!')}
              className="mt-4"
              aria-label="Approve"
            >
              <img
                src="/assets/images/button ok check.webp"
                alt="Approve"
                className="w-[100px] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-10 h-[100px]"
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
                className="w-[100px] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-10 h-[100px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderForm;
