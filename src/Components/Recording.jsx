import React, { useState } from "react";

const CallRecording = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isRecording, setIsRecording] = useState(true);
  const [time, setTime] = useState("00:00:00"); // Placeholder for recording time

  // Handlers
  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = () => {
    setIsRecording(false);
    setTime("00:00:00"); // Reset the timer
  };

  const handlePlay = () => {
    setIsPaused(false);
    setIsRecording(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center  bg-pink-200">
      {/* Top Image Icon */}
      <div className="mt-11">
        <img
          src="/assets/images/button bottom 13.webp" // Replace with actual image path
          alt="Mic Icon"
          className="w-[100px] h-[100px]"
        />
      </div>

      {/* Title */}
      <h1 className="text-6xl font-extrabold mt-8">RECORD <br className="mt-6" />MEETING</h1>

      {/* Recording Controls */}
      <div className="flex items-center bg-gray-500  mt-11 rounded-3xl shadow-lg space-x-4 w-full max-w-md justify-between">
        {/* Phone Icon */}
        <img
          src="/assets/images/phone rec button.webp" // Replace with actual phone image
          alt="Phone Icon"
          className="w-[80px] h-[70px]"
        />

        {/* Timer */}
        <span className="text-2xl font-mono">{time}</span>

        {/* Stop Recording */}
        <button onClick={handleStop}>
          <img
            src="/assets/images/red stop button.webp" // Replace with stop button image
            alt="Stop Icon"
            className="w-8 h-8"
          />
        </button>
        <button onClick={handleStop}>
          <img
            src="/assets/images/red pause button.webp" // Replace with stop button image
            alt="Stop Icon"
            className="w-8 h-8"
          />
        </button>

        {/* Pause/Play Recording */}
        <button onClick={isPaused ? handlePlay : handlePause}>
          <img
            src={
              isPaused
                ? "/assets/images/red pause button.webp" // Replace with play button image
                : "/assets/images/red play button.webp" // Replace with pause button image
            }
            alt={isPaused ? "Play Icon" : "Pause Icon"}
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between space-x-[100px] mt-[50px]">
        {/* Back Button */}
        <button>
          <img
            src="/assets/images/button back.webp" // Replace with back arrow image
            alt="Back Icon"
            className="w-[80px] h-[90px]"
          />
        </button>

        {/* Help Button */}
        <button>
          <img
            src="/assets/images/button help purple.webp"  // Replace with question mark image
            alt="Help Icon"
            className="w-[80px] h-[90px]"
          />
        </button>

        {/* Save Button */}
        <button>
          <img
            src="/assets/images/button ok check.webp"  // Replace with green checkmark image
            alt="Save Icon"
            className="w-[80px] h-[90px]"
          />
        </button>
      </div>
    </div>
  );
};

export default CallRecording;
