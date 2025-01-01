// src/Components/FreeRegistration.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import Registration2 from './Registration2'; 

const FreeRegistration = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [displayText, setDisplayText] = useState('IT IS FREE FOR CUSTOMERS');
  const [bgColor, setBgColor] = useState('bg-green-900');
  const [textColor, setTextColor] = useState('text-purple-400');
  const handleCitySelection = (country, province, city) => {
    setSelectedCountry(country);
    setSelectedProvince(province);
    setSelectedCity(city);
    handleAutomaticFill(country, province, city); // Pass values to App component
  };


  const texts = [
    'IT IS FREE FOR CUSTOMERS',
    'TELL US ABOUT YOUR FAVOURITE TRADE',
    'FINDS PRODUCT AND SERVICES FAST',
    'HELP US FIND BETTER TRADES',
    'LOOK AROUND THE VIRTUAL HOUSE',
  ];

  let currentIndex = 0; 

  const updateTextAndColors = () => {
    currentIndex = (currentIndex + 1) % texts.length; 
    setDisplayText(texts[currentIndex]);

    const randomBgColor = `bg-${['green-900', 'blue-900', 'yellow-600', 'yellow-900'][Math.floor(Math.random() * 4)]}`;
    const randomTextColor = `text-${['red-400', 'yellow-500', 'pink-400'][Math.floor(Math.random() * 3)]}`;
    setBgColor(randomBgColor);
    setTextColor(randomTextColor);
  };

  useEffect(() => {
    const interval = setInterval(updateTextAndColors, 2000);
    return () => clearInterval(interval);
  }, []);

  const countryData = {
    Austria: {
      flag: '/assets/images/at.png',
      provinces: {
        Styria: ['Graz', 'Leoben'],
        Vienna: ['Vienna City'],
      },
    },
    Canada: {
      flag: '/assets/images/ca.png',
      provinces: {
        Ontario: ['Toronto', 'Ottawa'],
        Quebec: ['Montreal', 'Quebec City'],
      },
    },
    France: {
      flag: '/assets/images/fr.png',
      provinces: {
        'Île-de-France': ['Paris', 'Versailles'],
        'Provence-Alpes-Côte d\'Azur': ['Nice', 'Marseille'],
      },
    },
    Germany: {
      flag: '/assets/images/de.png',
      provinces: {
        Bavaria: ['Munich', 'Nuremberg'],
        Berlin: ['Berlin City'],
      },
    },
    Hungary: {
      flag: '/assets/images/hu.png',
      provinces: {
        'Budapest': ['Budapest'],
        'Bács-Kiskun Vármegye': ['Kecskemét'],
        'Baranya Vármegye': ['Pécs'],
        'Békés Vármegye': ['Békéscsaba'],
        'Borsod-Abaúj-Zemplén Vármegye': ['Miskolc'],
        'Fejér Vármegye': ['Székesfehérvár'],
        'Győr-Moson-Sopron Vármegye': ['Győr'],
        'Hajdú-Bihar Vármegye': ['Debrecen'],
        'Heves Vármegye': ['Eger'],
        'Jász-Nagykun-Szolnok Vármegye': ['Szolnok'],
        'Komárom-Esztergom Vármegye': ['Tatabánya'],
        'Nógrád Vármegye': ['Salgótarján'],
        'Pest Vármegye': ['Érd'],
        'Somogy Vármegye': ['Kaposvár'],
        'Szabolcs-Szatmár-Bereg Vármegye': ['Nyíregyháza'],
        'Tolna Vármegye': ['Szekszárd'],
        'Vas Vármegye': ['Szombathely'],
        'Veszprém Vármegye': ['Veszprém'],
        'Zala Vármegye': ['Zalaegerszeg'],
      },
    },
    UK: {
      flag: '/assets/images/en.png',
      provinces: {
        England: ['London', 'Birmingham'],
        Scotland: ['Edinburgh', 'Glasgow'],
      },
    },
    USA: {
      flag: '/assets/images/us.png',
      provinces: {
        California: ['Los Angeles', 'San Francisco'],
        Texas: ['Austin', 'Houston'],
      },
    },
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setSelectedProvince(null);
  };

  const handleProvinceClick = (province) => {
    setSelectedProvince(province);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    navigate('/Registration2', {
      state: {
        country: selectedCountry,
        province: selectedProvince,
        city: city,
      },
    });
  };

  const handleBackClick = () => {
    if (selectedProvince) {
      setSelectedProvince(null);
    } else if (selectedCountry) {
      setSelectedCountry(null);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}>
      <div className="relative">
        <div className="grid md:grid-cols-2 gap-0 text-center">
          <div className="flex bg-orange-500 items-center">
            <img
              className="w-20 rounded-full cursor-pointer"
              src="/assets/images/button back.webp"
              alt="Back"
              onClick={handleBackClick}
            />
            <div className="w-full">
              <h1 className="font-extrabold text-xl md:text-3xl">FREE BUSINESS REGISTRATION</h1>
              <h1 className="m-0 pl-1 pr-1 text-white text-xl md:text-lg">
                DO NOT SEE YOUR AREA, THEN{' '}
                <a
                  className="font-bold text-yellow-300 text-base md:text-xl cursor-pointer"
                  href="/ContactUs"
                >
                  CLICK HERE
                </a>
              </h1>
            </div>
          </div>
          
          <h1 className={`flex font-extrabold justify-center items-center text-center ${bgColor} text-4xl ${textColor}`}>
            {displayText}
          </h1>
        </div>

        <div className="mt-1 flex justify-center">
          <div className="w-full md:w-1/3">
            <div className="bg-blue-900 p-2 md:rounded-3xl">
              <div className="flex items-center justify-center">
                {selectedCountry && !selectedProvince && (
                  <img
                    className="w-10 mr-2 rounded"
                    src={countryData[selectedCountry].flag}
                    alt={selectedCountry}
                  />
                )}
                <h1 className="text-white font-bold text-center text-xl md:text-2xl">
                  {selectedProvince
                    ? 'Select Your City'
                    : selectedCountry
                    ? 'Select Your Province or State'
                    : 'Select Your Country'}
                </h1>
              </div>
            </div>
            
            <ul>
              {selectedProvince ? (
                countryData[selectedCountry].provinces[selectedProvince].map((city, index) => (
                  <li
                    key={index}
                    className="rounded-3xl bg-white bg-opacity-[.77]"
                    onClick={() => handleCityClick(city)}
                  >
                    <div className="flex p-1 items-center cursor-pointer rounded-3xl hover:pl-5 hover:pr-5 hover:border-solid hover:border-2 hover:border-blue-400 hover:text-blue-800">
                      <h2 className="text-xl md:text-2xl font-bold">{city}</h2>
                    </div>
                  </li>
                ))
              ) : selectedCountry ? (
                Object.keys(countryData[selectedCountry].provinces).map((province) => (
                  <li
                    key={province}
                    className="rounded-3xl bg-white bg-opacity-[.77]"
                    onClick={() => handleProvinceClick(province)}
                  >
                    <div className="flex p-1 items-center cursor-pointer rounded-3xl hover:pl-5 hover:pr-5 hover:border-solid hover:border-2 hover:border-blue-400 hover:text-blue-800">
                      <h2 className="text-xl md:text-2xl font-bold">{province}</h2>
                    </div>
                  </li>
                ))
              ) : (
                Object.keys(countryData).map((country) => (
                  <li
                    key={country}
                    className="rounded-3xl bg-white bg-opacity-[.77]"
                    onClick={() => handleCountryClick(country)}
                  >
                    <div className="flex p-1 items-center cursor-pointer rounded-3xl hover:pl-5 hover:pr-5 hover:border-solid hover:border-2 hover:border-blue-400 hover:text-blue-800">
                      <img
                        className="w-10 ml-5 rounded mr-3 md:w-7 md:ml-3.5 md:mr-2"
                        src={countryData[country].flag}
                        alt={country}
                      />
                      <h2 className="text-xl md:text-2xl font-bold">{country}</h2>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeRegistration;
