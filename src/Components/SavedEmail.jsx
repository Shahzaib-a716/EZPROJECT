import React from 'react';


const SavedEmailComponent = () => {
  return  (

    <div className="min-h-screen bg-day bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}>
    <div className="flex flex-col gap-6 justify-center items-center min-h-screen">
      <div className="flex border-s-white border-8 bg-yellow-500 p-8 rounded-2xl flex-col gap-6 justify-center items-center">
        
       
  
        {/* CTA Section with Tooltips */}
        <div className="flex gap-10 justify-around items-center">
          <a className="w-24 md:w-32" href="/LookAround">
            <div className="relative group">
              <img className="hover:-translate-y-1 hover:scale-110 duration-300" src="/assets/images/eyeballs.gif" alt="Eyeballs" />
              <span className="absolute right-full ml-3 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-blue-500 text-white font-bold text-3xl rounded-md px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                JUST LOOK AROUND
                <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-0 h-0 border-l-8 border-l-blue-700 border-t-8 border-t-transparent border-b-8 border-b-transparent"></span>
              </span>
            </div>
          </a>
  
          <img src="/assets/images/smile.png" className="w-24 md:w-40 rounded-full" alt="Like Smile Emoji" title="We're Happy" />
  
          <a className="w-24 md:w-32" href="/FreeRegistration1">
            <div className="relative group">
              <img className="hover:-translate-y-1 hover:scale-110 duration-300" src="/assets/images/clipboard.webp" alt="Clipboard" />
              <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-blue-500 text-white text-3xl font-bold rounded-md px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                FREE BUSINESS REGISTRATION
                <span className="absolute right-full top-1/2 transform -translate-y-1/2 ml-2 w-0 h-0 border-l-8 border-l-blue-700 border-t-8 border-t-transparent border-b-8 border-b-transparent"></span>
              </span>
            </div>
          </a>
        </div>
          {/* Message Section */}
          <div className="border-black  font-bold text-3xl flex flex-col justify-center items-center text-center px-4 border-4 rounded-xl bg-yellow-200 text-2xl">
            <h1 className="md:text-5xl font-extrabold text-blue-800">We Saved Your Email</h1>
            <h1>NO SALES PERSON WILL CALL.</h1>
            <h1>NO FINANCIAL INFORMATION WILL BE ASKED.</h1>
            <h1>NO TECHNICAL SUPPORT REQUIRED.</h1>
            <h1>NO MANUALS TO READ.</h1>
            <h1>...</h1>
            <div className="md:w-1/2">
              <h1 className="text-pink-700 text-4xl break-words text-center">
                WE DON’T NEED TO TRICK OUR CUSTOMERS TO BUY FROM US. WE GIVE GREAT VALUE AND YOUR SATISFACTION IS GUARANTEED.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center pt-1 w-full text-4xl text-white font-bold" style={{ textShadow: 'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px' }}>
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default SavedEmailComponent;
