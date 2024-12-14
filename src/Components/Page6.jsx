import React, { useState } from "react";

const SongsPage = () => {
  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const [isPlayingNew, setIsPlayingNew] = useState(false);

  // Handle play and pause for visualizer activation
  const handlePlayOriginal = () => setIsPlayingOriginal(true);
  const handlePauseOriginal = () => setIsPlayingOriginal(false);

  const handlePlayNew = () => setIsPlayingNew(true);
  const handlePauseNew = () => setIsPlayingNew(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('elegant-music-bg.jpg')" }}
    >
      {/* Header Section */}
      <div className="text-center py-16 px-4 bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA]">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-bounceIn">
          Songs That Made Me Famous
        </h1>
        <h2 className="text-xl md:text-3xl font-medium text-gray-200 animate-pulse">
          Les The Handyman Songs
        </h2>
      </div>

      {/* Inspirational Section */}
      <div className="py-16 text-center">
        <p className="text-4xl md:text-5xl font-bold bg-slate-400 text-black tracking-wide animate-slideInFromSide">
          Feel the rhythm of classics and the energy of new hits!
        </p>
      </div>
      <div className="mt-5 relative">
      <div className="absolute inset-x-0 bottom-0 h-[12px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-80 animate-pulse"></div>
    </div>

      {/* Audio Section */}
      <div className=" bg-gradient-to-b  py-16 px-6 rounded-lg shadow-lg">
        {/* Back Button */}
        <div className="mb-10 flex justify-start">
          <a href="/Proof" className="inline-block">
            <img
              src="/assets/images/button back.webp"
              alt="Go Back"
              className="w-[50px] h-[62px] md:w-16 md:h-16 hover:opacity-80 transition duration-300 transform hover:scale-110"
            />
          </a>
        </div>

        {/* Original Song Section */}
        <div className="mb-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 animate-fade-in">
            Original Song
          </h3>
          <div className="relative inline-block">
          <audio
  controls
  className="w-full md:w-[500px] mx-auto rounded-lg border-2 border-[#9333EA] shadow-md hover:shadow-lg transition duration-300"
  onPlay={handlePlayOriginal}
  onPause={handlePauseOriginal}
>
  <style>
    {`
      /* Style the audio progress bar */
      audio::-webkit-progress-bar {
        background-color: #f3f4f6; /* Light background color */
        border-radius: 15px;
      }

      audio::-webkit-progress-value {
        background-color: #9333EA; /* Color for the filled part of the bar */
        border-radius: 5px;
      }

      audio::-webkit-progress-tick {
        background-color: #9333EA; /* Color of the ticks on the progress bar */
      }
    `}
  </style>
</audio>

            {isPlayingOriginal && (
              <div className="absolute inset-x-0 bottom-[10px] flex justify-center space-x-1">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#9333EA] w-1 h-6 md:h-8 animate-pulse"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      height: `${Math.random() * 30 + 10}px`,
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* New Song Section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 animate-fade-in">
            New Song
          </h3>
          <div className="relative inline-block">
            <audio
              controls
              className="w-full md:w-[500px] mx-auto rounded-lg border-2 border-[#3B82F6] shadow-md hover:shadow-lg transition duration-300"
              onPlay={handlePlayNew}
              onPause={handlePauseNew}
            >
              <source src="newsong.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            {isPlayingNew && (
              <div className="absolute inset-x-0 bottom-[10px] flex justify-center space-x-1">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#3B82F6] w-1 h-6 md:h-8 animate-pulse"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      height: `${Math.random() * 30 + 10}px`,
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-8 bg-gradient-to-b from-[#111827] to-[#000000] text-center text-gray-400">
        <p className="text-lg md:text-xl font-light">
          © 2024 Les The Handyman - Crafted with love and rhythm.
        </p>
      </footer>
    </div>
  );
};

export default SongsPage;
