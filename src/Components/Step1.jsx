import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const BookingStep1 = () => {
  const navigate = useNavigate();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getDaysInMonth = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { daysInMonth, firstDay };
  };

  const { daysInMonth, firstDay } = getDaysInMonth(currentMonthIndex, currentYear);

  const handleDayClick = (day) => {
    navigate('/Step2');
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setCurrentYear(prevYear => prevYear + 1);
    } else {
      setCurrentMonthIndex(prevMonth => prevMonth + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setCurrentYear(prevYear => prevYear - 1);
    } else {
      setCurrentMonthIndex(prevMonth => prevMonth - 1);
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-700">
      <div id="step1" className="relative w-3/5 p-4 rounded-lg">

        {/* Left and Right Side Icons */}
        <img
          src="/assets/images/arrrow.webp"
          alt="Left Icon"
          className="absolute top-[calc(327px)] right-[736px] h-[448px] w-10 object-cover cursor-pointer" // Adjusted top value
          onClick={handlePreviousMonth}
        />
        <img
          src="/assets/images/arrrow3.webp"
          alt="Right Icon"
          className="absolute top-[calc(329px)] left-[735px] h-[445px] w-10 object-cover cursor-pointer" // Adjusted top value
          onClick={handleNextMonth}
        />

        {/* Header Section */}
       <div className="flex w-full gap-4 items-end border-b-2 pb-4 ml-4"> {/* Changed mr-8 to ml-4 to shift left */}
  <a href="#" className="flex flex-col gap-2 justify-center items-center">
    <img className="w-10" src="/assets/images/arrow.webp" alt="Arrow" />
    <h1 className="border-2 text-center border-b-0 rounded-t-xl w-16 h-10 bg-gradient-to-b from-[#ff8282] to-[#ff0000] md:text-3xl font-extrabold text-white">1</h1>
  </a>
  <div className="flex shrink-0 justify-center items-center">
    <h1 className="text-2xl md:text-3xl font-extrabold text-red-500">SELECT A DAY</h1>
  </div>
  <div className="flex shrink-0 -mb-2 justify-center items-center">
    <img className="w-20" src="/assets/images/calendar-icon.webp" alt="Calendar Icon" />
  </div>
</div>

{/* Legend Section */}
<div className="grid grid-cols-3 gap-2 mt-2 ml-4"> {/* Changed m-18 to ml-4 for better left alignment */}
  <div className="flex flex-col text-white">
    <div className="flex gap-2">
      <div className="border-2 w-10 h-8 bg-gradient-to-b from-[#ff8282] to-[#ff0000]"></div>
      <h1 className="text-lg">DAY IS BOOKED</h1> {/* Optional: larger text */}
    </div>
    <div className="flex gap-2">
      <div className="border-2 w-10 h-8 bg-gradient-to-b from-[#4d9535] to-[#3E6B2B]"></div>
      <h1 className="text-lg">AVAILABLE</h1> {/* Optional: larger text */}
    </div>
    <div className="flex gap-2">
      <div className="border-2 w-10 h-8 bg-gradient-to-b from-[#FFCC00] to-[#FF6600]"></div>
      <h1 className="text-lg">STILL AVAILABLE</h1> {/* Optional: larger text */}
    </div>
  </div>

  <div className="flex flex-col text-white">
    <div className="flex gap-2">
      <img src="/assets/images/morning.webp" className="shrink-0 w-10" alt="Morning" />
      <h1>12:00AM - 11:59AM</h1>
    </div>
    <div className="flex gap-2">
      <img src="/assets/images/afternoon.webp" className="shrink-0 w-12 -ml-1" alt="Afternoon" />
      <h1 className="-ml-1">12:00PM - 05:59PM</h1>
    </div>
    <div className="flex gap-2">
      <img src="/assets/images/evening.webp" className="shrink-0 w-10" alt="Evening" />
      <h1>06:00PM - 11:59PM</h1>
    </div>
  </div>
</div>

        {/* Calendar Section */}
        <div className="mt-0 justify-end p-14">
          <h1 className="text-center text-2xl font-bold text-white justify-end bg-gradient-to-b from-[#ffcc00] to-[#ff8800fd] p-3 w-[270px] ml-auto">
            {new Date(currentYear, currentMonthIndex).toLocaleString('default', { month: 'long' })} {currentYear}
          </h1>

          <div className="grid grid-cols-7 mt-2 space-y-0.5">
            {weekdays.map(day => (
              <div key={day} className="flex justify-center text-white items-center rounded-t-lg text-xl bg-gradient-to-b from-[#A3A3A3] to-[#fffbfb] font-bold">{day}</div>
            ))}

            {/* Empty slots for the previous month days */}
            {[...Array((firstDay + 6) % 7)].map((_, i) => (
              <div key={`empty-${i}`} className="border-2 border-gray-300 bg-gray-800"></div>
            ))}

            {/* Days with booking bars */}
            {[...Array(daysInMonth)].map((_, dayIndex) => (
              <div
                key={dayIndex}
                className="group bg-white border-2 border-white cursor-pointer"
                onClick={() => handleDayClick(dayIndex + 1)}
              >
                <h1 className="text-white text-center rounded-t-lg text-3xl bg-gradient-to-b from-[#a9a9d6] to-[#200a44] font-bold">{dayIndex + 1}</h1>
                <div className="flex flex-col h-10 space-y-0.5">
                  <div className="basis-1/3 bg-gradient-to-b from-[rgb(255,255,255)] to-[#f9f9ff]"></div>
                  <div className="basis-1/3 bg-gradient-to-b from-[#ad4444] to-[#dd3434]"></div>
                  <div className="basis-1/3 bg-gradient-to-b from-[#257737] to-[#0a8b4b]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingStep1;
