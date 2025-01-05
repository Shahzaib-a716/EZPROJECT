import React, { useState } from "react";

const NewCustomerForm = () => {
  const [familyCompanyText, setFamilyCompanyText] = useState("Family Company");
  const [customerText, setCustomerText] = useState("Customer");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editText, setEditText] = useState("");
  const [isOpen, setIsOpen] = useState(false); // To toggle dropdown visibility
  const [selectedOption, setSelectedOption] = useState('How did they find me?');
  const [workingHours, setWorkingHours] = useState("9:00 AM - 8:00 PM");
  const [breakTime, setBreakTime] = useState("12:00 PM - 1:00 PM");
  const [showWorkingHoursDropdown, setShowWorkingHoursDropdown] = useState(false);

  const workingHoursOptions = [
    { time: "9:00 AM - 5:00 PM", color: "bg-green-500" },
    { time: "10:00 AM - 6:00 PM", color: "bg-green-500" },
    { time: "11:00 AM - 7:00 PM", color: "bg-green-500" },
    { time: "12:00 PM - 8:00 PM", color: "bg-green-500" },
  ];

  const handleWorkingHoursRadioClick = () => {
    setShowWorkingHoursDropdown(!showWorkingHoursDropdown);
  };

  const handleWorkingHoursSelect = (time) => {
    setWorkingHours(time);
    setShowWorkingHoursDropdown(false); // Close the dropdown after selection
  };

  const options = ['Name 2', 'Name 3', 'Name 4'];

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Set selected option
    setIsOpen(false); // Close dropdown
  };

  const handleGreenIconClick = () => {
    setCustomerText(familyCompanyText);
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
    setEditText(familyCompanyText);
  };

  const handleSaveEdit = () => {
    setFamilyCompanyText(editText);
    setIsModalOpen(false);
  };

  const handleCancelEdit = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="max-w-5xl mx-auto bg-cover bg-center rounded-lg overflow-hidden"

      style={{
        backgroundImage: 'url("/assets/images/Background textures deep blue.webp")',
      }}

      
    >
      {/* Header */}
      <div className="bg-blue-500 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
        <h1 className="text-4xl font-bold">New Customer Record</h1>
        <div className="flex items-center space-x-3">
          <img
            src="/assets/images/button plus.webp"
            alt="Icon 1"
            className="w-12 h-12 transform transition duration-500 hover:scale-125"
          />
          <img
            src="/assets/images/button minus.webp"
            alt="Icon 2"
            className="w-12 h-12 transform transition duration-500 hover:scale-125"
          />
          <img
            src="/assets/images/button help purple.webp"
            alt="Icon 3"
            className="w-12 h-12 transform transition duration-500 hover:scale-125"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Section */}
        <div className="flex-1 p-4">
          {/* Buttons Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex space-x-8 items-center">
              {/* Customer Section */}
              <div className="flex items-center  space-x-4">
                {/* Customer Button */}
                <div className="flex items-center">
                  {/* Customer Button */}
                  <button className="bg-blue-500 text-black font-bold text-2xl px- py-7 border border-white rounded w-[240px] h-[120px] overflow-hidden">
                    {customerText}
                  </button>
                  {/* Icons in Column */}
                  <div className="flex flex-col">
                    <img
                      src="/assets/images/button green search big.webp"
                      alt="Green Icon"
                      className="w-[50px] h-[65px]  mb-0 cursor-pointer transform transition duration-300 hover:scale-110"
                      onClick={handleGreenIconClick} // Transfer text logic
                    />
                    <img
                      src="/assets/images/button red search big.webp"
                      alt="Red Icon"
                      className="w-[50px] h-[65px] mt-0 transform transition duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Family Company Section */}
              <div className="flex items-center space-x-4">
                {/* Family Company Button */}
                <button className="bg-orange-500 text-black font-bold text-2xl px- py- border border-white rounded w-[240px] h-[120px] overflow-hidden">
                  {familyCompanyText}
                </button>
                {/* Icons in Column */}
                <div className="flex flex-col">
                  <img
                    src="/assets/images/button add message vertical.webp"
                    alt="Add Message Icon"
                    className="w-12 h-10 transform transition duration-300 hover:scale-110"
                  />
                  <img
                    src="/assets/images/button cancel vertical.webp"
                    alt="Cancel Icon"
                    className="w-12 h-10 transform transition duration-300 hover:scale-110"
                  />
                  <img
                    src="/assets/images/button edit mini.webp"
                    alt="Edit Icon"
                    className="w-12 h-10 cursor-pointer transform transition duration-300 hover:scale-110"
                    onClick={handleEditClick} // Open modal on edit click
                  />
                </div>

                <div className="flex flex-col  ml-[170px] mb-[30px]">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded-3xl ml-[140px] bg-white text-blue-500 focus:outline-none"
                    />
                    <span className="ml-4 font-bold text-2xl text-white">
                      References?
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded-3xl ml-[140px] bg-white text-blue-500 focus:outline-none"
                    />
                    <span className="ml-4 font-bold text-2xl text-white">
                      Company?
                    </span>
                  </label>
                </div>

              </div>
            </div>
          </div>

          {/* Input Fields */}
          <div className="mt-4 space-y-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full border text-2xl font-bold text-center border-gray-300 rounded px-3 py-2"
            />

           {/* Phone Numbers */}
{[...Array(4)].map((_, index) => {
  // Array of image paths
  const images = [
    "/assets/images/button home phone black.webp", // Image for the 1st input
    "/assets/images/button mobile phone black.webp", // Image for the 2nd input
    "/assets/images/button office phone black.webp", // Image for the 3rd input
    "/assets/images/button voicemail phone black.webp", // Image for the 4th input
  ];

  return (
    <div key={index} className="flex space-x-2 items-center">
      {/* Input for country code */}
      <input
        type="text"
        placeholder="+36"
        className="w-1/4 border text-2xl text-center font-bold border-gray-300 rounded px-3 py-2"
      />

      {/* Input for area code */}
      <input
        type="text"
        placeholder="(XXX)"
        className="w-1/4 border text-2xl text-center font-bold border-gray-300 rounded px-3 py-2"
      />

      {/* Input for the main phone number */}
      <div className="relative w-1/2">
        <input
          type="text"
          placeholder="XXX-XXXX"
          className="w-full border text-2xl text-center font-bold border-gray-300 rounded px-3 py-2"
        />
        {/* Image specific to this field */}
        <img
          src={images[index]} // Dynamically selects an image from the array
          alt={`Icon for field ${index + 1}`}
          className="absolute top-1/2 transition duration-500 hover:scale-125 transform -translate-y-1/2 right-3 w-10 h-10"
        />
      </div>
    </div>
       );
      })}


            {/* Address Fields */}
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Province"
                className="border border-gray-300 text-center text-2xl font-bold rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 text-center text-2xl font-bold rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Country"
                className="border border-gray-300 text-center text-2xl font-bold rounded px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Apt. #"
                className="border border-gray-300 text-center text-2xl font-bold rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Entry Code"
                className="border border-gray-300 text-center text-2xl font-bold rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border border-gray-300 text-center text-2xl font-bold rounded px-3 py-2"
              />
            </div>

            <input
              type="email"
              placeholder="@"
              className="w-full border border-gray-300 text-center text-2xl font-bold rounded px-3 py-2"
            />
            {/* Working Hours and Break */}
            <div className="flex mt-4">
  <div className="flex flex-col space-x-11 items-center mb-3 mr-9">
    <div className="flex items-center space-x-4 mt-2">
      <input
        type="radio"
        id="working-hours"
        name="schedule"
        checked
        onClick={handleWorkingHoursRadioClick}
      />
      <label htmlFor="working-hours" className="text-white text-2xl font-bold">
        Working Hours
      </label>
    </div>
    <div className="text-green-500 bg-white font-bold px-[80px] text-2xl mt-2">
      {workingHours}
    </div>
  </div>

  <div className="flex flex-col items-center">
    <div className="flex items-center space-x-4 mt-2">
      <input type="radio" id="break-time" name="schedule" />
      <label htmlFor="break-time" className="text-white text-2xl font-bold">
        Break
      </label>
    </div>
    <div className="text-orange-500 px-[80px] font-bold text-xl bg-white mt-2">
      {breakTime}
    </div>
  </div>
</div>

{/* Dropdown for Working Hours */}
{showWorkingHoursDropdown && (
  <div className="absolute z-10  border rounded  mt-2 p-8">
  
    {/* Predefined Options */}
    {workingHoursOptions.map((option, index) => (
      <div
        key={index}
        
        className={`cursor-pointer p-2 space-y-5 font-bold text-2xl  rounded ${option.color} hover:bg-gray-300`}
        onClick={() => handleWorkingHoursSelect(option.time)}
      >
        {option.time}
      </div>
    ))}

    {/* Divider */}
    <hr className="my-2 border-gray-300" />

    {/* Manual Input */}
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Custom time (e.g., 8:00 AM - 4:00 PM)"
        className="border border-gray-300 rounded px-3 py-2 flex-1"
        onChange={(e) => setWorkingHours(e.target.value)}
        value={workingHours}
      />
      <button
        onClick={() => {
          setShowWorkingHoursDropdown(false); // Close dropdown
        }}
        className=" text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  </div>
)}

            
            <textarea
              placeholder="Wants"
              className="w-full border border-gray-300 text-center text-2xl font-bold rounded px-3 py-2"
            />
          </div>

          {/* Dropdown Section */}
          <div className="flex items-start mt-4 space-x-4">
            <img
              src="/assets/images/button google maps logo.webp"
              alt="Google Maps"
              className="w-[100px] h-[100px] transform transition duration-500 hover:scale-125"
            />
           <div className="flex flex-col space-y-4 flex-1">
           <div className="flex flex-col space-y-4 flex-1">
  {/* First Dropdown: No Arrow */}
  <select
    className="border bg-white border-gray-300 rounded text-gray-400 text-center text-2xl font-bold px-3"
    style={{
      appearance: 'none', // Hide default arrow
      WebkitAppearance: 'none',
      MozAppearance: 'none',
     // Remove background (optional)
    }}
  >
    <option>First Contact</option>
  </select>

  
  {/* Dropdown */}
  <select
    className="border border-gray-300 rounded text-gray-400 text-center text-2xl font-bold px-3 bg-white"
    style={{
      position: 'relative',
      overflow: 'visible',

    }}
  >
    {['How did they find me?', 'Name 2', 'Name 3', 'Name 4'].map((name, index) => (
      <option key={index}>{name}</option>
    ))}
  </select>

</div>


          </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[160px] flex flex-col justify-between items-center py-4 border-white">
          <div className="border-2 border-white h-[970px]  p-4 flex flex-col items-center">
            {/* Approve Button */}
            <button
              onClick={() => alert("Approved!")}
              className="mt-4"
              aria-label="Approve"
            >
              <img
                src="/assets/images/button ok check.webp"
                alt="Approve"
                className="w-[100px] h-[100px] transform transition duration-500 hover:scale-125"
              />
            </button>

            {/* Reject Button */}
            <button
              onClick={() => alert("Rejected!")}
              className="mt-4"
              aria-label="Reject"
            >
              <img
                src="/assets/images/button cancel no.webp"
                alt="Reject"
                className="w-[100px] h-[100px] transform transition duration-500 hover:scale-125"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomerForm;
