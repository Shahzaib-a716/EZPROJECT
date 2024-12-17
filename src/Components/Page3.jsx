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
        <section className="p-8 bg-blue-500 shadow-transparent">
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
            <p className="text-3xl text-white"> English movie test with sound effects</p>

            <p className="text-3xl text-white mt-11">Hungarian movie of the same thing with ww2 sound effects in the background. </p>
          </div>
        </section>

        <section className=" bg-yellow-500 shadow-transparent">
          <div className=" items-center">
            <div>
              <p className="text-8xl   text-center font-extrabold px-4 text-black bg-gray-300 shadow-2xl max-w-full">
                JOINT VENTURES
              </p>
            </div>
            <div>
              
            
            </div>
           
          </div>
        </section>

        <section className="p-8 bg-yellow-500 shadow-transparent">
          <div className="grid  gap-6 items-center">
            <div>
              <p className="text-3xl text-white mt-14 font-bold px-4 bg-gray-300 shadow-2xl max-w-full">
              My father has created some pretty amazing things, and together we created truly magnificent things as well. But we had a very big problem. We could not work together. We were a great team, when we could work together because I dreamed it up, he designed it, we prototyped it, and then it went into production after it was patented. We listened to our suppliers, distributors, and customers; improving it.
              </p>
            </div>
            <div>
              
            
            </div>
           
          </div>
        </section>

        <section className="p-8 bg-yellow-500 shadow-transparent">
          <div className="grid  gap-6 items-center">
            <div>
              <p className="text-3xl text-white mt-14 font-bold px-4 bg-gray-300 shadow-2xl max-w-full">
              The three innovations which I did with my father have to be put into separate pages because is just too much information here you can have a little picture of each thing if you want I don’t know if you have a picture of the electric car anymore I have it somewhere but I don’t exactly know it is a picture not available or something like that and the information somewhere else that doesn’t take away from the rest of the page I leave it up to you to figure it out I can see that your creative enough
              </p>
            </div>
            <div>
              
            
            </div>
           
          </div>
        </section>

        <section className="p-8 bg-blue-500 shadow-transparent">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-3xl text-white mt-14 font-bold px-4 bg-gray-300 shadow-2xl max-w-6xl">
              Within 4 seconds I came up with this except my concept design (I was too young to be an engineer) was the back boom was made entirely of metal.
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

        <section className="p-8 bg-blue-500 shadow-transparent">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-3xl text-white mt-14 font-bold px-4 bg-gray-300 shadow-2xl max-w-6xl">
              My dad made the design much better by putting straps on it. Below was one of the first ones we made for testing purposes. Later we added colors and other toys. It didn’t have a name yet in the picture below. I didn’t come up with the name but tow truck drivers loved the product. We listened to what our distributors told us and made the modifications to the tow truck to make it more appealing to both the tow truck independent and the big companies.
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

        <section className="p-8 bg-blue-500 shadow-transparent">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-3xl text-white mt-14 font-bold px-4 bg-gray-300 shadow-2xl max-w-6xl">
              I created the idea behind this mechanism above when I was 15 Not bad for a kid, eh??? My company my dad was working for made Millions The Company? Vulcan Equipment I remember that Vulcan Equipment, that that time on 95 Research Rd., and had a prototype within 6 months and had sold a whole whack of them to the Police. I am very sorry to admit to the fact that you can thank me for designing the first town truck, that could tow a car out of a parked place.
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
