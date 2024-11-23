import React from 'react';

const HandyManPage = () => {
  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover"
    style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}>
      {/* Content Wrapper */}
      <div className="relative flex flex-col gap-4 md:gap-3 justify-center items-center">
        {/* Header Section */}
        <div className="flex justify-center items-center gap-3 mt-2">
          <div className="text-left">
            <h1 className="text-3xl mb-3 md:text-5xl font-extrabold w-full">
              <span className="text-pink-600">LES THE HANDYMAN</span>
            </h1>
          </div>
        </div>

        {/* Grid Section */}
        <div className="overflow-hidden flex flex-col w-full md:w-1/2 gap-2 items-center">
          <div className="grid grid-cols-3 gap-4 p-4">
            {/* Card 1 */}
            <div className="tooltip-container">
              <a
                className="flex justify-center items-center"
                href="VBEnd"
              >
                <img
                  className="w-48"
                  src="/assets/images/vh_demo.png"
                  alt="VirtualHouse"
                />
              </a>
            </div>

            {/* Card 2 */}
            <div className="tooltip-container">
              <a
                className="flex justify-center items-center"
                href="/"
              >
                <img className="w-36" src="/assets/images/lp.jpg" alt="VirtualHouse" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="tooltip-container">
              <a
                className="flex justify-center items-center"
                href="VirtualPage"
              >
                <img className="w-48" src="/assets/images/vh.png" alt="VirtualHouse" />
              </a>
            </div>

            {/* Card 4 */}
            <div className="tooltip-container">
              <a
                className="flex justify-center items-center"
                href="VBEnd"
              >
                <img
                  className="md:w-40 mt-4"
                  src="/assets/images/view.jpg"
                  alt="VirtualHouse"
                />
              </a>
            </div>

            {/* Card 5 */}
            <div className="tooltip-container">
              <a
                className="flex justify-center items-center"
                href="tel:+36212000494"
              >
                <img
                  className="w-28 rounded-full"
                  src="/assets/images/call.jpg"
                  alt="VirtualHouse"
                />
              </a>
            </div>

            {/* Card 6 */}
            <div className="tooltip-container">
              <a
                className="flex justify-center items-center"
                href="/"
              >
                <img
                  className="w-28 rounded-full"
                  src="/assets/images/log_out.png"
                  alt="VirtualHouse"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div
        className="text-center pt-1 w-full text-xl text-white font-bold"
        style={{
          textShadow:
            '2px 0px 0px rgb(0, 0, 0), 0px -1px 0px rgb(0, 0, 0), 0px 1px 0px rgb(0, 0, 0), -1px 0px 0px rgb(0, 0, 0)',
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario
        CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default HandyManPage;
