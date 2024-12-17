import React from 'react';
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const VideosOfWork = () => {
  return (
    <div className="text-center bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA]">
      <div id="page-container">
        <div id="main-content">
          <article id="post-258129" className="page type-page status-publish">
            <div className="entry-content">
              <div className="et-l et-l--post">
                <div className="et_builder_inner_content">
                  {/* Header Section */}
                  <section className="relative bg-cover bg-center py-11 bg-gradient-to-b from-gray-700 via-gray-900 to-black">
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Background overlay */}
  <div className="text-center relative z-10">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide animate-slideUp shadow-2xl">
      HAPPY CUSTOMERS
    </h1>
    <p className="text-3xl text-gray-300 font-extrabold tracking-wide shadow-2xl animate-pulse mt-4">
      VIDEO REVIEWS
    </p>
    
  </div>
  <div className="absolute bottom-0 left-0 right-0 flex justify-center z-0">
    <div className="w-24 h-24 bg-pink-600 rounded-full opacity-98 animate-bounce"></div> {/* Decorative bouncing element */}
  </div>
</section>


                  {/* Before and After Section */}
                  <section className="bg-blue-700 py-10">
                    <div className="text-center mb-8">
                      <p className="text-4xl font-bold text-white">VIDEO REVIEWS</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-12">
                      {/* List of videos */}
                      {[
                        {
                          title: 'CUSTOM FOLDABLE SHOWER HEAD',
                          src: 'https://www.youtube.com/embed/Q8RXdpXce64',
                        },
                        {
                          title: 'RAILING AND STEPS SANDED AND STAINED',
                          src:  'https://www.youtube.com/embed/oeKsbYezH-I',
                        },
                        {
                          title: 'WINDOW FRAMING',
                          src: 'https://www.youtube.com/embed/Ri4uzDy2lV4',
                        },
                        {
                          title: 'FLOOR REPAIR',
                          src: 'https://www.youtube.com/embed/kl51mnLLUWU',
                        },
                        {
                          title: 'SINK MODIFICATION',
                          src: 'https://www.youtube.com/embed/dHinzRjrwaw',
                        },
                        {
                          title: 'VOLUME 21 ALL KINDS OF STUFF',
                          src:  'https://www.youtube.com/embed/KdgZizcVExI',
                        },
                        {
                          title: 'MORE DECK REPAIRS',
                          src: 'https://www.youtube.com/embed/jfRLPSWD9OI',
                        },
                        {
                          title: 'Les the Handyman, Toronto Canada',
                          src: 'https://www.youtube.com/embed/x8U9wLsYlrQ',
                        },
                        {
                          title: 'Deck Repairs',
                          src:  'https://www.youtube.com/embed/9phr0bXMnPM',
                        },
                        {
                          title: 'Flooring Installation',
                          src: 'https://www.youtube.com/embed/PWjUunEhdBc',
                        },



                    
                        {
                          title: 'Cabinet Repairs',
                          src: 'https://www.youtube.com/embed/cEMkeMpr7Lg',
                        },

                        {
                          title: 'Cabinet Repairs',
                          src:  'https://www.youtube.com/embed/tmoI9V0EG_s',
                        },

                        {
                          title: 'Cabinet Repairs',
                          src:  'https://www.youtube.com/embed/LqFYgrxThp0',
                        },
                        {
                          title: 'Cabinet Repairs',
                          src:  'https://www.youtube.com/embed/RRlTSXt3h2o',
                        },
                        {
                          title: 'Cabinet Repairs',
                          src: 'https://www.youtube.com/embed/T9K2FML_Swg',
                        },
                        {
                          title: 'Cabinet Repairs',
                          src: 'https://www.youtube.com/embed/AZam_ASg5PY',
                        },
                        {
                          title: 'Cabinet Repairs',
                          src: 'https://www.youtube.com/embed/IVZoFfnR97w?feature=oembed',
                        },



                      ].map((video, index) => (
                        <div key={index}>
                          <iframe
                            title={video.title}
                            src={video.src}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full aspect-video rounded-md shadow-lg"
                          ></iframe>
                        </div>
                      ))}
                    </div>
                  </section>
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
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default VideosOfWork;
