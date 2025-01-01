import React from 'react';

const ProofPage = () => {
  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover">
      {/* Background and Audio */}
      <div
        className="flex justify-center items-center px-24"
        style={{ backgroundColor: 'rgba(125, 163, 193, 0.98)' }}
      >
        <audio id="old_song" src="/audio/original-handyman-song.mp3" autoPlay />
        <img
          className="pt-7 md:pt-10"
          src="/assets/images/bookmeinnet.png"
          alt=""
        />
      </div>

      {/* Main Content */}
      <div
        className="w-full min-h-screen flex flex-col justify-start items-center pt-10"
        style={{ backgroundColor: 'rgba(125, 163, 193, 0.98)' }}
      >
        {/* Back Button */}
        <a href="/Proof">
          <img
            className="w-20 absolute top-2 left-0 rounded-full transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
            src="/assets/images/button back.webp"
            alt="Back"
          />
        </a>

        {/* Links Section */}
        <div className="w-full md:w-1/2 flex">
          <div className="basis-32">
            <a
              className="flex justify-center flex-col mb-4 items-center w-full"
              href="https://proof.ez123.eu/Before-And-After-Picture/"
            >
              <h1 className="flex justify-center text-white text-6xl py-0.5 rounded-full font-bold hover:bg-slate-200 hover:text-black w-full">1</h1>
            </a>
            <a
              className="flex justify-center flex-col mb-4 items-center w-full"
              href="/Les1"
            >
              <h1 className="flex justify-center text-white text-6xl py-0.5 rounded-full font-bold hover:bg-slate-200 hover:text-black w-full">2</h1>
            </a>
            <a
              className="flex justify-center flex-col mb-4 items-center w-full"
              href="/Les3"
            >
              <h1 className="flex justify-center text-white text-6xl py-0.5 rounded-full font-bold hover:bg-slate-200 hover:text-black w-full">3</h1>
            </a>
          </div>

          {/* Contact Info */}
          <div className="w-full flex justify-start">
            <div className="w-full flex flex-col justify-start items-center gap-4">
              <img
                className=""
                src="/assets/images/HANDYMAN.png"
                alt=""
              />
              <div className="text-center text-3xl md:text-4xl font-extrabold">
                <h1>
                  <span className="text-gray-600">(416) </span>484-4611
                </h1>
                <h1>
                  <span className="text-orange-600">Les</span>
                  <span className="text-red-600">The</span>
                  <span className="text-green-700">Handyman</span>
                </h1>
                <h1 className="text-red-600">Get’s things done!</h1>
              </div>
            </div>
          </div>

          {/* Additional Links Section */}
          <div className="basis-32">
            <a
              className="flex justify-center flex-col mb-4 items-center w-full"
              href="/Les4"
            >
              <h1 className="flex justify-center text-white text-6xl py-0.5 rounded-full font-bold hover:bg-slate-200 hover:text-black w-full">4</h1>
            </a>
            <a
              className="flex justify-center flex-col mb-4 items-center w-full"
              href="https://proof.ez123.eu/coming-soon/"
            >
              <h1 className="flex justify-center text-white text-6xl py-0.5 rounded-full font-bold hover:bg-slate-200 hover:text-black w-full">5</h1>
            </a>
            <a
              className="flex justify-center flex-col mb-4 items-center w-full"
              href="/Page6"
            >
              <h1 className="flex justify-center text-white text-6xl py-0.5 rounded-full font-bold hover:bg-slate-200 hover:text-black w-full">6</h1>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="text-center pt-1 w-full text-xl text-white font-bold"
        style={{
          textShadow:
            'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px',
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default ProofPage;
