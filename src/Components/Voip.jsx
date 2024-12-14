import React from 'react';

const VoIPPage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white">
      <div className="container mx-auto py-20">
        <div className="border-4 border-gradient-to-r from-yellow-400 via-red-500 to-purple-500 rounded-xl p-10 text-center">
          <h1 className="font-extrabold text-6xl mb-8 animate-bounce tracking-wide">
            VOIP=
          </h1>
          <p className="text-2xl mb-12 animate-fade-in font-medium">
            You can talk over the internet for next to free long-distance over your mobile phone for a fraction of the price it would cost normally.
          </p>
        </div>

        <div className="border-4 border-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-xl p-10 text-center mt-16">
          <p className="text-3xl font-semibold mb-6">
            We make effective Multi-language answering systems for a reasonable price.
          </p>
          <p className="text-4xl text-black font-bold mt-4 animate-fade-in animate-pulse">
            WORKING SAMPLES BELOW:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="border-4 border-gradient-to-r from-yellow-500 via-orange-400 to-red-500 rounded-xl p-6 text-center animate-slide-in">
            <p className="text-3xl font-extrabold text-gray-800 mb-4">1. English Only</p>
            <a href="tel:+3614454349" className="text-yellow-300 hover:underline font-extrabold text-3xl">
              +361 445 4349
            </a>
            <p className="text-2xl font-bold mt-2">Entertaining Voice Mail</p>
          </div>
          <div className="border-4 border-gradient-to-r from-green-500 via-blue-400 to-purple-500 rounded-xl p-6 text-center animate-slide-in">
            <p className="text-3xl font-extrabold text-gray-800 mb-4">2. Hungarian & English</p>
            <a href="tel:+3614454202" className="text-yellow-300 hover:underline font-extrabold text-3xl">
              +361 445 4202
            </a>
            <p className="text-2xl font-bold mt-2">Press “0” to leave a message for me</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-5xl font-bold">
            My name is <span className="text-cyan-300 font-extrabold">LES</span>
          </p>
        </div>

        <div className="space-y-12 mt-16">
          <div className="border-4 border-gradient-to-r from-blue-500 via-teal-400 to-green-500 rounded-xl p-4 transform transition duration-500 hover:scale-105 animate-zoom-in">
            <iframe
              title="My universal answering system correction Les.Fixes.All@gmail.com"
              src="https://www.youtube.com/embed/rKjLNKyVGSY"
              className="w-full h-96 rounded-lg shadow-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="border-4 border-gradient-to-r from-pink-500 via-red-400 to-yellow-500 rounded-xl p-4 transform transition duration-500 hover:scale-105 animate-zoom-in">
            <iframe
              title="TEST VIDEO FOR OUR VOIP SYSTEM"
              src="https://www.youtube.com/embed/K0fVVHzFFo4"
              className="w-full h-96 rounded-lg shadow-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <a href="mailto:Les.fixes.ALL@gmail.com" className="text-yellow-300 hover:underline text-2xl font-bold">
            Les.fixes.ALL@gmail.com
          </a>
        </div>

        <div className="flex justify-center space-x-16 mt-16 animate-fade-in">
          <a href="https://ez12.hu/" className="transform transition duration-500 hover:scale-110">
            <img
              src="https://ez12.hu//wp-content/uploads/2022/03/WhatsApp_Image_2022-03-04_at_10.25.23_AM-removebg-preview.png"
              alt="WhatsApp Preview"
              className="w-64 h-auto rounded-lg shadow-lg border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
          </a>
          <a href="https://hm.ez123.eu/robbie/proof/" className="transform transition duration-500 hover:scale-110">
            <img
              src="https://proof.ez123.eu/wp-content/uploads/2024/07/back-buttton-150x150.webp"
              alt="Back Button"
              className="w-64 h-64 rounded-lg shadow-lg border-4 border-gradient-to-r from-green-500 via-yellow-400 to-red-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VoIPPage;
