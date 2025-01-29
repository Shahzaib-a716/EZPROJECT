import React, { useState } from "react";

const PhotographyPage = () => {
  // State to manage whether the paragraph is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to navigate back
  const navigateBack = () => {
    window.history.back();
  };

  return (
    <div className="bg-gray-50 font-sans">
      <div id="page-container" className="min-h-screen">
        <div id="main-content">
          <article className="post page">
            <div className="entry-content">
              {/* Section 1 */}
              <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h[200px] text-white py-10">
                <div className="max-w-8xl h-[100px] mt-[100px] mx-auto px-4">
                  <div className="text-center ">
                  <h2 className="text-6xl font-bold text-white animate-pulse shadow-2xl hover:shadow-4xl transition-shadow duration-300 transform hover:scale-900">
                      <span className="inline-block">
                        Fashion And All Type Of Photography
                      </span>
                    </h2>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="bg-black py-10">
  <div className="max-w-7xl mx-auto px-4 text-center text-white">
    {/* Text Section */}
    <div className="mb-8">
      <p className="text-gray-300 text-3xl font-bold leading-relaxed">
        {/* Show only one line if not expanded, otherwise show full text */}
        {isExpanded ? (
          <>
            I started a photographic company when I was 14 years old and ended up doing fashion photography for 25 years. I even had my own darkroom and developed all my own prints and films. I ended up working for some police agencies in the U.S. because I merged with a Company that got Military Intelligence contracts from the Americans. THE WORK WAS VERY DANGEROUS BUT THE MONEY WAS VERY GOOD. We even had our own aircraft to fly over Columbia to photograph the poppy fields. That was before drones. After a few close calls, I decided that I would go back to the fashion world and ended up creating all kinds of professional photographic Equipment with my partner using lots of Electronics. He was an Electronics and Electrical Engineer and designed all the telecommunications for all the police organizations. So I went back to school to Take electronics and I had so many job offers, that when I got out of school, I decided not to go back to my company. But we had one of the best photo studios in Toronto, with some of he best hair stylists and make up artists in the business. Our Mandate was simple. Give excellent service, deliver an excellent product for a reasonable price and make sure every customer is happy when they walk out the door. A happy customer is always a return customer.
          </>
        ) : (
          "I started a photographic company when I was 14 years old and ended up doing fashion photography for 25 years..."
        )}
      </p>
      <button
        onClick={toggleReadMore}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <img
        src="https://proof.ez123.eu/wp-content/uploads/2022/03/pasted-image-688x635-1.jpg"
        alt="Photography"
        className="w-full h-auto object-cover rounded shadow-md"
      />
      <img
        src="https://proof.ez123.eu/wp-content/uploads/2022/03/pasted-image-703x462-1.jpg"
        alt="Photography"
        className="w-full h-auto object-cover rounded shadow-md"
      />
      <img
        src="https://proof.ez123.eu/wp-content/uploads/2022/03/pasted-image-278x606-1.jpg"
        alt="Photography"
        className="w-[150px] h-auto object-cover rounded shadow-md"
      />
      <img
        src="https://proof.ez123.eu/wp-content/uploads/2022/03/pasted-image-402x583-1.jpg"
        alt="Photography"
        className="w-[200px] h-auto object-cover rounded shadow-md"
      />
    </div>
  </div>
</section>
<section className="bg-blue-400 py-10">
  <div className="max-w-7xl mx-auto px-4 text-center text-white">
    {/* Text Section */}
    <div className="mb-[50px]">
      <p className="text-gray-300 text-4xl font-bold leading-relaxed">
        MY OLD PICTURE
      </p>
    </div>

    {/* Image Section */}
    <div className="flex justify-center items-center">
      <img
        src="/assets/images/lorna.jpg"
        alt="Photography"
        className="w-[400px] h-auto object-cover rounded shadow-md transition-transform transform hover:scale-110 hover:translate-y-[-20px]"
      />
    </div>

    {/* Border Line Animation Section */}
    <div className="mt-8 relative">
      <div className="absolute inset-x-0 bottom-0 h-[25px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-80 animate-pulse"></div>
    </div>




  </div>
  </section>
<section className="bg-blue-400 py-10">
  <div className="max-w-7xl mx-auto px-4 text-center text-white">
    {/* Text Section */}
    <div className="mb-[50px]">
    <p className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 leading-tight drop-shadow-2xl">
        PORTFOLIO
      </p>
    </div>

    {/* Image Section */}
    <div className="flex justify-center items-center">
      <img
        src="/assets/images/fashio2.gif"
        alt="Photography"
        className="w-[600px] h-auto object-cover rounded shadow-md transition-transform transform hover:scale-110 hover:translate-y-[-20px]"
      />
    </div>

    {/* Border Line Animation Section */}
    <div className="mt-8 relative">
      <div className="absolute inset-x-0 bottom-0 h-[25px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-80 animate-pulse"></div>
    </div>




  </div>
  </section>
<section className="bg-blue-400 py-10">
  <div className="max-w-7xl mx-auto px-4 text-center text-white">
    {/* Text Section */}
    <div className="mb-[50px]">
    <p className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 leading-tight drop-shadow-2xl">
        CONTACT SHEETS
      </p>
    </div>

    {/* Image Section */}
    <div className="flex justify-center items-center">
      <img
        src="https://proof.ez123.eu/wp-content/uploads/2022/03/Image0002s.jpg"
        alt="Photography"
        className="w-[700px] h-auto object-cover rounded shadow-md transition-transform transform hover:scale-110 hover:translate-y-[-20px]"
      />
    </div>

    




  </div>
  </section>
  <section className="bg-blue-400 py-10">
  <div className="max-w-7xl mx-auto px-4 text-center text-white">
    {/* Text Section */}
    <div className="mb-[50px]">
      <p className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 leading-tight drop-shadow-2xl">
        PORTRAITS
      </p>
    </div>

    {/* Main Image Section */}
    <div className="flex justify-center items-center">
      <img
        alt="Photography"
        src="/assets/images/fasho7.jpg"
        className="w-[700px] h-auto object-cover rounded shadow-md transition-transform transform hover:scale-110 hover:translate-y-[-20px]"
      />
    </div>

    

    {/* Additional Images Section */}
    <div className="mt-10 space-y-8">
      {[
        "port2.jpg",
        "port3.jpg",
        "port4.jpeg",
        "port5.jpg",
        "port6.jpg",
        "port7.jpeg",
        "port8.jpg",
        "port9.jpg",
        "port10.jpeg",
      ].map((fileName, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            alt={`port ${index + 1}`}
            src={`/assets/images/${fileName}`}
            className="w-[700px] h-auto object-cover rounded shadow-md transition-transform transform hover:scale-110 hover:translate-y-[-20px]"
          />
        </div>
      ))}

      {/* Border Line Animation Section */}
    <div className="mt-8 relative">
      <div className="absolute inset-x-0 bottom-0 h-[25px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-80 animate-pulse"></div>
    </div>
    </div>
  </div>

  </section>
  <section className="bg-blue-400 py-10">
  <div className="max-w-7xl mx-auto px-4 text-center text-white">
    {/* Text Section */}
    <div className="mb-[50px]">
      <p className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 leading-tight drop-shadow-2xl">
        FASHIONS PICTURE
      </p>
    </div>

    {/* Main Image Section */}
    <div className="flex justify-center items-center">
      <img
        alt="Photography"
        src="/assets/images/fash1.jpg"
        className="w-[700px] h-auto object-cover rounded shadow-md transition-transform transform hover:scale-110 hover:translate-y-[-20px]"
      />
    </div>

    

    {/* Additional Images Section */}
    <div className="mt-10 space-y-8">
      {[
        "fash2.jpg",
        "fash3.gif",
        "fash4.jpg",
        "fash5.jpg",
        "fash6.jpg",
        "fash7.jpg",
        "fash8.jpg",
       
      ].map((fileName, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            alt={`port ${index + 1}`}
            src={`/assets/images/${fileName}`}
            className="w-[700px] h-auto object-cover rounded shadow-md transition-transform transform hover:scale-110 hover:translate-y-[-20px]"
          />
        </div>
        
      ))}
      {/* Border Line Animation Section */}
    <div className="mt-8 relative">
      <div className="absolute inset-x-0 bottom-0 h-[25px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-80 animate-pulse"></div>
    </div>
    </div>
  </div>

</section>
              {/* Additional Section */}
              <section className="bg-gray-600 py-10">
                <div className="max-w-7xl mx-auto px-4">
                  <h3 className="text-5xl font-semibold text-blue-800 mb-4">
                    About Me
                  </h3>
                  <p className="text-yellow-500 text-3xl font-bold leading-relaxed">
                    With a passion for photography, I have explored various
                    facets of this art form, from portraits to landscapes.
                    Every click captures a story, a moment frozen in time. Join
                    me in celebrating the beauty of life through the lens.
                  </p>
                </div>
              </section>
            </div>
          </article>
        </div>
          {/* Back to Top Button (Bottom-right) */}
      <div
        className="fixed bottom-8 right-8 p-4 rounded-full cursor-pointer transition transform hover:scale-110"
        onClick={scrollToTop}
      >
         <img
            src="/assets/images/button page up.webp"
            alt="Go Back"
            className="w-[110px] h-[130px] hover:opacity-80 transition duration-300 transform hover:scale-110"
          />
        
      </div>

      {/* Back Button (Bottom-left) */}
      <div className="fixed bottom-8 left-8">
        <a href="/Proof" className="inline-block">
          <img
            src="/assets/images/button back.webp"
            alt="Go Back"
            className="w-[120px] h-[120px] hover:opacity-80 transition duration-300 transform hover:scale-110"
          />
        </a>
      </div>
      </div>
    </div>
  );
};

export default PhotographyPage;
