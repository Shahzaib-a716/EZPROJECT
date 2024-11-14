import React, { useState } from 'react';

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Sample booking data structure for demonstration
const bookingData = {
  "2024-11-01": { morning: "booked", afternoon: "available", evening: "still-available" },
  "2024-11-02": { morning: "available", afternoon: "booked", evening: "available" },
  // Add more days as needed
};

const BookingStep1 = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());
  const currentYear = new Date().getFullYear();

  // Helper function to get days in a month and first weekday
  const getDaysInMonth = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { daysInMonth, firstDay };
  };

  // Calculate months to display based on current index
  const displayedMonths = [currentMonthIndex, currentMonthIndex + 1, currentMonthIndex + 2].map((monthIndex) => {
    const month = monthIndex % 12;
    const year = currentYear + Math.floor(monthIndex / 12);
    const { daysInMonth, firstDay } = getDaysInMonth(month, year);
    return { month, year, daysInMonth, firstDay };
  });

  // Define color based on slot status
  const getSlotColor = (status) => {
    switch (status) {
      case "booked":
        return "bg-gradient-to-b from-[#ff8282] to-[#ff0000]";
      case "available":
        return "bg-gradient-to-b from-[#4d9535] to-[#3E6B2B]";
      case "still-available":
        return "bg-gradient-to-b from-[#FFCC00] to-[#FF6600]";
      default:
        return "bg-gradient-to-b from-[#4d9535] to-[#3E6B2B]"; // Default to available
    }
  };

  // Navigation handlers
  const handleNext = () => setCurrentMonthIndex((prev) => prev + 3);
  const handlePrevious = () => setCurrentMonthIndex((prev) => prev - 3);

  return (
    <div id="step1" className="p-1 bg-gray-900 md:p-4 w-full min-h-screen">
      {/* Header Section */}
      <div className="flex w-full gap-4 items-end border-b-2">
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
      <div className="grid grid-cols-3 gap-2 mt-2">
        <div className="flex flex-col text-white">
          <div className="flex gap-2">
            <div className="border-2 w-10 h-8bg-gradient-to-b from-[#ff8282] to-[#ff0000]"></div>
            <h1 className='font-bold '>DAY IS BOOKED</h1>
          </div>
          <div className="flex gap-2">
            <div className="border-2 w-10 h-8 bg-gradient-to-b from-[#4d9535] to-[#3E6B2B]"></div>
            <h1>AVAILABLE</h1>
          </div>
          <div className="flex gap-2">
            <div className="border-2 w-10 h-8 bg-gradient-to-b from-[#FFCC00] to-[#FF6600]"></div>
            <h1>STILL AVAILABLE</h1>
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
      <div className="flex mt-2 space-x-8">
        <button onClick={handlePrevious} className="bg-gray-700 text-white p-2 rounded">
          <img className="w-10" src="/assets/images/arrow.webp" alt="Arrow Left" />
        </button>

        {displayedMonths.map(({ month, year, daysInMonth, firstDay }) => (
          <div key={`${year}-${month}`} className="w-1/3">
            <h1 className="flex justify-between items-center text-center text-xl text-white rounded-t-xl bg-gradient-to-b from-[#FFCC00] to-[#FF6600] p-2">
              {new Date(year, month).toLocaleString('default', { month: 'long' })} {year}
              <img className="w-6" src="/assets/images/arrow.webp" alt="Arrow" />
            </h1>

            <div className="grid grid-cols-7 mt-2">
              {weekdays.map(day => (
                <div key={day} className="flex justify-center text-white items-center rounded-t-lg text-xl bg-gradient-to-b from-[#A3A3A3] to-[#636363] font-bold border-2 border-white">{day}</div>
              ))}

              {[...Array((firstDay + 6) % 7)].map((_, i) => (
                <div key={`empty-${i}`} className="border-2 border-gray-300 bg-gray-800"></div>
              ))}

              {[...Array(daysInMonth)].map((_, dayIndex) => {
                const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayIndex + 1).padStart(2, '0')}`;
                const dayBooking = bookingData[dateKey] || { morning: "available", afternoon: "available", evening: "available" };

                return (
                  <div key={dayIndex} className="group bg-white border-2 border-white cursor-pointer">
                    <h1 className="text-white text-center rounded-t-lg text-3xl bg-gradient-to-b from-[#F5F5F5] to-[#DADADA] font-bold">{dayIndex + 1}</h1>
                    <div className="flex flex-col h-10">
                      <div className={`basis-1/3 ${getSlotColor(dayBooking.morning)}`}></div>
                      <div className={`basis-1/3 ${getSlotColor(dayBooking.afternoon)}`}></div>
                      <div className={`basis-1/3 ${getSlotColor(dayBooking.evening)}`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <button onClick={handleNext} className="bg-gray-700 text-white p-2 rounded">
          <img className="w-10 rotate-90" src="/assets/images/arrow.webp" alt="Arrow Right" />
        </button>
      </div>
    </div>
  );
};

export default BookingStep1;
