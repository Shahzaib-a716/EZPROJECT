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
      Videos of Work
    </h1>
    <p className="text-3xl text-gray-300 font-extrabold tracking-wide shadow-2xl animate-pulse mt-4">
      Before and After
    </p>
    
  </div>
  <div className="absolute bottom-0 left-0 right-0 flex justify-center z-0">
    <div className="w-24 h-24 bg-pink-600 rounded-full opacity-98 animate-bounce"></div> {/* Decorative bouncing element */}
  </div>
</section>

                  {/* Introduction Videos */}
                  <section className="bg-green-600 py-10">
                  <div className="text-center text-white mt-10">
    <p className="text-6xl font-bold tracking-wider ">
      <span className="block bg-gradient-to-r from-black via-blue-600 to-purple-500 text-transparent bg-clip-text">
        INTRODUCTION
      </span>
      <span className="mt-2 block text-2xl font-medium mb-6 text-gray-200 animate-pulse">
        Discover our vision and mission
      </span>
    </p>
  </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-12">
                      <div>
                        <iframe
                          title="new intro 001"
                          src="https://www.youtube.com/embed/vJHkVAFapxw?feature=oembed"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full aspect-video rounded-md shadow-lg"
                        ></iframe>
                      </div>
                      <div>
                        <iframe
                          title="handyman"
                          src="https://www.youtube.com/embed/oeKsbYezH-I?feature=oembed"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full aspect-video rounded-md shadow-lg"
                        ></iframe>
                      </div>
                    </div>
                  </section>

                  {/* Before and After Section */}
                  <section className="bg-blue-700 py-10">
                    <div className="text-center mb-8">
                      <p className="text-4xl font-bold">Before and After Videos</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8">
                      {/* List of videos */}
                      {[
                        {
                          title: 'CUSTOM FOLDABLE SHOWER HEAD',
                          src: 'https://www.youtube.com/embed/n0LYWEXrYZ0?feature=oembed',
                        },
                        {
                          title: 'RAILING AND STEPS SANDED AND STAINED',
                          src: 'https://www.youtube.com/embed/Jt5TtM8SQ8E?feature=oembed',
                        },
                        {
                          title: 'WINDOW FRAMING',
                          src: 'https://www.youtube.com/embed/zXnB901TChw?feature=oembed',
                        },
                        {
                          title: 'FLOOR REPAIR',
                          src: 'https://www.youtube.com/embed/Mg3BX7qKYhM?feature=oembed',
                        },
                        {
                          title: 'SINK MODIFICATION',
                          src: 'https://www.youtube.com/embed/Ew8f1GY4FkA?feature=oembed',
                        },
                        {
                          title: 'VOLUME 21 ALL KINDS OF STUFF',
                          src: 'https://www.youtube.com/embed/s7OhBs5Xwng?feature=oembed',
                        },
                        {
                          title: 'MORE DECK REPAIRS',
                          src: 'https://www.youtube.com/embed/Bta1Qnfuaqw?feature=oembed',
                        },
                        {
                          title: 'Les the Handyman, Toronto Canada',
                          src: 'https://www.youtube.com/embed/Ow_Fpsy-LfY?feature=oembed',
                        },
                        {
                          title: 'Deck Repairs',
                          src: 'https://www.youtube.com/embed/Z2Up-MOykP4?feature=oembed',
                        },
                        {
                          title: 'Flooring Installation',
                          src: 'https://www.youtube.com/embed/YkP98bRBAMo?feature=oembed',
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
