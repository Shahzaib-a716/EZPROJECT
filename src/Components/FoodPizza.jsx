import React from "react";

const FoodCard = () => {
  return (
    <div className="flex flex-col items-center h-auto bg-green-200 relative">
      {/* Top Section */}
      <div className="absolute top-4 left-4 flex items-center">
        <img
          src="/assets/images/button right pizza.webp" // Replace with your image path
          alt="Pizza Icon"
          className="w-[120px] h-[120px] ml-[300px]"
        />
        <h1 className="text-6xl justify-center ml-[170px] mb-[100px] font-bold">FOOD</h1>
      </div>

      {/* First Hamburger Section */}
      <div className="w-[500px] mt-[100px] p-6 bg-white shadow-xl border-2 border-black rounded-3xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-6xl">1</span>
            <img
              src="/assets/images/bookme (57).webp" // Replace with your image path
              alt="Gear Icon"
              className="w-6 h-6"
            />
          </div>
          <h2 className="ml-11 text-3xl font-bold">HAMBURGER</h2>
          <img
            src="/path/to/burger-icon.png" // Replace with your image path
            alt="Burger Icon"
            className="w-12 h-12"
          />
        </div>
        <p className="text-gray-600 text-xl ml-[150px]">+XXX-XXX-XXXX</p>
        <ul className="mt-4 text-gray-800">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <li key={index} className="flex items-center mb-1">
                <div className="flex-grow border-b border-gray-400 mr-2"></div>
                <span>€</span>
              </li>
            ))}
        </ul>
      </div>

      {/* First Right Icons Section */}
      <div className="absolute mt-[70px] right-48 flex flex-col items-center space-y-8">
        <div className="text-center">
          <img
            src="/assets/images/bookme (55).webp" // Replace with your image path
            alt="Phone Icon"
            className="w-[180px] mt-11 h-[180px]"
          />
        </div>
        <div className="text-center">
          <img
            src="/assets/images/bookme (56).webp" // Replace with your image path
            alt="Truck Icon"
            className="w-[180px] mt-9 h-[180px]"
          />
        </div>
      </div>

      {/* First Decorative Green Dots */}
      <div className="mt-[10px] flex justify-center w-full">
        <div className="flex space-x-1">
          {Array(35)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 bg-green-700 rounded-full"
              ></div>
            ))}
        </div>
      </div>
        {/* Second Hamburger Section */}
        <div className="w-[500px] mt-[30px] p-6 bg-white shadow-xl border-2 border-black rounded-3xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-6xl">1</span>
            <img
              src="/assets/images/bookme (57).webp" // Replace with your image path
              alt="Gear Icon"
              className="w-6 h-6"
            />
          </div>
          <h2 className="ml-11 text-3xl font-bold">ASIAN FOOD</h2>
          <img
            src="/path/to/burger-icon.png" // Replace with your image path
            alt="Burger Icon"
            className="w-12 h-12"
          />
        </div>
        <p className="text-gray-600 text-xl ml-[150px]">+XXX-XXX-XXXX</p>
        <ul className="mt-4 text-gray-800">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <li key={index} className="flex items-center mb-1">
                <div className="flex-grow border-b border-gray-400 mr-2"></div>
                <span>€</span>
              </li>
            ))}
        </ul>
      </div>

      {/* Second Right Icons Section */}
      <div className="absolute mt-[580px] right-48 flex flex-col items-center space-y-8">
        <div className="text-center">
          <img
            src="/assets/images/bookme (55).webp" // Replace with your image path
            alt="Phone Icon"
            className="w-[180px] mt-11 h-[180px]"
          />
        </div>
        <div className="text-center">
          <img
            src="/assets/images/bookme (56).webp" // Replace with your image path
            alt="Truck Icon"
            className="w-[180px] mt-9 h-[180px]"
          />
        </div>
      </div>

      {/* Second Decorative Green Dots */}
      <div className="mt-[10px] flex justify-center w-full">
        <div className="flex space-x-1">
          {Array(35)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 bg-green-700 rounded-full"
              ></div>
            ))}
        </div>
        </div>

        
       
        
        {/* Second Hamburger Section */}
        <div className="w-[500px] mt-[30px] p-6 bg-white shadow-xl border-2 border-black rounded-3xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-6xl">1</span>
            <img
              src="/assets/images/bookme (57).webp" // Replace with your image path
              alt="Gear Icon"
              className="w-6 h-6"
            />
          </div>
          <h2 className="ml-11 text-3xl font-bold">TURKISH FOOD</h2>
          <img
            src="/path/to/burger-icon.png" // Replace with your image path
            alt="Burger Icon"
            className="w-12 h-12"
          />
        </div>
        <p className="text-gray-600 text-xl ml-[150px]">+XXX-XXX-XXXX</p>
        <ul className="mt-4 text-gray-800">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <li key={index} className="flex items-center mb-1">
                <div className="flex-grow border-b border-gray-400 mr-2"></div>
                <span>€</span>
              </li>
            ))}
        </ul>
      </div>

      {/* Second Right Icons Section */}
      <div className="absolute mt-[1100px] right-48 flex flex-col items-center space-y-8">
        <div className="text-center">
          <img
            src="/assets/images/bookme (55).webp" // Replace with your image path
            alt="Phone Icon"
            className="w-[180px] mt-11 h-[180px]"
          />
        </div>
        <div className="text-center">
          <img
            src="/assets/images/bookme (56).webp" // Replace with your image path
            alt="Truck Icon"
            className="w-[180px] mt-9 h-[180px]"
          />
        </div>
      </div>

      {/* Second Decorative Green Dots */}
      <div className="mt-[10px] flex justify-center w-full">
        <div className="flex space-x-1">
          {Array(35)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 bg-green-700 rounded-full"
              ></div>
            ))}
        </div>
        </div>

        

      {/* Second Hamburger Section */}
      <div className="w-[500px] mt-[30px] p-6 bg-white shadow-xl border-2 border-black rounded-3xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-6xl">1</span>
            <img
              src="/assets/images/bookme (57).webp" // Replace with your image path
              alt="Gear Icon"
              className="w-6 h-6"
            />
          </div>
          <h2 className="ml-11 text-3xl font-bold">ITALIAN FOOD</h2>
          <img
            src="/path/to/burger-icon.png" // Replace with your image path
            alt="Burger Icon"
            className="w-12 h-12"
          />
        </div>
        <p className="text-gray-600 text-xl ml-[150px]">+XXX-XXX-XXXX</p>
        <ul className="mt-4 text-gray-800">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <li key={index} className="flex items-center mb-1">
                <div className="flex-grow border-b border-gray-400 mr-2"></div>
                <span>€</span>
              </li>
            ))}
        </ul>
      </div>

      {/* Second Right Icons Section */}
      <div className="absolute mt-[1605px] right-48 flex flex-col items-center space-y-8">
        <div className="text-center">
          <img
            src="/assets/images/bookme (55).webp" // Replace with your image path
            alt="Phone Icon"
            className="w-[180px] mt-11 h-[180px]"
          />
        </div>
        <div className="text-center">
          <img
            src="/assets/images/bookme (56).webp" // Replace with your image path
            alt="Truck Icon"
            className="w-[180px] mt-9 h-[180px]"
          />
        </div>
      </div>

      {/* Second Decorative Green Dots */}
      <div className="mt-[10px] flex justify-center w-full">
        <div className="flex space-x-1">
          {Array(35)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 bg-green-700 rounded-full"
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
