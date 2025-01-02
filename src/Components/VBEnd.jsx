import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormVB1 from './FormVB1'; // Import your component here

const CustomLayout = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isFormVB1Visible, setIsFormVB1Visible] = useState(false); // State to control visibility of FormVB1

 
   const [openList, setOpenList] = useState(null);


  const navigate = useNavigate();

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second
    return () => clearInterval(timer); // Clean up the interval on unmount
  }, []);

  // Format the date
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long', // "Friday"
    year: 'numeric', // "2024"
    month: 'short',  // "Oct"
    day: 'numeric',  // "24"
  });

  // Format the time
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true, // Display 12-hour time with AM/PM
  });

  const toggleList = (listId) => {
    setOpenList((prev) => (prev === listId ? null : listId));

    
  };
  const handleIcon1Click = () => {
    setIsFormVB1Visible(true); 
  };


  return (
    <div
      className="min-h-screen flex flex-col items-center p-5"
      style={{
        backgroundImage: "url('/assets/images/background metal texture light blue.webp')", // Path to your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Logo and Title */}
      <div className="text-center mb-10">
        <img src="/assets/images/head logo.webp" alt="Logo" className="w-50 h-52 mx-auto" />
        <h1 className="text-black text-4xl font-bold">Trades Persons Perfect Business System</h1>
      </div>

      {/* New Icons Container */}
      <div className="flex">
        <img src="/assets/images/button top blank.webp" alt="Icon 9" className="w-17 h-16 " />
        <img src="/assets/images/button top blank.webp" alt="Icon 2" className="w-17 h-16" />
        <img src="/assets/images/button top blank.webp" alt="Icon 9" className="w-60 h-16" />
      </div>

      {/* Main Content Area */}
      <div className="relative h-[758px] w-[868px] p-4 border-4 border-gray-400">
        <img
          src="/assets/images/background.webp"
          alt="Your Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Left Side Icons */}
     {/* Left Side Icons */}
<div className="absolute left-[-65px] top-[-64px]">
  <img src="/assets/images/button left call.webp" className="w-16 transform transition duration-300 hover:scale-125 h-16" />
  
  <img
          src="/assets/images/button left 1.webp"
          alt="Icon 1"
          className="w-16 h-[260px] cursor-pointer transform transition duration-300 hover:scale-105"
          onClick={() => toggleList(1)}
        />
  
  {/* List appears vertically to the left of Icon 1 */}
  {openList === 1 && (
  <div className="absolute left-[-320px] top-[77px] w-[320px] p-3 rounded ">
    <h2 className="text-3xl bg-orange-400 text-white font-bold mb-3 text-center">
      Automatically
    </h2>
    <div className="flex gap-1">
      {/* Left Column with Light Gray Background */}
      <ul className="w-11 p-2 rounded-lg">
      <li className="hover:bg-purple-100 font-extrabold  text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         2
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         4
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         1
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         5
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         2
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
      0
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
       2
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         4
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         1
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
        5
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
       2
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
       0
       </li>
       {/* Add more items */}
      </ul>

      {/* Right Column with Light Purple Background */}
      <ul className="w-[300px] p-2 rounded-lg">
      <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         Webphone
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         E-mail
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         Voice Mail
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         Internal Message
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         Custom A
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
       Custom B
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
       Custom B
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         E-mail 2
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         Voice Mail 2
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
        ,
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
       Custom A
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
       Custom B
       </li>
       {/* Add more items */}
      </ul>
    </div>
   </div>
 )}
  

  
  <img
          src="/assets/images/button left 2.webp"
          alt="Icon 1"
          className="w-16 h-[240px] cursor-pointer transform transition duration-300 hover:scale-105"
          onClick={() => toggleList(2)}
        />
  
  {/* List appears vertically to the left of Icon 1 */}
  {openList === 2 && (
     <div className="absolute left-[-300px] top-[287px] w-[300px] p-3 rounded ">
     <h2 className="text-3xl bg-blue-900 text-white font-bold">
       Types
     </h2>
     <div className="flex">
       {/* Left Column with Light Gray Background */}
       <ul className="w-12 p-1 rounded-lg mt-2">
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-pink-500 rounded-lg cursor-pointer">
          0
        </li>
        <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-orange-500 rounded-lg cursor-pointer">
          8
        </li>
        <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-green-500 rounded-lg cursor-pointer">
          8
        </li>
        <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-blue-500 rounded-lg cursor-pointer">
          8
        </li>
        <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-blue-500 rounded-lg cursor-pointer">
          8
        </li>
       
       
        {/* Add more items */}
       </ul>
 
       {/* Right Column with Light Purple Background */}
       <ul className="w-[300px] p-1 rounded-lg mt-2">
      
        <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-pink-500 rounded-lg cursor-pointer">
          Coming Soon
        </li>
        <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-orange-500 rounded-lg cursor-pointer">
          Estimates
        </li>
        <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-green-500 rounded-lg cursor-pointer">
          Internal Referral
        </li>
        <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-blue-500 rounded-lg cursor-pointer">
        Custom
        </li>
        <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-blue-500 rounded-lg cursor-pointer">
        Custom
        </li>
        {/* Add more items */}
       </ul>
     </div>
    </div>
 )}

  
  <img
          src="/assets/images/button left 3.webp"
          alt="Icon 1"
          className="w-16 h-[256px] cursor-pointer transform transition duration-300 hover:scale-105"
          onClick={() => toggleList(3)}
        />
  
  {/* List appears vertically to the left of Icon 1 */}
  {openList === 3 && (
     <div className="absolute left-[-320px] top-[437px] w-[320px] p-3  rounded shadow-lg">
     <h2 className="text-xl bg-red-600 text-white font-bold mb-3">Booking Information</h2>
     <div className="flex ">
      {/* Left Column with Light Gray Background */}
      <ul className="w-[240px] p-2 ">
      <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-green-500 rounded-lg cursor-pointer">
         Version
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-yellow-300 rounded-lg cursor-pointer">
         How many
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-blue-500 rounded-lg cursor-pointer">
         Cost/year
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-blue-500 rounded-lg cursor-pointer">
         Cost/Day
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-pink-600 rounded-lg cursor-pointer">
         Currency
       </li>
       
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-red-600 rounded-lg cursor-pointer">
       Expiry
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-yellow-300 rounded-lg cursor-pointer">
       Method
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-yellow-300 rounded-lg cursor-pointer">
       Discount
       </li>
       {/* Add more items */}
      </ul>

      {/* Right Column with Light Purple Background */}
      <ul className="w-[250px] p-2 rounded-lg">
      <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         Family 5
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         6
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         25,000
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         68,50
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
         forint
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
      2016.10.25.
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
       Custom B
       </li>
       <li className="hover:bg-purple-100 font-extrabold text-xl px-1 mb-2 bg-gray-300 rounded-lg cursor-pointer">
       Custom B
       </li>
      
       {/* Add more items */}
      </ul>
    </div>
   </div>
 )}
  
          <img src="/assets/images/button search blue.webp" alt="Icon 3" className="w-17 transform transition duration-300 hover:scale-125 h-16" />
        </div>

        {/* Right Side Icons */}
        <div className="absolute right-[-65px] top-[-62px]">
          <button onClick={() => navigate('/home')}>
            <img src="/assets/images/button right call.webp" className="w-16 transform transition duration-300 hover:scale-125 h-16" />
            <img src="assets/images/button right pizza.webp" alt="Icon 4" className="w-16 h-32" />
          </button>
          <img src="/assets/images/button right countdown.webp" className="w-16 h-[155px] " />
          <img src="/assets/images/button right brain.webp" className="w-16 h-[156px]" />
          <img src="assets/images/button right training.webp" className="w-16 h-[155px]" />
          <img src="/assets/images/button right lawyer.webp" className="w-16 h-[156px]" />
          <img src="/assets/images/button help dark yellow.webp" className="w-16 transform transition duration-300 hover:scale-125 h-16" />
        </div>

        <div className="bg-black h-[520px] w-[815px] border-4 border-white relative">
        <img
          src="/assets/images/background.webp"
          alt="Your Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Conditionally render FormVB1 */}
        {isFormVB1Visible && (
          <div className="absolute top- left-1 bg-white shadow-md rounded-lg">
            <FormVB1 /> {/* This is your component */}
          </div>
        )}
      </div>
        {/* Date and Time */}
        <div className="relative text-black font-extrabold flex items-center  justify-center text-2xl text-bold mt-5">
          {`${formattedDate}, ${formattedTime}`}
        </div>

        {/* Bottom Icons */}
        <div className="relative grid grid-cols-8 gap-4 mt-5">
          {/* First row of icons */}
          <button onClick={handleIcon1Click}>
          <img
            src="/assets/images/button bottom 1.webp"
            alt="Icon 1"
            className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]"
          />
          </button>
          <img src="/assets/images/button2.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          <img src="/assets/images/button bottom 3.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          <img src="/assets/images/button bottom 4.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          <img src="/assets/images/button bottom 5.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          <img src="/assets/images/button bottom 6.webp" alt="Icon 9"className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          <img src="/assets/images/button bottom 7.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          <img src="/assets/images/button bottom 8.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          {/* Add other icons */}
        </div>

        <div className="relative grid grid-cols-8 gap-4 mt-3">
          {/* Second row of icons */}
          <img src="/assets/images/button bottom 9.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          <button onClick={() => navigate('/Calculator')}>
            <img
              src="/assets/images/button bottom 10.webp"
              alt="Icon 10"
              className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]"
            />
          </button>
          <img src="/assets/images/button bottom 11.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          <img src="/assets/images/button bottom 12.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          <img src="/assets/images/button bottom 13.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          <img src="/assets/images/button bottom 14.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          <img src="/assets/images/button bottom 15.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          <img src="/assets/images/button bottom 16.webp" alt="Icon 9" className="w-17 h-16 cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_10px_30px_rgba(128,0,128,0.8)]" />
          {/* Add other icons */}
        </div>
      </div>

    

      {/* Footer Icons - remains outside Main Content Area */}
      <div className="grid-cols-6 flex">
        {/* Footer row of icons */}
        <img
          src="/assets/images/button bottom setup.webp"
          alt="Icon 9"
          className="w-36 h-18 cursor-pointer hover:scale-105 transition-transform"
        />
        <img
          src="/assets/images/button bottom web.webp"
          alt="Icon 9"
          className="w-36 h-18 cursor-pointer hover:scale-105 transition-transform"
        />
        <img
          src="/assets/images/button bottom movie maker.webp"
          alt="Icon 9"
          className="w-36 h-18 cursor-pointer hover:scale-105 transition-transform"
        />
        <img
          src="/assets/images/button bottom graphic designer.webp"
          alt="Icon 9"
          className="w-36 h-18 cursor-pointer hover:scale-105 transition-transform"
        />
        <img
          src="/assets/images/button bottom parcel.webp"
          alt="Icon 9"
          className="w-36 h-18 cursor-pointer hover:scale-105 transition-transform"
        />
        <img
          src="/assets/images/bottom motorhome.webp"
          alt="Icon 9"
          className="w-36 h-18 cursor-pointer hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
};

export default CustomLayout;
