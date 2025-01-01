import React from "react";
import { useNavigate } from "react-router-dom";



const ContactForm = () => {
  const navigate = useNavigate(); // Initialize navigate

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
  <div className="flex space-x-">  {/* Change to flex row layout */}
    {/* Customer Section */}
    <div className="flex  items-center">
      {/* Customer Button */}
      <button className="bg-blue-400 font-bold text-2xl text-black px-6 py-10 border border-white rounded">
        Customer
      </button>
      {/* Icons in Column */}
      <div className="flex flex-col">
  <img
    src="/assets/images/button green search big.webp"
    alt="Icon 1"
    className="w-[50px] h-[65px] mb-0"  // Ensure there's no margin between icons
  />
  <img
    src="/assets/images/button red search big.webp"
    alt="Icon 2"
    className="w-[50px] h-[65px] mt-0"  // Ensure there's no margin between icons
  />
</div>

    </div>

    {/* Family Company Section */}
    <div className="flex  items-start">
      {/* Family Company Button */}
      <button className="bg-orange-500 text-black font-bold text-2xl px- py-7 flex items-start border border-white rounded">
  Family<br />Company
</button>

      {/* Icons in Column */}
      <div className="flex flex-col ">
        <img
          src="/assets/images/button add message vertical.webp"
          alt="Icon 3"
          className="w-12 h-10"
        />
        <img
          src="/assets/images/button cancel vertical.webp"
          alt="Icon 3"
          className="w-12 h-10"
        />
        <img
          src="/assets/images/button edit mini.webp"
          alt="Icon 4"
          className="w-12 h-10"
        />
      </div>
    </div>
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
            <button className=" ">
              <img src="/assets/images/button add message.webp" alt="Add" className="h-[90px] w-[150px]" />
            </button>
            <button className="  ">
              <img src="/assets/images/button next go.webp" alt="Next" className="h-[80] w-[120" />
            </button>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col space-y">
  {/* Customer Button with Icon */}
  <button className="w-full rounded flex justify-center items-center">
    <img
      src="/assets/images/button customer.webp"
      alt="Customer"
      className="w-[180px] h-8 "
    />

  </button>

  {/* Company Button with Icon */}
  <button className="">
    <img
      src="/assets/images/button company.webp"
      className="w-[180px] h-8"
    />
  </button>

  {/* Business Button with Icon */}
  <button className=" w-full rounded flex justify-center items-center">
    <img
      src="/assets/images/button business.webp"
      alt="Business"
      className="w-[150px] h-8"
    />

  </button>

  {/* Personal Button with Icon */}
  <button className="w-full rounded flex justify-center items-center">
    <img
      src="/assets/images/button personal.webp"
      alt="Personal"
      className="w-[150px] h-8"
    />
  </button>

  {/* Private Button with Icon */}
  <button className=" w-full rounded flex justify-center items-center">
    <img
      src="/assets/images/button privat.webp"
      alt="Private"
      className="w-[150px] h-8"
    />
  </button>
</div>


<div className="flex justify-center">
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
