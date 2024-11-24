import React from 'react';

const VideoReferences = () => {
  // Video data array for mapping
  const videoData = [
    {
      title: 'LES THE HANDYMAN REFERENCE FROM THE SECRETARY TO THE QUEEN OF ENGLAND IN 2012 IN CANADA',
      src: 'https://www.youtube.com/embed/gB3hJl1bS2Y?si=fWaNrDU2TWpV3Y6N',
    },
    {
      title: 'From the Queen of Englands Secretary',
      src: 'https://www.youtube.com/embed/_K_2yHKQaVE?si=IHVSmLAs-Fn-llDs',
    },
    {
      title: 'SOMETIMES THE IMPOSSIBLE IS POSSIBLE.',
      src: 'https://www.youtube.com/embed/e94OI1y8Ly8?si=VQHfpWvMFhnkb50L',
    },
    {
      title: 'Les the Handyman Happy Customer 108',
      src: 'https://www.youtube.com/embed/4R46DoPY6Sw?si=5fbd382fARFSrvPd',
    },
    {
      title: 'Les the Handyman Happy References 094',
      src: 'https://www.youtube.com/embed/J87iPHVyNds?si=ZGj68wF_G9nbWY_s',
    },
    {
      title: 'Les the Handyman happy Reference 092',
      src: 'https://www.youtube.com/embed/FmrZP8H2wb0?si=C49WAE65_oSZMxq9',
    },
    {
      title: 'Les The Handyan Videos from 2008',
      src: 'https://www.youtube.com/embed/yQpio1wborY?si=AwaXYinWPpE919iE',
    },
    {
      title: 'Solar Trailer in 2007',
      src: 'https://www.youtube.com/embed/LLy-Ysw_g4Y?si=0quttrKncqEcInzj',
    },
  ];

  // Back button click handler
  const handleBackButtonClick = () => {
    window.history.back(); // This will navigate to the previous page
  };

  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}>
      {/* Header Section */}
      <div className="relative flex justify-center items-center bg-yellow-500 gap-1">
        <img
          className="left-0 w-16 top-0 absolute rounded-full cursor-pointer"
          src="/assets/images/button back.webp"
          alt="Back Button"
          onClick={handleBackButtonClick} // Attach the back button click handler
        />
        <div className="flex items-center">
          <img
            className="w-40 p-1 rounded-xl"
            src="/assets/images/Handyman0.png"
            alt="Les the Handyman"
          />
          <h1 className="text-5xl text-white font-extrabold">
            Les the Handyman
          </h1>
        </div>
        <img
          className="right-0 top-0 w-16 absolute rounded-full"
          src="/assets/images/button help.webp"
          alt="Help Button"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-9 md:gap-4">
        <h1 className="text-5xl text-center font-extrabold text-black bg-yellow-500">
          Video References
        </h1>

        {/* Video References */}
        {videoData.map((video, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-center"
          >
            <div className="bg-yellow-500 basis-1/3 flex items-center">
              <h1 className="text-center text-3xl font-bold  md:text-4xl p-3">
                {video.title}
              </h1>
            </div>
            <div className="basis-1/3 flex justify-center">
              <iframe
                width="560"
                height="315"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}

        {/* Footer Buttons */}
        <div className="flex justify-evenly text-center text-4xl">
          <a
            className="flex flex-col items-center justify-center"
            href="LesWork"
          >
            <img
              className="rounded-full w-28"
              src="assets/images/1.jpg"
              alt="What do I do?"
            />
            <h1 className="font-extrabold">What do I do?</h1>
          </a>
          <a
            className="flex flex-col items-center justify-center"
            href="Booking"
          >
            <img
              className="rounded-full w-28"
              src="/assets/images/3.jpg"
              alt="Book me in"
            />
            <h1 className="font-extrabold">Book me in</h1>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        className="text-center pt-1 w-full text-xl text-white font-bold"
        style={{
          textShadow:
            '2px 0px 0px rgb(0, 0, 0), 0px -1px 0px rgb(0, 0, 0), 0px 1px 0px rgb(0, 0, 0), -1px 0px 0px rgb(0, 0, 0)',
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default VideoReferences;
