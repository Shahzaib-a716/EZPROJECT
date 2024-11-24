import React from 'react';

const BeforeAfterPictures = () => {
  // Function to handle the back button click
  const handleBackButtonClick = () => {
    window.history.back(); // This will navigate to the previous page
  };

  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}>
      {/* Header Section */}
      <div className="relative flex justify-center items-center bg-green-500 gap-1">
        {/* Left Button */}
        <img
          className="left-0 w-16 top-0 absolute rounded-full"
          src="/assets/images/button back.webp"
          alt="Back Button"
          onClick={handleBackButtonClick} // Attach the back button handler
        />
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            className="w-40 p-1 rounded-xl"
            src="/assets/images/Handyman0.png"
            alt="Les the Handyman"
          />
          <h1 className="text-5xl text-white text-center font-extrabold">
            Les the Handyman
          </h1>
        </div>
        {/* Right Help Button */}
        <img
          className="right-0 top-0 w-16 absolute rounded-full"
          src="/assets/images/button help.webp"
          alt="Help Button"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-9 md:gap-4">
        <h1 className="text-5xl text-center font-extrabold text-black bg-green-500">
          BEFORE + AFTER PICTURES
        </h1>

        {/* Before and After Pictures */}
        {[
          {
            title: 'FINISHING BASEBOARD ALONG A WALL',
            image: '/assets/images/one.jpg',
          },
          {
            title: 'PUTTING A GATE BACK IN PLACE',
            image: '/assets/images/two.jpg',
          },
          {
            title: 'IKEA SYSTEM ASSEMBLED & INSTALLED',
            image: '/assets/images/three.jpg',
          },
          {
            title: 'CLEANED UP WIRES UNDERNEATH COMPUTER',
            image: '/assets/images/4.jpg',
          },
          {
            title: 'YARD CLEAN UP',
            image: '/assets/images/5.jpg',
          },
          {
            title: 'PUTTING CABINET DOORS BACK IN PLACE',
            image: '/assets/images/six.jpg',
          },
          {
            title: 'GARAGE CLEAN UP AND ORGANIZATION',
            image: '/assets/images/7.jpg',
          },
          {
            title: 'FIXING THE WINDOW SILL',
            image: '/assets/images/8.jpg',
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-center">
            <div className="bg-green-500 basis-1/3 flex justify-center items-center">
              <h1 className="text-center text-3xl font-bold md:text-4xl p-3">
                {item.title}
              </h1>
            </div>
            <div className="basis-1/2 shrink-0">
              <img className="w-full shrink-0" src={item.image} alt={item.title} />
            </div>
          </div>
        ))}

        {/* Video References and Book Me In Buttons */}
        <div className="flex justify-evenly text-center text-4xl">
          <a className="flex flex-col items-center justify-center" href="VideoReference">
            <img className="rounded-full w-28" src="/assets/images/2.jpg" alt="Video References" />
            <h1 className="font-extrabold">Video References</h1>
          </a>
          <a className="flex flex-col items-center justify-center" href="Booking">
            <img className="rounded-full w-28" src="/assets/images/3.jpg" alt="Book Me In" />
            <h1 className="font-extrabold">Book me in</h1>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pt-1 w-full text-4xl font-bold text-white font-bold" style={{
        textShadow: '2px 0px 0px rgb(0, 0, 0), 0px -1px 0px rgb(0, 0, 0), 0px 1px 0px rgb(0, 0, 0), -1px 0px 0px rgb(0, 0, 0)',
      }}>
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default BeforeAfterPictures;
