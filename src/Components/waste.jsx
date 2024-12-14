import React, { useState } from 'react';

const PageComponent = () => {
  const [expandedText, setExpandedText] = useState({
    text1: false,
    text2: false,
    text3: false,
    text4: false,
    text5: false,
    text6: false,
  });

  const toggleText = (key) => {
    setExpandedText((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="overflow-x-hidden">
      <div id="page-container" className="overflow-y-hidden">
        <header className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <p className="text-lg font-semibold">1. MY ENGINEERING + INVENTIONS</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">2. JOINT VENTURES WITH MY FATHER</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">3. MY FATHER'S ENGINEERING ONLY</p>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <section className="relative bg-cover bg-center" style={{ backgroundImage: 'url(https://ez12.hu/wp-content/uploads/2022/03/135687-engineering-wallpaperdownload-free-awesome-full-hd.jpg)' }}>
              <div className="overlay absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 text-center text-white py-16">
                <h2 className="text-4xl font-bold mb-4">Cradle Snatcher</h2>
                <p className="text-xl mb-8">
                  Yes, General Motors came to my father and told him that they’re going to start changing the way they make cars so that they won’t have the Chrome bumpers anymore. They’re going to use plastic on the outside where the bumpers used to be and they need a new way to tow the cars so that conventional towing won’t damage the bumpers. Conventional towing back then used a rubber sling, which would damage the new plastic bumpers. It took me all but 15 seconds to come up with the idea that to tow by the tires using the shocks of the car in combination with the tow truck that’s pulling at will greatly reduce the stress on the rear part of a tow truck and on the car itself. This just makes common sense to me. Anybody can figure this out, it's not a big deal designing and building it, that’s the big deal. I just came up with the idea.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-full">Read More</button>
              </div>
            </section>

            <section className="py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="col-span-1">
                  <p>
                    A device at the end of a boom that would prevent under that boom and the boom must be telescopic so that it can be adjusted...
                  </p>
                  <button className="mt-4 text-blue-500">Learn More</button>
                </div>
                <div className="col-span-1">
                  <img className="w-full h-auto rounded-lg shadow-lg" src="https://proof.ez123.eu/wp-content/uploads/2022/03/thefirstmodel-of-cradle-snatcher.jpg" alt="Cradle Snatcher" />
                </div>
              </div>
            </section>

            <section className="bg-gray-100 py-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">Joint Ventures</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="col-span-1">
                  <p>
                    My father has created some pretty amazing things, and together we created truly magnificent things as well. But we had a very big problem...
                  </p>
                </div>
                <div className="col-span-1">
                  <img className="w-full h-auto rounded-lg shadow-lg" src="https://proof.ez123.eu/wp-content/uploads/2022/03/future-towtruck-1.jpg" alt="Future Tow Truck" />
                </div>
              </div>
            </section>

            <section className="py-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">Innovations</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="col-span-1">
                  <p>
                    Within 4 seconds, I came up with this, except my concept design (I was too young to be an engineer) was the back boom made entirely of metal...
                  </p>
                </div>
                <div className="col-span-1">
                  <img className="w-full h-auto rounded-lg shadow-lg" src="https://proof.ez123.eu/wp-content/uploads/2022/03/eetowtruckonep.jpg" alt="Tow Truck" />
                </div>
              </div>
            </section>

            {/* TowTruckComponent merged here */}
            <div className="container mx-auto p-4">
              {/* Section 1 */}
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-4">
                  <p className="text-center">
                    After going into the tow truck business we created the world’s first tow truck that could take a car out of a parked place. This joint venture with my dad and I put Vulcan on the map. I regret having come up with this idea. The police forces around the world particularly liked this one.
                  </p>
                  <button
                    onClick={() => toggleText('text1')}
                    className="mt-4 text-blue-500"
                  >
                    {expandedText.text1 ? 'Collapse' : 'Read More'}
                  </button>
                  {expandedText.text1 && (
                    <div>
                      <p>
                        Later models were made with fancier colors and other newly improved features. My dad came up with many innovative variations to what this thing could lift.
                      </p>
                    </div>
                  )}
                </div>
                <div className="lg:w-1/2 p-4">
                  <p className="text-center">MY FATHER'S ENGINEERING ONLY</p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-4">
                  <p>
                    For now, see my dad’s designs first, Mine are further down. I came up with the first tow truck idea, the “hook lift,” the bike lift, the bicycle, and the software. All the patents are in our names so you can check if you want.
                    When I came to Europe years ago, I had already made 20 improvements to the hook lift. I still have my father’s original design and in 30 years the design of the hook has not changed. I just can’t believe it. It is exactly the same.
                    I just came up with the ideas and made the prototypes and my dad did all the engineering and calculations and Vulcan made most of the money until Mr. Alms' kids screwed everything up including not giving my father all his severance pay. Disgusting!!!!
                  </p>
                  <button
                    onClick={() => toggleText('text2')}
                    className="mt-4 text-blue-500"
                  >
                    {expandedText.text2 ? 'Collapse' : 'Read More'}
                  </button>
                  {expandedText.text2 && (
                    <div>
                      <p>Disgusting!!!!</p>
                    </div>
                  )}
                </div>
                <div className="lg:w-1/2 p-4">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/YDEtZxsZyBc?feature=oembed"
                    title="dadsproweb-intro"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Section 3 */}
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-4">
                  <h3 className="text-center">During W.W.2</h3>
                  <p>
                    He created a crank pump for all kinds of liquids, including gas for planes, so they wouldn't have to carry fuel. My father sold these to all the airplane refueling stations around the world.
                  </p>
                  <button
                    onClick={() => toggleText('text3')}
                    className="mt-4 text-blue-500"
                  >
                    {expandedText.text3 ? 'Collapse' : 'Read More'}
                  </button>
                  {expandedText.text3 && (
                    <div>
                      <p>He sold these to all the airplane refueling stations around the world.</p>
                    </div>
                  )}
                </div>
                <div className="lg:w-1/2 p-4">
                  <img
                    className="rounded-lg shadow-lg"
                    src="https://proof.ez123.eu/wp-content/uploads/2022/03/eetowtruckonep.jpg"
                    alt="Tow Truck"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageComponent;
