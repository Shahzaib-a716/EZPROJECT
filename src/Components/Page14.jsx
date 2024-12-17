import React, { useState, useEffect } from "react";

const CiscoPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll visibility for the "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover">
      {/* Gradient Background */}
      <div
        className="min-h-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgb(185, 0, 242) 0%, rgb(0, 106, 193) 100%)",
        }}
      >
        {/* Header Section */}
        <div className="flex justify-center items-center gap-4 p-1">
          <h1
            className="font-extrabold text-yellow-500 text-center text-2xl md:text-6xl"
            style={{
              fontWeight: 600,
              textShadow: "rgb(0, 0, 0) 0em 0.1em 0.1em",
            }}
          >
            The 50 Billion a year in Revenue U.S. company wanted to buy me out.
            Yes, Cisco! But instead, they screwed it up!
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Image Section */}
          <div className="col-span-1 px-4 flex flex-col justify-center items-center">
            <img
              src="https://hm.ez123.eu/img/Ez12/cisco/letter.jpg"
              alt="Cisco Letter"
            />
          </div>

          {/* Text Section */}
          <div className="col-span-2 flex flex-col justify-center items-center">
            <h1
              className="text-2xl p-4 md:text-2xl lg:text-3xl text-center flex items-center font-bold text-white"
              style={{
                fontWeight: 600,
                textShadow:
                  "rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px",
              }}
            >
              Later in life when my business was doing well, Cisco wanted to buy
              me out. They made me an offer I couldn’t refuse—flew to Europe to
              look at castles that I would take off the grid. But sometimes you
              have to sell your soul for money. Is it worth it? Is it worth for
              them to take your software and screw it up so completely that
              nobody will recognize it anymore? Does it matter if you have
              millions in your pocket? I walked away from a million-dollar deal
              because I was with people that wanted to completely screw my
              business and make me work for them for a lot of money and a place
              where I wanted to kill myself every day because I hated working
              with techies. In fact, I’ve hated working with techies ever since
              then, even developing the software that I’m developing today.
            </h1>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div
        className="text-center pt-1 w-full bg-slate-500 text-2xl text-white font-bold"
        style={{
          textShadow:
            "rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px",
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario
        CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
      </div>

      {/* Back to Top Button (Bottom-right) */}
      {showScrollButton && (
       <div
       className="fixed bottom-8 right-8 z-50 bg-blue-500 p-4 rounded-full cursor-pointer shadow-lg hover:bg-blue-600 transition transform hover:scale-110"
       onClick={scrollToTop}
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-12 h-10 text-white"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="4"
           d="M19 9l-7-7-7 7M12 2v14"
         />
       </svg>
     </div>
      )}

      {/* Back Button (Bottom-left) */}
      <div className="fixed bottom-8 left-8">
        <a href="/Proof" className="inline-block">
          <img
            src="/assets/images/button back.webp"
            alt="Go Back"
            className="w-[50px] h-[60px] md:w-[100px] md:h-[100px] hover:opacity-80 transition duration-300 transform hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
};

export default CiscoPage;
