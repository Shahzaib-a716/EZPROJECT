import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import moment from "moment-timezone";

const WorldTime = () => {
  const [timeZones, setTimeZones] = useState({
    USA: [
      { city: "New York", country: "USA", flag: "/assets/images/us.png", zone: "America/New_York" },
      { city: "Los Angeles", country: "USA", flag: "/path-to-flag-us.png", zone: "America/Los_Angeles" },
      { city: "Chicago", country: "USA", flag: "/path-to-flag-us.png", zone: "America/Chicago" },
    ],
    England: [
      { city: "London", country: "England", flag: "/assets/images/england.png", zone: "Europe/London" },
      { city: "Manchester", country: "England", flag: "/assets/images/england.png", zone: "Europe/London" },
      { city: "Birmingham", country: "England", flag: "/assets/images/england.png", zone: "Europe/London" },
    ],
    Japan: [
      { city: "Tokyo", country: "Japan", flag: "/path-to-flag-japan.png", zone: "Asia/Tokyo" },
      { city: "Osaka", country: "Japan", flag: "/path-to-flag-japan.png", zone: "Asia/Tokyo" },
      { city: "Nagoya", country: "Japan", flag: "/path-to-flag-japan.png", zone: "Asia/Tokyo" },
    ],
  });

  const [searchTerms, setSearchTerms] = useState({
    USA: "",
    England: "",
    Japan: "",
  });

  const [format24, setFormat24] = useState(false);

  const handleSearch = (country, value) => {
    setSearchTerms({ ...searchTerms, [country]: value });
  };

  const getCityToDisplay = (country) => {
    const cities = timeZones[country];
    const searchTerm = searchTerms[country];

    if (searchTerm === "") {
      return cities[0];
    }

    return (
      cities.find((zone) =>
        zone.city.toLowerCase().includes(searchTerm.toLowerCase())
      ) || cities[0]
    );
  };

  return (
    <div className="bg-orange-200 min-h-screen flex flex-col items-center py-4">
      {/* Header */}
      <div className="flex items-center justify-between w-full px-6">
        <button
          className="bg-white p-2 ml-[500px] rounded-full text-2xl text-black font-bold"
          onClick={() => setFormat24(true)}
        >
          24H
        </button>
        <img
          src="/assets/images/button bottom 12.webp"
          alt="Dials"
          className="w-[150px] ml-[20px] mb-[70px] h-[90px] mx-4"
        />
        <button
          className="bg-green-500 mr-[400px] text-black p-2 text-2xl rounded-3xl font-bold"
          onClick={() => setFormat24(false)}
        >
          AM/PM
        </button>
      </div>
      <h1 className="text-6xl font-bold mt-2 text-black">WORLD TIME</h1>

      {/* Time Zones by Country */}
      {Object.keys(timeZones).map((country, index) => {
        const cityToDisplay = getCityToDisplay(country);
        const currentTime = moment
          .tz(cityToDisplay.zone)
          .format(format24 ? "HH:mm:ss" : "hh:mm:ss A");

        return (
          <div
            key={index}
            className={`w-2/4 my-6 p-4 rounded-lg shadow-lg ${
              index % 2 === 0 ? "" : "bg-green-100"
            }`}
          >
            {/* Search Bar for Each Country */}
            <div className="relative my-4 w-full">
              <input
                type="text"
                placeholder="Search cities..."
                className="w-full p-1 rounded-lg border-2 border-black bg-green-300 "
                onChange={(e) => handleSearch(country, e.target.value)}
                value={searchTerms[country]} // Bind the search term to input
              />
              <FaSearch className="absolute top-3 right-3 text-gray-400" />
            </div>

            {/* Combined City, Country, Flag, and Time in a Single Container */}
            <div className="bg- p-4  border-2 border-black rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-700">
                    {cityToDisplay.city}, {cityToDisplay.country}
                  </h3>
                </div>
                <img
                  src={cityToDisplay.flag}
                  alt={`${cityToDisplay.city} flag`}
                  className="w-[100px] h-[80px]"
                />
              </div>

              {/* Time Section Below */}
              <p className="text-gray-500 text-7xl font-extrabold mt-4">{currentTime}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorldTime;
