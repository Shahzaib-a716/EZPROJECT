import React from "react";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const NewsArticles = () => {
  return (
    <div className="page-template page-template-blank custom-background et-tb-has-template">
      <div id="page-container">
        <div id="main-content">
          <article className="post-258412 page type-page status-publish hentry">
            <div className="entry-content">
              <div className="et-l et-l--post">
                {/* Section Header */}
                <div className=" bg-blue-500 et_pb_section et_pb_section_0 et_pb_with_background et_section_regular">
                  <div className="et_pb_row et_pb_row_0">
                    <div className="et_pb_column et_pb_column_4_4 et_pb_css_mix_blend_mode_passthrough">
                      <div className="bg-pink-400 px-10 py-[60px] et_pb_module et_pb_text et_pb_text_1">
                        <div className="et_pb_text_inner">
                          <h1 style={{ textAlign: "center" }}>NEWS ARTICLES</h1>
                          <h3 style={{ textAlign: "center" }}>About Les The Handyman</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="et_pb_row et_pb_row_1">
                    <div className="justify-center et_pb_column et_pb_column_4_4 et_pb_css_mix_blend_mode_passthrough">
                      {[
                        "https://proof.ez123.eu/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-12.23.43-PM.jpeg",
                        "https://proof.ez123.eu/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-12.22.44-PM.jpeg",
                        "https://proof.ez123.eu/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-12.22.44-PM-1.jpeg",
                        "https://proof.ez123.eu/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-12.22.26-PM.jpeg",
                        "https://proof.ez123.eu/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-12.22.26-PM-1.jpeg",
                        "https://proof.ez123.eu/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-12.19.59-PM.jpeg",
                        "https://proof.ez123.eu/wp-content/uploads/2022/05/french-article-980x773.jpg",
                        "https://proof.ez123.eu/wp-content/uploads/2022/05/09JUL2002recum.jpg",
                      ].map((src, index) => (
                        <div className={`et_pb_module et_pb_image et_pb_image_${index}`} key={index}>
                          <span className="et_pb_image_wrap has-box-shadow-overlay">
                            <div className="box-shadow-overlay"></div>
                            <img
                              src={src}
                              alt={`Image ${index}`}
                              loading="lazy"
                              style={{ maxWidth: "70%" }}
                            />
                          </span>
                        </div>
                      ))}
                      {/* Back Button */}
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
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default NewsArticles;
