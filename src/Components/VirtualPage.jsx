import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VirtualPage = () => {
  const [selectedIcon, setSelectedIcon] = useState(null); // Track which icon is hovered or clicked
  const [isModalPersistent, setIsModalPersistent] = useState(false); // Track if modal should persist
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Details for each icon
  const iconDetails = {
    1: {
      title: 'HANDYMAN / WOMAN',
      description:
        'Is a person who can usually do many different types of small jobs well, like hang pictures or fix a deck. Ours are skilled and are supposed to clean up after every job.',
      img1: '/assets/images/single.png',
      img2: '/assets/images/multiple.png',
      link1: 'TradePerson',
      link2: '',
    },
    2: {
      title: 'COMPUTER TECHNICAL',
      description:
        'When you just want to get some thing fixed on your computer. This is the person who can do it for you. If you need a special programmer, then just search for it on the top of the page. Our mandate is to serve you. Just click here to select which type you want. and it will display a list of all the types.',
      img1: '/assets/images/single.png',
      img2: '/assets/images/multiple.png',
      link1: 'TradePerson',
      link2: '',
    },
    3: {
      title: 'ELECTRICIAN',
      description:
        'Is a person who takes care of all your electrical needs like replacing a light, or changes your fuses. Ask them and they will help because that is why we are here.Let us know what you think of them..',
      img1: '/assets/images/single.png',
      img2: '/assets/images/multiple.png',
      link1: 'TradePerson',
      link2: '',
    },

    4: {
      title: 'PLUMBERS',
      description:
        'changes faucets, fix leaky pipes, installs dishwashers and clothes washers, brings water to your new swimming pool or fountain or installs a tap outside your house, See the complete list on the trades-persons',
     img1: '/assets/images/single.png',
     img2: '/assets/images/multiple.png',
      link1: 'TradePerson',
      link2: '',
    },

    5: {
      title: 'EAVES OR GUTTER REPAIR',
      description:
        'Is a person who can fix your gutters of they are leaking and they clean up after every job. Let us know what you think.Click on it to get an estimate on a repair or eaves cleaning',
      img1: '/assets/images/single.png',
      img2: '/assets/images/multiple.png',
      link1: 'TradePerson',
      link2: '',
    },

    6: {
      title: 'ROOF REPAIR',
      description:
        'Is a PERSON who can fix leaking in your roof or replace broken shingles, or install various types of roofs. They also repair the wood under the shingles and in many cases can modify the roof, or put sky lights in too.',
        img1: '/assets/images/single.png',
        img2: '/assets/images/multiple.png',
      link1: 'TradePerson',
      link2: '',
    },

    7: {
      title: 'PET SERVICE',
      description:
        'Includes vets, animal hospitals, dog walkers, animal groomers, animal photographers, handy-people to make animal enclosures, or the removal of animals from your attic, or inside your garage like skunks, raccoons, squirrels and other rodents.',
      img1: '/assets/images/single.png',
      img2: '/assets/images/multiple.png',
      link1: 'TradePerson',
      link2: '',
    },

    8: {
      title: 'STONE MASON',
      description:
        'Is a person who can usually do many different types of stone and concrete work, and some can even put in a new swimming pool for you. Book them in on line. and let us know how easy it was to do',
      img1: '/assets/images/single.png',
      img2: '/assets/images/multiple.png',
      link1: 'https://hm.ez123.eu/TradesPeople',
      link2: '',
    },

    9: {
      title: 'APPLIANCE REPAIRS',
      description:
        'Is a person who can usually All your household appliances like your washer or dryer, coffee machine or any other thing like that. Just make sure you have a model number, the type of machine and how old it is, who made it, the model number , and why it is not working or what kinds of noises it is making and make an appointment with them on line',
      img1: '/assets/images/single.png',
      img2: '/assets/images/multiple.png',
      link1: 'https://hm.ez123.eu/TradesPeople',
      link2: '',
    },

    10: {
      title: 'HEATING + cooling',
      description:
        'Is a person who can usually takes care of your furnace, your BBQ, your air- conditioner by repairing them or installing them and sometimes cleaning them as well. They must be licensed plumbers , electricians and gas fitters. Let our system find the right trades person for you.',
      img1: '/assets/images/single.png',
      img2: '/assets/images/multiple.png',
      link1: 'https://hm.ez123.eu/TradesPeople',
      link2: '',
    },
    11: {
      title: 'TRY OUR FREE BUSINESS MANAGEMENT SYSTEM ',
      description:
        'IT WILL SAVE A BUSY PERSON AT LEAST 60 DAYS WORTH OF TIME A YEAR',

    },
    12: {
      title: 'WE CAN FIX YOUR EXISTING WEB SITES',
      description:
        'we will give you a free estimate on fixing yours and tell you exactly what we will do and for what price. We are sure you will be very happy because we know what we are doing.',
    },
    // Additional icons can be configured here with unique descriptions and images
  };

  // Show the modal on icon hover
  const handleIconHover = (iconNumber) => {
    if (!isModalPersistent) setSelectedIcon(iconNumber);
  };

  // Show modal persistently on icon click
  const handleIconClick = (iconNumber) => {
    setSelectedIcon(iconNumber);
    setIsModalPersistent(true); // Make modal persist on click
  };

  // Close modal when the close button is clicked
  const closeModal = () => {
    setSelectedIcon(null);
    setIsModalPersistent(false);
  };

  const toggleDropdown = () => setDropdownOpen((prevOpen) => !prevOpen);

  return (
    <div
      className="min-h-screen bg-day bg-no-repeat bg-center bg-cover relative"
      style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}
    >
      {/* Top Controls */}
      <div className="flex justify-center rounded m-1 items-center gap-3">
        {/* Language Dropdown */}
        <div className="dropdown shrink-0 relative">
          <img
            onClick={toggleDropdown}
            data-te-toggle="tooltip"
            data-te-placement="bottom"
            data-te-ripple-init=""
            data-te-ripple-color="light"
            title="Select Your Language"
            src="/assets/images/en.png"
            className="w-[70px] rounded-3xl cursor-pointer"
            alt="English Flag"
          />
          {dropdownOpen && (
            <div className="absolute mt-2 left-0 bg-white border rounded shadow-lg p-2">
              {['de', 'fr', 'hu'].map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 text-lg rounded cursor-pointer gap-3 hover:bg-gray-200"
                  onClick={() => {
                    setDropdownOpen(false);
                    alert(`Selected language: ${lang}`);
                  }}
                >
                  <img
                    src={`/assets/images/${lang}.png`}
                    className="w-8 rounded"
                    alt={`${lang} Flag`}
                  />
                  <span>{lang === 'de' ? 'Deutsch' : lang === 'fr' ? 'Française' : 'Magyar'}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Bar with Voice Search and Submit */}
        <div className="flex items-center bg-white pl-1 pr-1 md:w-1/2 w-full rounded-full gap-1">
          <button className="shrink-0">
            <img
              data-te-toggle="tooltip"
              data-te-placement="bottom"
              data-te-ripple-init=""
              data-te-ripple-color="light"
              title="Type by voice"
              className="w-11 rounded-3xl"
              src="/assets/images/microphone.png"
              alt="Microphone Icon"
            />
          </button>
          <input
            type="search"
            id="searchInput"
            className="rounded-2xl w-full border-none text-center text-xl text-sky-600"
            placeholder="Type In What You Are Looking For"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <img
            data-te-toggle="tooltip"
            data-te-placement="bottom"
            data-te-ripple-init=""
            data-te-ripple-color="light"
            title="Search"
            className="w-[110px] rounded hover:scale-110"
            src="/assets/images/search.png"
            alt="Search Icon"
          />
        </div>

        {/* Zoom In/Out Controls */}
        <img
          data-te-toggle="tooltip"
          data-te-placement="bottom"
          data-te-ripple-init=""
          data-te-ripple-color="light"
          title="Increase Screen"
          src="/assets/images/button zoom out.webp"
          className="w-12 rounded-xl"
          draggable="false"
          alt="Increase Screen Icon"
        />
        <img
          data-te-toggle="tooltip"
          data-te-placement="bottom"
          data-te-ripple-init=""
          data-te-ripple-color="light"
          title="Decrease Screen"
          src="/assets/images/button zoom in.webp"
          className="w-12 rounded-2xl"
          alt="Decrease Screen Icon"
        />
      </div>

      {/* Sidebar Icons and Virtual House Map */}
      <div className="flex justify-center gap-3 mt-8">
        {/* Sidebar Icons - Left */}
        <div className="basis-28">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="relative group">
              <img
                src={`/assets/images/${i + 1}.png`}
                className="mb-3 opacity-90 hover:opacity-100 cursor-pointer"
                alt={`Menu Icon ${i + 1}`}
                onMouseEnter={() => handleIconHover(i + 1)}
                onMouseLeave={() => !isModalPersistent && setSelectedIcon(null)}
                onClick={() => handleIconClick(i + 1)}
              />
            </div>
          ))}
        </div>

        {/* Virtual House Map */}
        <div className="relative flex justify-center">
          <img
            className="max-h-[98%] rounded"
            src="/assets/images/testhouse.jpg"
            alt="Virtual House"
          />
        </div>

        {/* Sidebar Icons - Right */}
        <div className="basis-28">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="relative group">
              <img
                src={`/assets/images/${i + 7}.png`}
                className="mb-3 opacity-90 hover:opacity-100 cursor-pointer"
                alt={`Menu Icon ${i + 7}`}
                onMouseEnter={() => handleIconHover(i + 7)}
                onMouseLeave={() => !isModalPersistent && setSelectedIcon(null)}
                onClick={() => handleIconClick(i + 7)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal with Information for Selected Icon */}
      {selectedIcon && (
        <div
          className="z-10 border-4 border-gray-700 rounded-3xl opacity-90 w-[70%] max-w-2xl h-[80%] absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 overflow-y-auto shadow-lg"
          onMouseEnter={() => setSelectedIcon(selectedIcon)} // Keep modal open on hover
          onMouseLeave={() => !isModalPersistent && setSelectedIcon(null)}
        >
          <div className="relative">
            <h1 className="text-5xl font-bold mb-4">{iconDetails[selectedIcon]?.title}</h1>
            <button
              className="cursor-pointer bg-red-600 text-white font-extrabold text-3xl absolute px-2 rounded-full -top-4 -right-4"
              onClick={closeModal}
            >
              &times;
            </button>
            <p className="text-3xl font-bold mb-6">
              {iconDetails[selectedIcon]?.description}
            </p>
            <div className="flex justify-around mt-4">
              <a href={iconDetails[selectedIcon]?.link1} className="group relative">
                <div className="w-44 flex justify-center rounded-xl border-solid border-4 border-green-400 cursor-pointer">
                  <img className="h-40" src={iconDetails[selectedIcon]?.img1} alt="Single Trades Person" />
                </div>
                <span className="absolute -translate-y-full p-1 bg-green-500 rounded-lg text-center text-white text-xl hidden group-hover:flex">
                  Book a Single Trades Person
                </span>
              </a>
              <a href={iconDetails[selectedIcon]?.link2} className="group relative">
                <div className="w-44 rounded-xl border-solid border-4 border-white cursor-pointer">
                  <img className="h-40" src={iconDetails[selectedIcon]?.img2} alt="Multiple Trades People" />
                </div>
                <span className="absolute -translate-y-full p-2 bordor-2 bg-yellow-500 rounded-lg text-center text-white text-xl hidden group-hover:flex">
                  Book Multiple Trades People
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualPage;
