import React, { useState } from 'react';

const VirtualPage = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isModalPersistent, setIsModalPersistent] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1); // State to manage zoom level

  const [isListening, setIsListening] = useState(false); // State for microphone
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en'); // Default language is English

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang); // Update the selected language
    setDropdownOpen(false); // Close the dropdown

  };


  const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

if (recognition) {
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';
}

// Start speech recognition
const handleMicrophoneClick = () => {
  if (!recognition) {
    alert('Speech Recognition API is not supported in this browser.');
    return;
  }

  setIsListening(true);
  recognition.start();

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript;
    setSearchQuery(spokenText);
    handleSearch(spokenText); // Trigger search with spoken text
    setIsListening(false);
  };

  recognition.onerror = () => {
    alert('An error occurred while recognizing speech. Please try again.');
    setIsListening(false);
  };

  recognition.onend = () => {
    setIsListening(false);
  };
};


  // Zoom In logic: Increase size (maximum 1.5x)
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1,1 )); // Zoom in (max 1.5x)
  };

  // Zoom Out logic: Decrease size (minimum 1x)
  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.min(prev - 0.1,0.9 )); // Zoom out (no smaller than 1x)
  };

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setSearchResults([
        { id: 1, title: 'HANDYMAN / WOMAN', description: 'This is a sample result.' },
        { id: 2, title: 'Example Result 2', description: 'Another example result.' },
      ]);
      setLoading(false);
    }, 1000);
  };

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
      title: 'HEATING + cooling',
      description:
      'Is a person who can usually takes care of your furnace, your BBQ, your air- conditioner by repairing them or installing them and sometimes cleaning them as well. They must be licensed plumbers , electricians and gas fitters. Let our system find the right trades person for you.',
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
      link1: 'TradesPerson',
      link2: '',
    },

    9: {
      title: 'APPLIANCE REPAIRS',
      description:
        'Is a person who can usually All your household appliances like your washer or dryer, coffee machine or any other thing like that. Just make sure you have a model number, the type of machine and how old it is, who made it, the model number , and why it is not working or what kinds of noises it is making and make an appointment with them on line',
      img1: '/assets/images/single.png',
      img2: '/assets/images/multiple.png',
      link1: 'TradesPerson',
      link2: '',
    },

    10: {
      title: 'PET SERVICE',
      description:
        'Includes vets, animal hospitals, dog walkers, animal groomers, animal photographers, handy-people to make animal enclosures, or the removal of animals from your attic, or inside your garage like skunks, raccoons, squirrels and other rodents.',
    },
    11: {
        title: 'WE CAN FIX YOUR EXISTING WEB SITES',
        description:
          'we will give you a free estimate on fixing yours and tell you exactly what we will do and for what price. We are sure you will be very happy because we know what we are doing.',

    },
    12: {
      title: 'TRY OUR FREE BUSINESS MANAGEMENT SYSTEM ',
      description:
        'IT WILL SAVE A BUSY PERSON AT LEAST 60 DAYS WORTH OF TIME A YEAR',
    },
  
    // Other icons here...
  };

  const handleIconHover = (iconNumber) => {
    if (!isModalPersistent) setSelectedIcon(iconNumber);
  };

  const handleIconClick = (iconNumber) => {
    setSelectedIcon(iconNumber);
    setIsModalPersistent(true);
  };

  const closeModal = () => {
    setSelectedIcon(null);
    setIsModalPersistent(false);
  };

  const toggleDropdown = () => setDropdownOpen((prevOpen) => !prevOpen);

  const renderIcons = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => {
      const iconNumber = start + index;
      return (
        <div key={iconNumber} className="relative group">
          <img
            src={`/assets/images/${iconNumber}.png`}
            className="mb-3 opacity-100 hover:opacity-60 cursor-pointer"
            alt={`Menu Icon ${iconNumber}`}
            onMouseEnter={() => handleIconHover(iconNumber)}
            onMouseLeave={() => !isModalPersistent && setSelectedIcon(null)}
            onClick={() => handleIconClick(iconNumber)}
          />
        </div>
      );
    });
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: 'url(/assets/images/day.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Content Container (this will zoom in/out) */}
      <div
        className="transition-transform duration-300"
        style={{
          transform: `scale(${zoomLevel})`, // Apply zoom scaling
          transformOrigin: 'top center',  // Zoom effect from top-center
          width: '100%', // Prevent scaling beyond container
        }}
      >
        {/* Top Controls */}
        <div className="flex justify-center items-center m-2 ml-[60px] gap-3">
          {/* Language Dropdown */}
          
          
          <div className="dropdown relative">
  {/* Display the selected flag */}
  <img
    onClick={() => setDropdownOpen(!dropdownOpen)}
    className="w-[490px] mb-11 rounded-3xl cursor-pointer"
    src={`/assets/images/${selectedLang}.png`}
    alt={`${selectedLang.toUpperCase()} Flag`}
  />

  {/* Dropdown menu */}
  {dropdownOpen && (
    <div
      className="absolute w-[200px] top-[130px] right-6 bg-white border rounded shadow-lg"
      style={{ zIndex: 70 }} // Ensure the dropdown is above other elements
    >
      {['en', 'de', 'fr', 'hu'].map((lang, index) => (
        <div
          key={index}
          className="flex items-center p-2 text-2xl font-bold rounded cursor-pointer gap-3 hover:bg-blue-600"
          onClick={() => handleLanguageChange(lang)}
        >
          <img
            src={`/assets/images/${lang}.png`}
            className="w-10 rounded"
            alt={`${lang.toUpperCase()} Flag`}
          />
          <span>
            {lang === 'en'
              ? 'English'
              : lang === 'de'
              ? 'Deutsch'
              : lang === 'fr'
              ? 'Française'
              : 'Magyar'}
          </span>
        </div>
      ))}
    </div>
  )}
</div>

          <button>
              <img
                className="w-[400px] h-[130px] mr-11"
                src="/assets/images/bookme (59).webp"
                alt="Microphone Icon"
              />
            </button>

          {/* Search Bar */}
          <div className="flex items-center bg-white pl-1 pr-1 w-full md:w-[1700px] rounded-full gap-1">
          <button onClick={handleMicrophoneClick}>
  <img
    className={`w-[100px] rounded-3xl transition-all duration-300 ${
      isListening ? 'opacity-50' : 'opacity-100'
    } hover:scale-110 hover:shadow-lg hover:shadow-blue-400 hover:border-4 hover:border-blue-400`}
    src="/assets/images/microphone.png"
    alt="Microphone Icon"
  />
</button>

            <input
              type="search"
              className="w-[700px] h-[50px] rounded-3xl border-none text-center text-xl text-sky-600"
              placeholder="Type In What You Are Looking For"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch(searchQuery);
              }}
            />
            <img
              className="w-[110px] rounded hover:scale-110 cursor-pointer"
              src="/assets/images/search.png"
              alt="Search Icon"
              onClick={() => handleSearch(searchQuery)}
            />
          </div>


          {/* Zoom Controls (Aligned to the right) */}
          <div className="flex gap-2 mr-[50px]">
          <button
  onClick={handleZoomIn}
  className="relative group p-2 text-white rounded overflow-hidden"
>
  <img
    className="w-[210px] h-[75px] rounded-md transition-all duration-500 transform group-hover:scale-125 group-hover:translate-y-[-2px] ]"
    src="/assets/images/button plus.webp"
    alt="Zoom In"
  />
</button>

<button
  onClick={handleZoomOut}
  className="relative group p-2 text-white rounded overflow-hidden"
>
  <img
    className="w-[210px] h-[75px] rounded-md transition-all duration-300 transform group-hover:scale-125 group-hover:translate-y-[-2px] ]"
    src="/assets/images/button minus.webp"
    alt="Zoom Out"
  />
</button>

          </div>
        </div>

        {/* Search Results */}
        <div className="mt-8">
          {loading ? (
            <p className="text-center text-4xl text-gray-500">Loading...</p>
          ) : searchResults.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {searchResults.map((result) => (
                <div key={result.id} className="bg-white shadow-lg rounded-lg p-4 w-80">
                  <h2 className="text-2xl font-bold mb-2">{result.title}</h2>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
          ) : (
            searchQuery && (
              <p className="text-center text-2xl text-red-500">
                No results found for "{searchQuery}".
              </p>
            )
          )}
        </div>

        {/* Sidebar and Virtual House */}
        <div className="flex justify-center gap-3 mt-8">
          {/* Left Sidebar Icons */}
          <div className="basis-28">{renderIcons(1, 6)}</div>

          {/* Virtual House */}
          <div className="relative">
            <img
              className="w-[900px] rounded"
              src="/assets/images/bookme (61).webp"
              alt="Virtual House"
            />
          </div>

          {/* Right Sidebar Icons */}
          <div className="basis-28">{renderIcons(7, 12)}</div>
        </div>

        {/* Modal */}
        {selectedIcon && (
          <div className="z-12 border-4 opacity-100 border-gray-700 rounded-3xl w-[80%] max-w-4xl h-[60%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[30%] bg-white p-12 overflow-visible shadow-lg">
            <h1 className="text-5xl font-bold mb-4">{iconDetails[selectedIcon]?.title}</h1>
            <button
              className="absolute bg-red-600 text-white font-extrabold text-3xl px-2 rounded-full -top-4 -right-4"
              onClick={closeModal}
            >
              &times;
            </button>
            <p className="text-3xl font-bold mb-6">
              {iconDetails[selectedIcon]?.description}
            </p>
            <div className="flex justify-around mt-4">
              {iconDetails[selectedIcon]?.img1 && (
                <a href={iconDetails[selectedIcon]?.link1}>
                  <img
                    className="w-20 border-4 rounded-xl  border-green-400 cursor-pointer"
                    src={iconDetails[selectedIcon]?.img1}
                    alt="Single Trades Person"
                  />
                </a>
              )}
              {iconDetails[selectedIcon]?.img2 && (
                <a href={iconDetails[selectedIcon]?.link2}>
                  <img
                    className="w-44 rounded-xl border-4 border-yellow-400 cursor-pointer"
                    src={iconDetails[selectedIcon]?.img2}
                    alt="Multiple Trades People"
                  />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualPage;
