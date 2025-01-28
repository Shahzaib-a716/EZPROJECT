import React, { useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [showFullParagraph, setShowFullParagraph] = useState(false);
  const [showImageSectionParagraph, setShowImageSectionParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowFullParagraph(!showFullParagraph);
  };

  const toggleImageSectionParagraph = () => {
    setShowImageSectionParagraph(!showImageSectionParagraph);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Fixed Header */}
      <header className="bg-gray-100 fixed w-full z-50">
        <div className="flex flex-col md:flex-row justify-around py-4 bg-gradient-to-b from-[#FFCC00] to-[#FF6600] text-black text-5xl font-bold text-center gap-6">
          <div className="w-1/2 mt-6">
            <a href="#section1">1. MY ENGINEERING + INVENTIONS</a>
          </div>
          <div className="w-1/2 mt-6">
            <a href="#section2">2. JOINT VENTURES WITH MY FATHER</a>
          </div>
          <div className="w-1/2 mt-6">
            <a href="#section3">3. MY FATHER'S ENGINEERING ONLY</a>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="pt-60 p-6">
        {/* Animated Titles */}
        <div className="text-center mb-20">
          <motion.h1
            className="text-7xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            WELCOME TO MY PAGE
          </motion.h1>
          <motion.h2
            className="text-5xl font-bold text-gray-700 bg-white p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Explore My Engineering Journey
          </motion.h2>
          <div className="mt-8 bg-gray-200 p-6 rounded-lg shadow-md border border-gray-300 w-3/4 mx-auto">
            <p className="text-2xl leading-relaxed">
              {showFullParagraph
                ? `A device at the end of a boom that would prevent under that boom and the boom must be telescopic so that it can be adjusted to the type of vehicle you’re towing and that’s all that my dad needed to create the picture underneath. My arms that came out to hold the tire had to be changed because those rigid arms weren’t good enough to tow all types of vehicles like vans and other things that were unusual sizes so my father came up with the sling which was made out of plastic fiber but it was extremely strong to lift cars in the cradle snatcher was born. You can read the story below but eventually, my father was also the first one to figure out how to tow two cars at the same time using the same’s the same idea but now from underneath the vehicle rather than over the top which you will see the pictures as the tow trucks progressed below now the whole world is using the same kind of method for towing cars. It is safer, more practical, faster, and damage-free.`
                : `A device at the end of a boom that would prevent under that boom and the boom must be telescopic so that it can be adjusted to the type of vehicle you’re towing...`}
            </p>
            <button
              onClick={toggleParagraph}
              className="mt-4 text-blue-500 font-bold underline"
            >
              {showFullParagraph ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>

        {/* New Section with Image on Right */}
        <section className="bg-gray-300 p-6 rounded-lg shadow-md mb-16">
          <div className="flex items-center justify-between">
            {/* Left Side with Paragraph */}
            <div className="w-1/2 pr-8">
              <p className="text-2xl leading-relaxed">
                {showImageSectionParagraph
                  ? `A device at the end of a boom that would prevent under that boom and the boom must be telescopic so that it can be adjusted to the type of vehicle you’re towing and that’s all that my dad needed to create the picture underneath. My arms that came out to hold the tire had to be changed because those rigid arms weren’t good enough to tow all types of vehicles like vans and other things that were unusual sizes so my father came up with the sling which was made out of plastic fiber but it was extremely strong to lift cars in the cradle snatcher was born. You can read the story below but eventually, my father was also the first one to figure out how to tow two cars at the same time using the same’s the same idea but now from underneath the vehicle rather than over the top which you will see the pictures as the tow trucks progressed below now the whole world is using the same kind of method for towing cars. It is safer, more practical, faster, and damage-free.`
                  : `A device at the end of a boom that would prevent under that boom and the boom must be telescopic so that it can be adjusted to the type of vehicle you’re towing...`}
              </p>
              <button
                onClick={toggleImageSectionParagraph}
                className="mt-4 text-blue-500 font-bold underline"
              >
                {showImageSectionParagraph ? "Show Less" : "Show More"}
              </button>
            </div>

            {/* Right Side with Image */}
            <div className="w-1/2">
              <img
                src="/assets/images/My.jpg" // Replace with your image URL
                alt="Engineering"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

       
        <section id="section2" className="mb-16">
  <motion.h2
    className="text-6xl font-extrabold mb-4 text-center bg-yellow-100 p-4 rounded-lg shadow-md"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    JOINT VENTURES WITH MY FATHER
  </motion.h2>

  <div className="mt-8 bg-gray-200 p-6 rounded-lg shadow-md border border-gray-300 w-3/4 mx-auto">
            <p className="text-2xl leading-relaxed">
              {showFullParagraph
                ? `My father has created some pretty amazing things, and together we created truly magnificent things as well. But we had a very big problem. We could not work together. We were a great team, when we could work together because I dreamed it up, he designed it, we prototyped it, and then it went into production after it was patented. We listened to our suppliers, distributors, and customers; improving it.`
                : `My father has created some pretty amazing things, and together we created truly...`}
            </p>
            <button
              onClick={toggleParagraph}
              className="mt-4 text-blue-500 font-bold underline"
            >
              {showFullParagraph ? "Show Less" : "Show More"}
            </button>
          </div>




          <div className="mt-8 bg-gray-200 p-6 rounded-lg shadow-md border border-gray-300 w-3/4 mx-auto">
            <p className="text-2xl leading-relaxed">
              {showFullParagraph
                ? `The three innovations which I did with my father have to be put into separate pages because is just too much information here you can have a little picture of each thing if you want I don’t know if you have a picture of the electric car anymore I have it somewhere but I don’t exactly know it is a picture not available or something like that and the information somewhere else that doesn’t take away from the rest of the page I leave it up to you to figure it out I can see that your creative enough`
                : `The three innovations which I did with my father have to be put into separate pages...`}
            </p>
            <button
              onClick={toggleParagraph}
              className="mt-4 text-blue-500 font-bold underline"
            >
              {showFullParagraph ? "Show Less" : "Show More"}
            </button>
          </div>

  {/* Subsection 1 */}
  <div className="mb-12">
    <motion.h3
      className="text-4xl font-bold mb-4 text-center bg-yellow-200 p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Subsection 1: The First Major Project
    </motion.h3>
    
    {/* Paragraph in Subsection 1 */}
    <div className="mb-6">
      <p className="text-2xl leading-relaxed">
      Within 4 seconds I came up with this except my concept design (I was too young to be an engineer) was the back boom was made entirely of metal.
      </p>
    </div>

    {/* Image below Paragraph */}
    <div className="mb-6">
      <img
        src="/assets/images/project1.jpg" // Replace with the actual image URL
        alt="First Major Project"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>

  {/* Subsection 2 */}
  <div className="mb-12">
    <motion.h3
      className="text-4xl font-bold mb-4 text-center bg-yellow-200 p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Subsection 2: Overcoming Obstacles
    </motion.h3>
    
    {/* Paragraph in Subsection 2 */}
    <div className="mb-6">
      <p className="text-2xl leading-relaxed">
        In this section, we discuss how we overcame some of the major obstacles we faced while working together. From technical difficulties to coordinating with other teams, we found creative ways to overcome challenges.
      </p>
    </div>

    {/* Image below Paragraph */}
    <div className="mb-6">
      <img
        src="/assets/images/obstacles.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>

  {/* Subsection 3 */}
  <div className="mb-12">
    <motion.h3
      className="text-4xl font-bold mb-4 text-center bg-yellow-200 p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Subsection 3: Key Innovations and Ideas
    </motion.h3>
    
    {/* Paragraph in Subsection 3 */}
    <div className="mb-6">
      <p className="text-2xl leading-relaxed">
        Here, we highlight some of the key innovations and ideas that came from our joint ventures. These ideas helped us improve our processes, and even set us apart from others in the industry.
      </p>
    </div>

    {/* Image below Paragraph */}
    <div className="mb-6">
      <img
        src="/assets/images/innovations.jpg" // Replace with the actual image URL
        alt="Key Innovations"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>

  {/* Subsection 4 */}
  <div className="mb-12">
    <motion.h3
      className="text-4xl font-bold mb-4 text-center bg-yellow-200 p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Subsection 4: The Impact of Our Work
    </motion.h3>
    
    {/* Paragraph in Subsection 4 */}
    <div className="mb-6">
      <p className="text-2xl leading-relaxed">
        This section focuses on the impact our joint ventures had on the industry, as well as the legacy we've built. It's rewarding to look back and see how our projects have helped shape the future of engineering and innovation.
      </p>
    </div>

    {/* Image below Paragraph */}
    <div className="mb-6">
      <img
        src="/assets/images/impact.jpg" // Replace with the actual image URL
        alt="Impact of Our Work"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>
        {/* Section 3 */}
        <section id="section3" className="mb-16">
          <motion.h2
            className="text-6xl font-extrabold mb-4 text-center bg-yellow-100 p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            MY FATHER'S ENGINEERING ONLY
          </motion.h2>
          <p className="text-2xl leading-relaxed">
            Information about your father’s engineering work goes here.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Page;
