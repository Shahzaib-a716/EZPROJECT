import React from "react";

const CiscoPage = () => {
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
            <img src="/img/Ez12/cisco/letter.jpg" alt="Cisco Letter" />
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

            {/* Back Button */}
            <div className="flex justify-center">
              <img
                className="w-20 rounded-full transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
                src="/img/btn/back.jpg"
                alt="Back"
              />
            </div>
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
    </div>
  );
};

export default CiscoPage;
