import React, { useState, useEffect } from "react";

const UrbanAssaultVehiclePage = () => {
 
  const [animate, setAnimate] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Trigger animations on page load
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // Delay to start animations
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll visibility for the "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-100">
      {/* Top Section with Gradient */}
      <div className="bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 py-12 text-white">
        <div className="text-center my-8">
          {/* Header Section */}
          <p
            className={`text-3xl font-extrabold transition-opacity duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            Product Design
          </p>
          <h1
            className={`mt-[23px] text-6xl font-bold transition-opacity duration-1000 delay-200 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            Urban Assault Vehicle
          </h1>
          <p
            className={`mt-[60px] text-3xl font-bold transition-opacity duration-1000 delay-400 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            At the beginning of the UAV (Urban Assault Vehicle), because I was
            told by the new recumbent group, I had to come up with a name.
          </p>
        </div>

        {/* Image Section */}
        <div
          className={`my-22 transition-opacity duration-1000 delay-500 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
         
        </div>

        {/* Button Section */}
       

      {/* Hidden Section with New Gradient */}
       (
        <div className=" py-12 bg-slate-800 transition-opacity duration-700 ease-in-out">
          {/* Video Section */}
          <div className="my-12">
            <h2 className="text-center font-bold text-blue-800 text-5xl mb-4">
              Interview Video
            </h2>
            <div className="relative w-[500px] h-[400px] max-w-3xl bg-black mx-auto aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/C7JAMJPU3Yg?feature=oembed"
                title="Interview Video"
                className="w-[500px] h-[400px] rounded-lg shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Articles Section */}
<div className="my-12">
  <h2 className="text-center text-4xl font-bold text-yellow-500 mb-8">
    Articles
  </h2>
  <div className="flex flex-col bg-slate-800 space-y-8">
    {[
      {
        src: "https://proof.ez123.eu/wp-content/uploads/2022/03/solar_bike2.jpg",
        alt: "solar_bike2",
      },
      {
        src: "https://proof.ez123.eu/wp-content/uploads/2022/03/f04b886775210495c274b9c3514dc502ecaa586e2a63040818-pimgpsh_fullsize_distr.jpg",
        alt: "article-image-1",
      },
      {
        src: "https://proof.ez123.eu/wp-content/uploads/2022/05/3.jpeg",
        alt: "article-image-2",
      },
      {
        src: "https://proof.ez123.eu/wp-content/uploads/2022/05/artical-hh-dad-2.jpg",
        alt: "article-image-3",
      },
      {
        src: "https://proof.ez123.eu/wp-content/uploads/2022/05/18-2.jpeg",
        alt: "article-image-4",
      },
      {
        src: "https://proof.ez123.eu/wp-content/uploads/2022/05/french-article-980x773.jpg",
        alt: "french-article",
      },
      {
        src: "https://proof.ez123.eu/wp-content/uploads/2022/05/Email0004.jpg",
        alt: "french-article",
      },
      {
        src: "https://proof.ez123.eu/wp-content/uploads/2022/05/Email0002.jpg",
        alt: "french-article",
      },
      {
        src: "https://proof.ez123.eu/wp-content/uploads/2022/05/Email0003s.jpg",
        alt: "french-article",
      },
      {
        src: "https://proof.ez123.eu/wp-content/uploads/2022/05/09JUL2002recum.jpg",
        alt: "french-article",
      },
    ].map((image, index) => (
      <a
        key={index}
        href={image.src}
        className="block mx-auto w-full max-w-2xl"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto rounded-lg shadow-lg hover:opacity-90 transition-opacity"
        />
      </a>
    ))}
  </div>
</div>
</div>
)


      {/* Back to Top Button */}
      {showScrollButton && (
        <div
          className="fixed bottom-8 right-8 bg-blue-500 p-4 rounded-full cursor-pointer shadow-lg hover:bg-blue-600 transition transform hover:scale-110"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M19 9l-7-7-7 7M12 2v14"
            />
          </svg>
        </div>
      )}

      {/* Back Button */}
      <div className="fixed bottom-8 left-8">
        <a href="/Proof" className="inline-block">
          <img
            src="/assets/images/button back.webp"
            alt="Go Back"
            className="w-[50px] h-[60px] md:w-[100px] md:h-[100px] hover:opacity-80 transition duration-300 transform hover:scale-110"
          />
        </a>
      </div>
    </div>
    </div>
  );
};

export default UrbanAssaultVehiclePage;
