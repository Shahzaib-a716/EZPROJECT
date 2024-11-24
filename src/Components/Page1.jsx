import React, { useState, useEffect } from "react";

const UrbanAssaultVehiclePage = () => {
  const [showMore, setShowMore] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Trigger animations on page load
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // Delay to start animations
    return () => clearTimeout(timer);
  }, []);

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
          <a
            href="https://ez12.hu//wp-content/uploads/2022/02/SEXIER-PIC-OF-BIKE.jpg"
            className="block mx-auto w-full max-w-lg"
          >
            <img
              src="https://ez12.hu//wp-content/uploads/2022/02/SEXIER-PIC-OF-BIKE.jpg"
              alt="SEXIER-PIC-OF-BIKE"
              className="rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
            />
          </a>
        </div>

        {/* Button Section */}
        <div className="text-center my-8 ">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-block bg-yellow-600 text-white text-3xl px-6 py-3 mt-11 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            {showMore ? "Hide Details" : "Click Here for More Details"}
          </button>
        </div>
      </div>

      {/* Hidden Section with New Gradient */}
      {showMore && (
        <div className=" py-12 text-white transition-opacity duration-700 ease-in-out">
          {/* Video Section */}
          <div className="my-12">
            <h2 className="text-center font-bold text-black text-5xl mb-4">
              Interview Video
            </h2>
            <div className="relative w-full h-[550px] max-w-3xl mx-auto aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/C7JAMJPU3Yg?feature=oembed"
                title="Interview Video"
                className="w-full h-full rounded-lg shadow-lg"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  src: "https://ez12.hu//wp-content/uploads/2022/03/solar_bike2.jpg",
                  alt: "solar_bike2",
                },
                {
                  src: "https://ez12.hu//wp-content/uploads/2022/03/f04b886775210495c274b9c3514dc502ecaa586e2a63040818-pimgpsh_fullsize_distr.jpg",
                  alt: "article-image-1",
                },
                {
                  src: "https://ez12.hu/wp-content/uploads/2022/05/3.jpeg",
                  alt: "article-image-2",
                },
                {
                  src: "https://ez12.hu/wp-content/uploads/2022/05/artical-hh-dad-2.jpg",
                  alt: "article-image-3",
                },
                {
                  src: "https://ez12.hu/wp-content/uploads/2022/05/18-2.jpeg",
                  alt: "article-image-4",
                },
                {
                  src: "https://ez12.hu/wp-content/uploads/2022/05/french-article.jpg",
                  alt: "french-article",
                },
              ].map((image, index) => (
                <a key={index} href={image.src} className="block">
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
      )}
    </div>
  );
};

export default UrbanAssaultVehiclePage;
