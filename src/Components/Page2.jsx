import React, { useState } from "react";

const PageContent = () => {
  const [showFullText, setShowFullText] = useState(false); // Toggle for paragraph expansion

  return (
    <div id="page-container">
      <div id="main-content">
        {/* Section 1: Fashion And All Type of Photography */}
        <section className="min-h-[280px] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center animate-bounceIn">
            Fashion And All Types of Photography
          </h2>
        </section>

        {/* Section 2: Expandable Paragraph (No gap, Black Background) */}
        <section className="bg-black py-12 animate-slideUp">
          <div className="bg-black shadow-lg rounded-lg p-6 sm:p-12 max-w-7xl mx-auto">
            <p className="text-white text-2xl text-center">
              {showFullText
                ? `I started a photographic company when I was 14 years old and ended up doing
                fashion photography for 25 years. I even had my own darkroom and developed
                all my own prints and films. I ended up working for some police agencies in
                the U.S. because I merged with a Company that got Military Intelligence
                contracts from the Americans. THE WORK WAS VERY DANGEROUS BUT THE MONEY WAS
                VERY GOOD. We even had our own aircraft to fly over Columbia to photograph
                the poppy fields. That was before drones. After a few close calls, I decided
                that I would go back to the fashion world and ended up creating all kinds of
                professional photographic Equipment with my partner using lots of Electronics.
                He was an Electronics and Electrical Engineer and designed all the
                telecommunications for all the police organizations. So I went back to school
                to Take electronics and I had so many job offers, that when I got out of
                school, I decided not to go back to my company. But we had one of the best
                photo studios in Toronto, with some of the best hair stylists and makeup
                artists in the business. Our Mandate was simple. Give excellent service,
                deliver an excellent product for a reasonable price and make sure every
                customer is happy when they walk out the door. A happy customer is always a
                return customer.`
                : "I started a photographic company when I was 14 years old and ended up doing fashion photography for 25 years."}
            </p>
            <div className="text-center mt-4">
              <button
                onClick={() => setShowFullText(!showFullText)}
                className="inline-block text-white bg-purple-600 hover:bg-purple-700 text-2xl font-semibold px-6 py-2 rounded-lg"
              >
                {showFullText ? "Show Less" : "Read More"}
                <span className={`ml-2 transition-transform ${showFullText ? "rotate-180" : ""}`}>
                  ⬇
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Image Grid */}
        <section className="px-6 sm:px-12 mb-16 bg-black">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[ 
              {
                src: "https://proof.ez123.eu/wp-content/uploads/2022/03/pasted-image-688x635-1.jpg",
                alt: "Image 1",
              },
              {
                src: "https://proof.ez123.eu/wp-content/uploads/2022/03/pasted-image-703x462-1.jpg",
                alt: "Image 2",
              },
              {
                src: "https://proof.ez123.eu/wp-content/uploads/2022/03/pasted-image-278x606-1.jpg",
                alt: "Image 3",
              },
              {
                src: "https://proof.ez123.eu/wp-content/uploads/2022/03/pasted-image-402x583-1.jpg",
                alt: "Image 4",
              },
            ].map((image, index) => (
              <div key={index} className="relative group animate-slideInFromSide">
                <a href={image.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg shadow-lg hover:opacity-90 transition-opacity transform group-hover:scale-105"
                  />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PageContent;
