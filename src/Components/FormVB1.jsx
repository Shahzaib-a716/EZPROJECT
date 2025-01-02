import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const ContactForm = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [familyCompanyText, setFamilyCompanyText] = useState("Family Company");
  const [customerText, setCustomerText] = useState("Customer");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [editText, setEditText] = useState(""); // For editing Family Company text

   // Function to navigate to different pages based on button clicks
   const navigateToPage = (path) => {
    navigate(path);
  };

  // Handle green arrow click: move Family Company text to Customer
  const handleGreenIconClick = () => {
    setCustomerText(familyCompanyText); // Transfer Family Company text to Customer
  };

  // Handle edit button click: open modal with current Family Company text
  const handleEditClick = () => {
    setIsModalOpen(true); // Open modal
    setEditText(familyCompanyText); // Pre-fill modal input with current Family Company text
  };

  // Save the edited text from modal
  const handleSaveEdit = () => {
    setFamilyCompanyText(editText); // Update Family Company text
    setIsModalOpen(false); // Close modal
  };

  // Close modal without saving
  const handleCancelEdit = () => {
    setIsModalOpen(false); // Close modal
  };
  const handleExitClick = () => {
    // Navigate to the default view (replace "/" with your default path)
    navigate("/VBEnd");
  };

  return (
    <div className="w-[800px] h-[511x] mx-auto p-2 bg-cover bg-center  rounded-lg shadow-md"
    style={{
      backgroundImage: 'url("/assets/images/Background textures green1.webp")',
    }}
    
    >
      {/* Main Container */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Section */}
        <div className="col-span-10 w-[700px] space-y-1">
          {/* Name Field */}
          <div className="flex w-[656px] space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 w-[650px] ml-[70px] p-2 border text-xl font-bold border-gray-300 rounded"
            />
          </div>

          {/* Number Fields */}
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1">
              <input
                type="text"
                placeholder="1"
                className="w-full p-2 font-bold text-xl border border-gray-300 rounded"
              />
            </div>
            <div className="col-span-3">
              <input
                type="text"
                placeholder="(XX)"
                className="w-full p-2 font-bold text-xl border border-gray-300 rounded"
              />
            </div>
            <div className="col-span-8">
              <input
                type="text"
                placeholder="XXX-XXXX"
                className="w-[420px] p-2 font-bold text-xl border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1">
              <input
                type="text"
                placeholder="+36"
                className="w-full p-2 font-bold text-lg border border-gray-300 rounded"
              />
            </div>
            <div className="col-span-3">
              <input
                type="text"
                placeholder="(XX)"
                className="w-full p-2 font-bold text-xl border border-gray-300 rounded"
              />
            </div>
            <div className="col-span-8">
              <input
                type="text"
                placeholder="(XXX-XXXX)"
                className="w-[420px] p-2 font-bold text-xl border border-gray-300 rounded"
              />
            </div>
            </div>
            <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1">
              <input
                type="text"
                placeholder="+36"
                className="w-full p-2 font-bold text-lg  border border-gray-300 rounded"
              />
            </div>
            <div className="col-span-3">
              <input
                type="text"
                placeholder="(XX)"
                className="w-full p-2 font-bold text-xl border border-gray-300 rounded"
              />
            </div>
            <div className="col-span-8">
              <input
                type="text"
                placeholder="( XXX-XXXX )"
                className="w-[420px] p-2 font-bold text-xl border border-gray-300 rounded"
              />
            </div>
            </div>



          {/* Address Fields */}
          <div className="grid grid-cols-3 w-[656px] gap-4">
            <input
              type="text"
              placeholder="Street"
              className="p-2 border font-bold text-xl border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="City"
              className="p-2 border font-bold text-xl border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Country"
              className="p-2 border font-bold text-xl border-gray-300 rounded"
            />
          </div>

          {/* Wants Section */}
<div className="flex w-[656px] h-[120px] space-x-2">
  <input
    type="text"
    placeholder="Wants"
    className="flex-1 w-11 text-2xl font-bold p-10 border border-gray-300 rounded"
  />
   <div className="flex space-x-"> {/* Original structure */}
      {/* Customer Section */}
      <div className="flex items-center">
        {/* Customer Button */}
        <button className="bg-blue-400 font-bold text-2xl text-black px-6 py-10 border border-white rounded w-[150px] h-[120px] overflow-hidden">
          {customerText}
        </button>
        {/* Icons in Column */}
        <div className="flex flex-col">
          <img
            src="/assets/images/button green search big.webp"
            alt="Green Icon"
            className="w-[50px] h-[65px] mb-0 cursor-pointer transform transition duration-300 hover:scale-110"
            onClick={handleGreenIconClick} // Transfer text logic
          />
          <img
            src="/assets/images/button red search big.webp"
            alt="Red Icon"
            className="w-[50px] h-[65px] mt-0 transform transition duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* Family Company Section */}
      <div className="flex items-start">
        {/* Family Company Button */}
        <button
          className="bg-orange-500 text-black font-bold text-2xl px- py-7 border border-white rounded w-[150px] h-[120px] overflow-hidden"
        >
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
      </div>

      {/* Modal for editing Family Company */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-[300px]">
            <h2 className="text-lg font-bold mb-4">Edit Family Company Text</h2>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="p-2 border rounded w-full mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSaveEdit}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={handleCancelEdit}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>

{/* Other Matches Section */}
<div className="mt-8 p-2 w-[656px] h-[120px] bg-cover bg-center  shadow-md"
 style={{
  backgroundImage:
    'url("/assets/images/Background textures red.webp")',
}}

>
  <div className="w-full h-[100px] bg-white flex flex-col "
  >
    
    <div className="ml-3  w-[560px] h-[100px]">
  {["Les Bubik (416)-484-4611 (Work)", "Les Bubik (416)-484-4611 (Home)", "Leslie Bart (416)-484-4611 (Work)"].map(
    (text, idx) => (
      <p
        key={idx}
        className={`text-xl font-bold hover:underline cursor-pointer mb-2 ${
          idx === 0
            ? "text-purple-500"
            : idx === 1
            ? "text-blue-500"
            : "text-yellow-600"
        }`}
      >
        {text}
      </p>
    )
  )}

    </div>
  </div>
</div>





          </div>
        
       
       

        {/* Right Section */}
        <div className="col-span-2 mr-3 w-[120px] p-2 border-2 bg-cover bg-center border-white space-y-2"
         style={{
          backgroundImage: 'url("/assets/images/Background textures silver.webp")',
        }}
        >
          {/* Manually Heading */}
          <h3 className="text-lg font-bold text-center bg-pink-500 p- rounded">
            Manually
          </h3>

        {/* Icons Section */}
<div className="flex flex-col items-center space-y-">
  <button className="transform transition duration-300 hover:scale-110">
    <img src="/assets/images/button add message.webp" alt="Add" className="h-[90px] w-[150px]" />
  </button>
  <button
    onClick={() => navigateToPage('/CallList')}
    className="transform transition duration-300 hover:scale-110"
  >
    {/* Another page */}
    <img src="/assets/images/button next go.webp" alt="Next" className="h-[80px] w-[120px]" />
  </button>
</div>

{/* Buttons Section */}
<div className="flex flex-col space-y-">
  {/* Customer Button with Icon */}
  <button className="w-full rounded flex justify-center items-center transform transition duration-300 hover:scale-110">
    <img
      src="/assets/images/button customer.webp"
      alt="Customer"
      className="w-[180px] h-8"
    />
  </button>

  {/* Company Button with Icon */}
  <button className="transform transition duration-300 hover:scale-110">
    <img
      src="/assets/images/button company.webp"
      alt="Company"
      className="w-[180px] h-8"
    />
  </button>

  {/* Business Button with Icon */}
  <button className="w-full rounded flex justify-center items-center transform transition duration-300 hover:scale-110">
    <img
      src="/assets/images/button business.webp"
      alt="Business"
      className="w-[150px] h-8"
    />
  </button>
  {/* Personal Button with Icon */}
  <button className="w-full rounded flex justify-center mt-1 items-center transform transition duration-300 hover:scale-110">
    <img
      src="/assets/images/button personal.webp"
      alt="Personal"
      className="w-[150px] h-8"
    />
  </button>

  {/* Private Button with Icon */}
  <button className=" w-full rounded flex justify-center items-center transform transition duration-300 hover:scale-110">
    <img
      src="/assets/images/button privat.webp"
      alt="Private"
      className="w-[150px] h-8"
    />
  </button>
</div>


<div className="flex justify-center transform transition duration-300 hover:scale-110">
            <button onClick={handleExitClick}>
              <img
                src="/assets/images/button exit.webp"
                alt="Exit"
                className="w-[160px] h-[80px]"
              />
            </button>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
