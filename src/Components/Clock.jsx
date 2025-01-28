import React, { useState, useEffect } from "react";

const TimerApp = () => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Update the timer every second when active
  useEffect(() => {
    let countdown;
    if (isActive && remainingTime > 0) {
      countdown = setInterval(() => {
        setRemainingTime((time) => time - 1);
      }, 1000);
    } else if (remainingTime <= 0) {
      setIsActive(false);
      clearInterval(countdown);
      if (remainingTime === 0) {
        alert("Time's up!");
      }
    }
    return () => clearInterval(countdown);
  }, [isActive, remainingTime]);

  const startTimer = (minutes) => {
    setRemainingTime(minutes * 60);
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setRemainingTime(0);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center bg-blue-300 h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">TIMER</h1>

      {/* Timer Buttons */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[1, 2, 3, 5, 10, 15, 30, 60, 120].map((time) => (
          <button
            key={time}
            onClick={() => startTimer(time)}
            className="bg-gray-700 text-white text-xl font-semibold py-3 px-5 rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-110"
          >
            {time < 60 ? `${time} min` : `${time / 60} hour`}
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <div className="text-6xl font-bold bg-white text-black py-4 px-8 rounded-lg shadow-md mb-6">
        {formatTime(remainingTime)}
      </div>

      {/* Control Buttons */}
      <div className="flex space-x-6">
        <button
          onClick={stopTimer}
          className="bg-red-500 text-white text-xl font-bold py-3 px-6 rounded-full hover:bg-red-600 transition-transform transform hover:scale-110"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-green-500 text-white text-xl font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-transform transform hover:scale-110"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerApp;
