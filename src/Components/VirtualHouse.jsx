import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const VirtualPage = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isModalPersistent, setIsModalPersistent] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false); // Audio recording state
  const [zoomLevel, setZoomLevel] = useState(1); // Zoom level for the page

  const mediaRecorder = useRef(null);
  const [audioChunks, setAudioChunks] = useState([]);

  // Audio recording handling
  const handleRecording = async () => {
    if (isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
    } else {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.current = new MediaRecorder(stream);
        
        mediaRecorder.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setAudioChunks((prev) => [...prev, event.data]);
          }
        };

        mediaRecorder.current.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          audio.play(); // Play the recorded audio
          setAudioChunks([]); // Clear audio chunks for next recording
        };

        mediaRecorder.current.start();
        setIsRecording(true);
      }
    }
  };

  // Details for each icon
  const iconDetails = {
    1: { /* ... icon details ... */ },
    2: { /* ... icon details ... */ },
    // Add remaining icon details here...
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

  // Zoom in/out functionality
  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 1.5)); // Max zoom level
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.8)); // Min zoom level
  };

  return (
    <div
      className="min-h-screen bg-day bg-no-repeat bg-center bg-cover relative"
      style={{
        backgroundImage: 'url(/assets/images/day.jpg)',
        transform: `scale(${zoomLevel})`,
        transformOrigin: 'center',
      }}
    >
      {/* Top Controls */}
      <div className="flex justify-center rounded  items-center gap-3">
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
            <div className="absolute  w-[200px] left-3 bg-white border rounded shadow-2xl p-2 z-10">
              {['de', 'fr', 'hu'].map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center text-lg rounded cursor-pointer gap-3 hover:bg-gray-200"
                  onClick={() => {
                    setDropdownOpen(false);
                    alert(`Selected language: ${lang}`);
                  }}
                >
                  <img
                    src={`/assets/images/${lang}.png`}
                    className="w-12"
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
          <button onClick={handleRecording} className="shrink-0">
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
          className="w-12 rounded-xl cursor-pointer"
          draggable="false"
          alt="Increase Screen Icon"
          onClick={handleZoomIn}
        />
        <img
          data-te-toggle="tooltip"
          data-te-placement="bottom"
          data-te-ripple-init=""
          data-te-ripple-color="light"
          title="Decrease Screen"
          src="/assets/images/button zoom in.webp"
          className="w-12 rounded-2xl cursor-pointer"
          alt="Decrease Screen Icon"
          onClick={handleZoomOut}
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
                className="mb-3 opacity-90 hover:opacity-100 cursor-pointer transform transition-transform duration-200 hover:scale-105"
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
            className="max-h-[100%] rounded"
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
                className="mb-3 opacity-90 hover:opacity-100 cursor-pointer transform transition-transform duration-200 hover:scale-105"
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
          onMouseEnter={() => setSelectedIcon(selectedIcon)}
          onMouseLeave={() => !isModalPersistent && setSelectedIcon(null)}
        >
          <div className="relative">
            <h1 className="text-5xl font-bold mb-4">{iconDetails[selectedIcon]?.title}</h1>
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl font-bold cursor-pointer" onClick={closeModal} > ✖️ </button> </div> <p>{iconDetails[selectedIcon]?.description}</p> </div> )} </div> ); };

              export default VirtualPage;
