import React from 'react';
import { useLocation } from 'react-router-dom';

const EmergencyPage = () => {
  // Use location hook to get the passed state from the previous page
  const location = useLocation();
  const { textMessage, selectedFiles, audioUrl, videoUrl, imageUrl, formattedDate, selectedTime } = location.state || {};


  return (
    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}>
      <div className="relative flex flex-col gap-4 justify-center items-center">
        {/* Header Section */}
        <h1
          className="m-0 pt-4 text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg shadow-black"
          style={{
            textShadow: 'rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px',
          }}
        >
          <span className="text-red-600">EZ</span>123<span className="text-gray-400">.EU</span>
        </h1>      
        
        
           <div className="flex flex-col gap-4 bg-white p-4 rounded-xl font-bold text-xl md:text-4xl">
          <h1>
            {formattedDate} at {selectedTime},{' '}
            <span className="text-red-500 text-5xl">Emergency</span>,{' '}
            <span className="flex items-center">
              <img 
                src="/assets/images/handy.webp" // Replace with your actual icon path
                alt="Approval Icon"
                className="w-[140px] h-[110px] md:w-[290px] md:h-[220px] mr-2" // Icon size and spacing
              />
              <span className="text-5xl font-bold">waiting for approval</span>
            </span>
          </h1>
          <h1>
            Description: <span>{textMessage || 'No description provided'}</span>
          </h1>

        

          {/* Displaying Files */}
          <div className="grid md:grid-cols-4 mt-3 md:flex-row justify-center gap-2 mx-2 mb-24 md:mb-0">
            {selectedFiles?.map((file, index) => {
              if (file.type === 'image') {
                return (
                  <div key={index} className="flex relative justify-center items-center p-0.5 bg-black">
                    <img src={file.url} alt="selected" className="w-[120px] h-[115px] object-cover" />
                  </div>
                );
              } else if (file.type === 'video') {
                return (
                  <div key={index} className="flex relative justify-center items-center p-0.5 bg-black">
                    <video controls>
                      <source src={file.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                );
              } else if (file.type === 'audio') {
                return (
                  <div key={index} className="flex relative justify-center items-center p-0.5 bg-black">
                    <audio controls>
                      <source src={file.url} />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                );
              }
              return null;
            })}

            {/* Display the standalone video if provided */}
            {videoUrl && (
              <div className="flex relative justify-center items-center p-0.5 bg-black">
                <video controls>
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* Display the standalone image if provided */}
            {imageUrl && (
              <div className="flex relative justify-center items-center p-0.5 bg-black">
                <img src={imageUrl} alt="selected" className="w-[120px] h-[115px] object-cover" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div
        className="text-center pt-1 w-full text-xl text-white font-bold"
        style={{
          textShadow: 'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px',
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright ©
        2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default EmergencyPage;
