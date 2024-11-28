import React from "react";

const PageContainer = () => {
  return (
    <div id="page-container" className="overflow-hidden">
      <header className="bg-gray-100 fixed w-full">
        <div className="flex justify-around py-4 bg-gradient-to-b from-[#FFCC00] to-[#FF6600] text-black text-5xl font-bold text-center">
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

      <main id="et-main-area" className="mt-24">
        <section
          className="relative bg-cover bg-center h-[500px]"
          style={{
            backgroundImage:
              "url('https://ez12.hu//wp-content/uploads/2022/03/135687-engineering-wallpaperdownload-free-awesome-full-hd.jpg')",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
  <div className="w-full bg-blue-500 py-4">
    <h1 className="text-6xl font-bold text-white">Cradle Snatcher</h1>
  </div>
  <div className="w-full bg-yellow-400 py-4">
    <h2 className="text-6xl mt-4 text-black animate-pulse">
      <span className="font-bold">Tow Truck</span>
    </h2>
  </div>

            <p className="text-lg text-white mt-4 px-4 bg-black max-w-3xl">
            Yes General Motors came to my father and told him that they’re going to start to change the way they make cars so that they won’t have the Chrome bumpers anymore they’re going to use plastic on the outside were the bumpers used to be and they need a new way to tow the car’s so that because conventional towing would damage the bumpers. Conventional towing in those days was using a rubber sling which would damage the new plastic bumpers. It took me all but 15 seconds to come up with the idea that to tow by the tires using the shocks of the car in combination with the tow truck that’s pulling at will greatly reduce the stress on the rear part of a tow truck and on the car itself. This just makes common sense to me anybody can figure this out is not a big deal designing and building that’s the big deal I just came up with the idea.


            </p>
          </div>
        </section>

        <section className="p-8 bg-gray-50">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p>
                A device at the end of a boom that would prevent under that boom
                and the boom must be telescopic so that it can be adjusted to
                the type of vehicle you’re towing...
              </p>
            </div>
            <div>
              <img
                className="rounded-lg shadow-lg"
                src="https://proof.ez123.eu/wp-content/uploads/2022/03/thefirstmodel-of-cradle-snatcher.jpg"
                alt="First model of cradle snatcher"
              />
            </div>
          </div>
        </section>

        <section
          className="relative bg-cover bg-center h-[300px]"
          style={{
            backgroundImage:
              "url('https://ez12.hu//wp-content/uploads/2022/03/119888-engineering-wallpaper-data-src-img-982927-hi-tech-1440x900-1.jpg')",
          }}
        >
          <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl text-white">Joint Ventures</h1>
          </div>
        </section>

        <section className="p-8 bg-gray-100">
          <p>
            My father has created some pretty amazing things, and together we
            created truly magnificent things as well. But we had a very big
            problem. We could not work together...
          </p>
        </section>

        <section className="p-8 bg-gray-50">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <img
                className="rounded-lg shadow-lg"
                src="https://proof.ez123.eu/wp-content/uploads/2022/03/future-towtruck-1.jpg"
                alt="Future tow truck"
              />
            </div>
            <div>
              <p>
                The three innovations which I did with my father have to be put
                into separate pages because there is just too much information
                here...
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2024 - Your Website Name</p>
      </footer>
    </div>
  );
};

export default PageContainer;
