import React, { useState } from "react";

const PageContainer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="page-container" className="overflow-hidden">
      {/* Header Section */}
      <header className="bg-gray-100 fixed w-full">
        <div className="flex flex-col md:flex-row justify-around py-4 bg-gradient-to-b from-[#FFCC00] to-[#FF6600] text-black text-5xl font-bold text-center gap-6">
          <div className="w-1/2 mt-6">
            <p>1. MY ENGINEERING + INVENTIONS</p>
          </div>
          <div className="w-1/2 mt-6">
            <p>2. JOINT VENTURES WITH MY FATHER</p>
          </div>
          <div className="w-1/2 mt-6">
            <p>3. MY FATHER'S ENGINEERING ONLY</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="et-main-area" className="mt-[] w-[90%] mx-auto">
        {/* Section 1 */}
        <section
          className="static bg-cover mt-10 bg-center h-[760px]"
          style={{
            backgroundImage:
              "url('https://ez12.hu//wp-content/uploads/2022/03/135687-engineering-wallpaperdownload-free-awesome-full-hd.jpg')",
          }}
        >
          <div className="flex flex-col items-center bg-gray-300 justify-center h-full text-center gap-4">
            <div className="w-full bg-black shadow-2xl py-4">
              <h1 className="text-5xl font-bold text-white">Cradle Snatcher</h1>
            </div>
            <div className="w-full bg-black py-4 shadow-2xl">
              <h2 className="text-5xl text-white animate-pulse">
                <span className="font-bold">Tow Truck</span>
              </h2>
            </div>
            <div className="text-3xl text-white mt-4 font-bold px-4 bg-gray-300 shadow-2xl max-w-5xl">
              <p
                className={`transition-all duration-300 ease-in-out ${
                  isExpanded ? "max-h-[500px]" : "max-h-[120px]"
                } overflow-hidden`}
              >
                Yes, General Motors came to my father and told him that they’re
                going to start to change the way they make cars so that they
                won’t have the chrome bumpers anymore. They’re going to use
                plastic on the outside where the bumpers used to be, and they
                need a new way to tow the cars because conventional towing would
                damage the bumpers. Conventional towing in those days used a
                rubber sling, which would damage the new plastic bumpers. It
                took me all but 15 seconds to come up with the idea to tow by
                the tires, using the shocks of the car in combination with the
                tow truck that’s pulling it. This would greatly reduce the
                stress on the rear part of a tow truck and on the car itself.
                This just makes common sense to me—anybody can figure this out.
                It’s not a big deal. Designing and building it is the big deal.
                I just came up with the idea.
              </p>
              <div className="flex justify-center mt-2">
                <button
                  onClick={toggleParagraph}
                  className="text-lg font-bold text-yellow-400 cursor-pointer"
                >
                  {isExpanded ? "▲" : "▼"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="p-8 bg-gray-300 shadow-transparent">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-3xl text-white mt-14 font-bold px-4 bg-gray-300 shadow-2xl max-w-6xl">
                A device at the end of a boom that would prevent under that boom
                and the boom must be telescopic so that it can be adjusted to
                the type of vehicle you’re towing...
              </p>
            </div>
            <div>
              <img
                className="rounded-lg shadow-2xl"
                src="https://proof.ez123.eu/wp-content/uploads/2022/03/thefirstmodel-of-cradle-snatcher.jpg"
                alt="First model of cradle snatcher"
              />
            </div>
          </div>
        </section>

        {/* Other Sections... */}
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2024 - Your Website Name</p>
      </footer>
    </div>
  );
};

export default PageContainer;
