import React from 'react';

// Function to scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Function to navigate back
const navigateBack = () => {
  window.history.back();
};

const MotorHomePage = () => {
  return (
    <div id="main-content">
      <article id="post-258991" className="page">
        <div className="entry-content">
          <div className="et-l">
            <div className="et_builder_inner_content">
              {/* Section 1 */}
              <div
                className="relative bg-cover bg-center h-[50vh]"
                style={{
                  backgroundImage: 'url(https://ez12.hu/wp-content/uploads/2022/05/business-14.jpg)',
                }}
              >
                <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-opacity-90 flex items-center justify-center h-full">
                  <div className="text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-300 tracking-wide animate-slideUp shadow-2xl">
                      Motor Home Modification & Customization
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl font-medium">
                      <span className="text-cyan-300 font-bold animate-bounceIn">We can create the environment you wish to live in.</span>{' '}
                      <span className="text-lime-300 font-semibold animate-pulse">
                        You are only as good as the people around you.
                      </span>
                    </p>
                  </div>
                </section>
              </div>

              {/* Section 2 */}
              <div className="bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-500 bg-opacity-90 py-12">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
                  First Motor Home in Europe
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-4">
                  <div>
                    <iframe
                      title="2nd MOTORHOME trailer IN EUROPE"
                      src="https://www.youtube.com/embed/88WEU3huBAs?feature=oembed"
                      className="w-full h-[200px] md:h-[350px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      title="My first Motorhome in Hungary"
                      src="https://www.youtube.com/embed/EzCvS4JkFtU?feature=oembed"
                      className="w-full h-[200px] md:h-[350px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 py-12">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-300 via-black to-gray-900 animate-gradient">
                  2nd Motor Home in Europe
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-4">
                  <div>
                    <iframe
                      title="MY CHINOOK AMERICAN MOTORHOME IN EUROPE"
                      src="https://www.youtube.com/embed/On3WEyhwuL8?feature=oembed"
                      className="w-full h-[200px] md:h-[350px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      title="2000 chinook feature rich motor home"
                      src="https://www.youtube.com/embed/IWE2GiPVl0Q?feature=oembed"
                      className="w-full h-[200px] md:h-[350px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white">
                  My 3rd Motor Home
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-4">
                  <iframe
                    title="2024 NEWEST trailer and Motor home video"
                    src="https://www.youtube.com/embed/5ki5qxfnze4?feature=oembed"
                    className="w-full h-[200px] md:h-[400px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  {/* Additional content can be added here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Fixed Buttons */}
      <button
        onClick={navigateBack}
        className="fixed bottom-5 left-5 p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
      >
        <img
          src="/assets/images/button back.webp"
          alt="Back"
          className="h-[60px] md:h-[124px] w-[60px] md:w-[124px]"
        />
      </button>

      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-4 rounded-full transition-transform transform hover:scale-110 flex items-center justify-center"
      >
        <img
          src="/assets/images/button page up.webp"
          alt="Top"
          className="h-[60px] md:h-[124px] w-[60px] md:w-[124px]"
        />
      </button>
    </div>
  );
};

export default MotorHomePage;
