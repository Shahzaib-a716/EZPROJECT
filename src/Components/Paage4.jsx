import React from "react";

const VoIPPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateBack = () => {
    window.history.back();
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white">
      <div className="container mx-auto py-10 px-4 md:py-20">
        <div className="border-4 border-gradient-to-r from-yellow-400 via-red-500 to-purple-500 rounded-xl p-6 md:p-10 text-center">
          <h1 className="font-extrabold text-4xl md:text-6xl mb-6 md:mb-8 animate-bounce tracking-wide">
            VOIP=
          </h1>
          <p className="text-lg md:text-2xl mb-8 md:mb-12 animate-fade-in font-medium">
            You can talk over the internet for next to free long-distance over your mobile phone for a fraction of the price it would cost normally.
          </p>
        </div>

        <div className="border-4 border-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-xl p-6 md:p-10 text-center mt-12 md:mt-16">
          <p className="text-xl md:text-3xl font-semibold mb-4 md:mb-6">
            We make effective Multi-language answering systems for a reasonable price.
          </p>
          <p className="text-2xl md:text-4xl text-black font-bold mt-2 md:mt-4 animate-fade-in animate-pulse">
            WORKING SAMPLES BELOW:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
          <div className="border-4 border-gradient-to-r from-yellow-500 via-orange-400 to-red-500 rounded-xl p-4 md:p-6 text-center animate-slide-in">
            <p className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3 md:mb-4">
              1. English Only
            </p>
            <a
              href="tel:+3614454349"
              className="text-yellow-300 hover:underline font-extrabold text-xl md:text-3xl"
            >
              +361 445 4349
            </a>
            <p className="text-lg md:text-2xl font-bold mt-2">
              Entertaining Voice Mail
            </p>
          </div>
          <div className="border-4 border-gradient-to-r from-green-500 via-blue-400 to-purple-500 rounded-xl p-4 md:p-6 text-center animate-slide-in">
            <p className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3 md:mb-4">
              2. Hungarian & English
            </p>
            <a
              href="tel:+3614454202"
              className="text-yellow-300 hover:underline font-extrabold text-xl md:text-3xl"
            >
              +361 445 4202
            </a>
            <p className="text-lg md:text-2xl font-bold mt-2">
              Press “0” to leave a message for me
            </p>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-3xl md:text-5xl font-bold">
            My name is{" "}
            <span className="text-cyan-300 font-extrabold">LES</span>
          </p>
        </div>

        <div className="space-y-8 md:space-y-12 mt-12 md:mt-16">
          <div className="border-gradient-to-r from-blue-500 via-teal-400 to-green-500 rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 animate-zoom-in">
            <div className="relative pb-[30.25%]">
              <iframe
                title="My universal answering system correction Les.Fixes.All@gmail.com"
                src="https://www.youtube.com/embed/rKjLNKyVGSY"
                className="absolute top-0 left-0 w-1/2 md:w-2/1 lg:w-2/3 h-full rounded-lg shadow-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="border-gradient-to-r from-pink-500 via-red-400 to-yellow-500 rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 animate-zoom-in">
            <div className="relative pb-[30.25%]">
              <iframe
                title="TEST VIDEO FOR OUR VOIP SYSTEM"
                src="https://www.youtube.com/embed/K0fVVHzFFo4"
                className="absolute top-0 left-0 w-1/2 md:w-2/1 lg:w-2/3 h-full rounded-lg shadow-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16 animate-fade-in">
          <a
            href="mailto:Les.fixes.ALL@gmail.com"
            className="text-yellow-300 hover:underline text-2xl md:text-4xl font-bold"
          >
            Les.fixes.ALL@gmail.com
          </a>
        </div>
      </div>

      <button
        onClick={navigateBack}
        className="fixed bottom-5 left-5 p-3 md:p-4 rounded-full transition-transform transform hover:scale-110 flex items-center justify-center"
      >
        <img
          src="/assets/images/button back.webp"
          alt="Back"
          className="h-12 w-12 md:h-[124px] md:w-[124px]"
        />
      </button>

      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 md:p-4 rounded-full transition-transform transform hover:scale-110 flex items-center justify-center"
      >
        <img
          src="/assets/images/button page up.webp"
          alt="Scroll to Top"
          className="h-12 w-12 md:h-[130px] md:w-[110px]"
        />
      </button>
    </div>
  );
};

export default VoIPPage;
