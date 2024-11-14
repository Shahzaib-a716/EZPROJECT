import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailFormPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'LES123@gmail.com') {
      navigate('/Booking'); // Navigates to the 'recognized' page if email matches
    } else {
      navigate('/unrecognized'); // Navigates to the 'unrecognized' page otherwise
    }
  };

  return (
    <div
      className="min-h-screen bg-day bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}
    >
      <div className="flex flex-col gap-6 justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center w-full">
          <form className="rounded-3xl" onSubmit={handleSubmit}>
            <h1 className="p-2 text-4xl text-center font-extrabold text-red-600"></h1>
            <div className="bg-pink-600 p-2 rounded-xl border-black border">
              <h1 className="p-1 flex justify-center items-center text-center text-xl md:text-3xl font-extrabold">
                ENTER YOUR EMAIL BEFORE CONTINUING
              </h1>
              <div className="flex justify-center items-center border-6 hover:border-blue-500 border-yellow-500 bg-yellow-500 rounded-3xl">
                <input
                  className="border-gray-300 w-full dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md text-3xl p-2 focus:outline-none focus:ring-0 focus:border-transparent hover:placeholder:scale-110 rounded-l-3xl text-center placeholder:text-4xl bg-yellow-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="@"
                  autoFocus
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="w-14 rounded-full">
                  <img src="/assets/images/select.jpg" alt="Submit" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div
        className="text-center pt-1 w-full text-xl text-white font-bold"
        style={{
          textShadow: "2px 0 0 rgb(0, 0, 0), 0 -1px 0 rgb(0, 0, 0), 0 1px 0 rgb(0, 0, 0), -1px 0 0 rgb(0, 0, 0)",
        }}
      >
        All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright ©
        2016 - 2024, Les The Handyman.
      </div>
    </div>
  );
};

export default EmailFormPage;
