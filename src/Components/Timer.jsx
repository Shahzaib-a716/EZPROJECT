import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TimerApp = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timeOptions = [
    { label: "1 min", value: 60 },
    { label: "2 min", value: 120 },
    { label: "3 min", value: 180 },
    { label: "5 min", value: 300 },
    { label: "10 min", value: 600 },
    { label: "15 min", value: 900 },
    { label: "30 min", value: 1800 },
    { label: "1 hour", value: 3600 },
    { label: "2 hours", value: 7200 },
  ];

  useEffect(() => {
    let timer;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  const startTimer = (seconds) => {
    setTime(seconds);
    setRemainingTime(seconds);
    setIsRunning(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-blue-200 p-4">
      {/* Top Icon */}
      <div className="absolute top-4 left-4">
        <img
          src="/assets/images/button right countdown.webp" // Update with your image path
          alt="Hourglass"
          className="w-[120px] h-[120px]"
        />
      </div>

      {/* Title */}
      <h1 className="text-6xl font-bold mb-6">Timer</h1>

      {/* Time Buttons */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {timeOptions.map((option, index) => (
          <button
            key={index}
            className="bg-gray-500 text-white rounded-full w-[120px] h-[120px] flex items-center justify-center text-3xl font-bold hover:bg-gray-600"
            onClick={() => startTimer(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Countdown Timer (Wider Display) */}
      <div className="relative w-full max-w-[400px] h-24 bg-gray-500 text-3xl rounded-3xl shadow-lg flex items-center justify-center border-4 border-gray-300 mb-8">
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `linear-gradient(
              to right,
              #4caf50 ${(remainingTime / time) * 100}%,
              #ccc ${(remainingTime / time) * 100}%
            )`,
          }}
        ></motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold">{formatTime(remainingTime)}</span>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex flex-col items-center">
        {/* Main Start/Stop Button */}
        <button
          className=" rounded-full  mb-4"
          onClick={() => setIsRunning((prev) => !prev)}
        >
          <img
           src="/assets/images/bookme (13).webp"// Update with your start icon
            alt="Start/Stop"
            className="w-[100px] h-[100px] mx-auto"
          />
        </button>

        {/* Volume and Time Adjustments */}
        <div className="flex items-center">
          <button className="w-[300px] h-[100px]">
            <img  src="/assets/images/bookme (58).webp" alt="Minus" className="w-[300px] h-[100px] mx-auto" />
          </button>
        
        </div>

        {/* Bottom Row Buttons */}
        <div className="flex items-center gap-[140px] mt-4">
          <button>
            <img
              src="/assets/images/button back.webp" // Update with your back icon
              alt="Back"
              className="w-[100px] h-[100px]"
            />
          </button>
          <button>
            <img
              src="/assets/images/button help purple.webp" // Update with your help icon
              alt="Help"
               className="w-[100px] h-[100px]"
            />
          </button>
          <button>
            <img
              src="/assets/images/button ok check.webp" // Update with your confirm icon
              alt="Confirm"
               className="w-[100px] h-[100px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimerApp;
