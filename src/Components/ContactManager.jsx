import React from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate(); // Initialize navigate

 

  return (
    <div
    style={{
      backgroundImage: 'url("/assets/images/Background textures .webp")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh",
    }}
  >
    <div>
   {/* Top Header */}
<div
  className="bg-blue-400 text-white max-w-5xl mx-auto px-4 py-2 flex justify-between items-center rounded-t-lg"
  style={{
    backgroundImage: 'url("/assets/images/header-background.webp")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>
  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Contact Manager For Current Customer</h1>
  <div className="flex items-center space-x-2 md:space-x-3">
    <img
      src="/assets/images/button plus.webp"
      alt="Icon 1"
      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
    />
    <img
      src="/assets/images/button minus.webp"
      alt="Icon 2"
      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
    />
    <img
      src="/assets/images/button help purple.webp"
      alt="Icon 3"
      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
    />
  </div>
</div>

  <div
        className="max-w-5xl mx-auto p-4 rounded-lg shadow-md"
        style={{
          backgroundImage: 'url("/assets/images/background metal texture light blue.webp")',
        }}
      >
      {/* Main Container */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Section */}
        <div className="col-span-10 space-y-2">
          {/* Name Field */}
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 text-3xl font-bold text-center p-2 border border-gray-300 rounded"
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
                placeholder="(XXX)"
                className="w-full p-2 font-bold text-xl border border-gray-300 rounded"
              />
            </div>
            <div className="col-span-8 relative">
  <input
    type="text"
    placeholder="(XXX-XXXX)"
    className="w-full p-2 font-bold text-xl border border-gray-300 rounded pr-10" // Add padding-right for image space
  />
  <img
    src="/assets/images/button home phone black.webp" // Replace with your image path
    alt="Icon"
    className="absolute top-1/2 right-3 transform -translate-y-1/2 w-12 h-11" // Positioned inside input at the right center
  />
</div>

          </div>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1">
              <input
                type="text"
                placeholder="+36"
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
            <div className="col-span-8 relative">
  <input
    type="text"
    placeholder="(XXX-XXXX)"
    className="w-full p-2 font-bold text-xl border border-gray-300 rounded pr-10" // Add padding-right for image space
  />
  <img
    src="/assets/images/button mobile phone black.webp" // Replace with your image path
    alt="Icon"
    className="absolute top-1/2 right-3 transform -translate-y-1/2 w-12 h-11" // Positioned inside input at the right center
  />
</div>
          </div>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1">
              <input
                type="text"
                placeholder="+36"
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
            <div className="col-span-8 relative">
  <input
    type="text"
    placeholder="(XXX-XXXX)"
    className="w-full p-2 font-bold text-xl border border-gray-300 rounded pr-10" // Add padding-right for image space
  />
  <img
    src="/assets/images/button office phone black.webp" // Replace with your image path
    alt="Icon"
    className="absolute top-1/2 right-3 transform -translate-y-1/2 w-12 h-11" // Positioned inside input at the right center
  />
</div>

          </div>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1">
              <input
                type="text"
                placeholder="+36"
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
            <div className="col-span-8 relative">
  <input
    type="text"
    placeholder="(XXX-XXXX)"
    className="w-full p-2 font-bold text-xl border border-gray-300 rounded pr-10" // Add padding-right for image space
  />
  <img
    src="/assets/images/button voicemail phone black.webp" // Replace with your image path
    alt="Icon"
    className="absolute top-1/2 right-3 transform -translate-y-1/2 w-12 h-11" // Positioned inside input at the right center
  />
</div>
          </div>

          {/* Address Fields */}
          <div className="grid grid-cols-3 gap-4">
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
<div className="flex text-2xl font-bold space-x-4">
  <textarea
    placeholder="Wants"
    className="flex-1 w-11 p-4 h-32 border border-gray-300 rounded text-left resize-none"
  />

              
            
          </div>

        {/* Middle Section: Call Status and Call Tracking */}
<div className="grid grid-cols-3 gap-4 mb-4">
  {/* Left Section: Call Status */}
  <div className="col-span-2 border-2 border-white rounded p-4">
    <div className="mb-2 text-white text-2xl font-bold">Call Status</div>
    <div className="grid grid-cols-1 gap-4 mb-4">
      <label className="flex text-2xl font-bold items-center">
        <input type="radio" name="status" className="mr-2 transform scale-150 accent-orange-500 " /> Left Message on Machine
      </label>
      <label className="flex text-2xl font-bold items-center">
        <input type="radio" name="status" className="mr-2 transform scale-150 accent-orange-500" /> Left Message with Person
      </label>
      <label className="flex text-2xl font-bold items-center">
        <input type="radio" name="status" className="mr-2 transform scale-150 accent-orange-500" /> Busy
      </label>
      <label className="flex text-2xl font-bold items-center">
        <input type="radio" name="status" className="mr-2 transform scale-150 accent-orange-500" /> No Answer
      </label>
      <label className="flex text-2xl font-bold items-center">
        <input type="radio" name="status" className="mr-2 transform scale-150 accent-orange-500" /> Talking to Customer
      </label>
    </div>
    <div className="flex gap-4">
      
      <div className="flex-1 h-[180px]">
        <img
          src="/assets/images/text.webp"
          alt="Call Tracking Icon"
          className="w-full h-full object-cover border rounded"
        />
      </div>
    </div>

    </div>

           {/* Right Section: Call Tracking */}
<div className="border-2 border-white p-2 rounded relative">
  <div className="font-bold mb-2 text-white text-2xl">Call Tracking</div>
  <textarea className="w-full border border-gray-300 px-4 rounded h-16 mb-2"></textarea>
  
  <div className="absolute bottom-0 left-0 right-0 w-[250px] ml-2 h-[80px]">
    <img 
      src="/assets/images/button client check.webp" 
      alt="Call Tracking Icon" 
      className="w-full h-full object-cover rounded-b" 
    />
  </div>
</div>

          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-2 mr- border-2 border-white space-y-2">
         
          {/* Icons Section */}
          <div className="flex flex-col items-center space-y-8">
            <button className="mt-11 ">
              <img src="/assets/images/button send referal.webp" alt="Add" className="h-[110px] mt-11 w-[170px]" />
            </button>
            <button className=" mt-4 ">
              <img src="/assets/images/button delete custome callback list.webp" alt="Next" className="h-[110] w-[150] mt-11" />
            </button>
          </div>

          <button className="mt-4 ">
              <img src="/assets/images/button show any referals active.webp" alt="Add" className="h-[110px] w-[150px] mt-11" />
            </button>
            <button className=" mt-7 ">
              <img src="/assets/images/button next call.webp" alt="Next" className="mt-11 h-[110] w-[120]" />
            </button>
          
  
            </div>
         
            </div>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;
