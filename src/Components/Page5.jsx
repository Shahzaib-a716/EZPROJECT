import React, { useState } from "react";

const PageContent = () => {
  // State to manage expanding and collapsing of text sections
  const [expandedText, setExpandedText] = useState({});

  const toggleText = (index) => {
    setExpandedText((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-white">
      <div id="page-container" className="container mx-auto px-6">
        <div id="main-content">
          <article id="post-258018" className="post-258018 page type-page status-publish hentry">
            <div className="entry-content">
              <div className="et-l et-l--post">
                <div className="et_builder_inner_content et_pb_gutters3">

                  {/* Section 1 */}
                  <section className="et_pb_section et_pb_section_0 et_pb_with_background bg-[#E0E0E0] py-16">
                    <div className="et_pb_row">
                      <div className="et_pb_column et_pb_column_4_4">
                        <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_center text-3xl font-bold">
                          <p>Clinical Engineering</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2 */}
                  <section className="et_pb_section et_pb_section_1 bg-[#F4F4F4] py-16">
                    <div className="et_pb_row">
                      <div className="et_pb_column et_pb_column_4_4">
                        <div className="et_pb_module et_pb_image et_pb_image_0">
                          <span className="et_pb_image_wrap">
                            <img
                              className="w-full rounded-lg shadow-xl"
                              src="https://ez12.hu//wp-content/uploads/2022/03/olt.jpg"
                              alt="Clinical Engineering"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 3 (with Parallax) */}
                  <section className="et_pb_section et_pb_section_2 bg-cover bg-center"
                           style={{ backgroundImage: 'url("https://ez12.hu//wp-content/uploads/2022/03/119888-engineering-wallpaper-data-src-img-982927-hi-tech-1440x900-1.jpg")' }}>
                    <div className="et_pb_row">
                      <div className="et_pb_column et_pb_column_4_4">
                        <div className="et_pb_module et_pb_text et_pb_text_1 text-center text-white text-2xl p-12">
                          <div className="et_pb_text_inner">
                            <p>
                              I have worked under Mr. Ed Prentke at Metro-Health Medical Centre in the United States...
                            </p>
                          </div>
                          <button
                            onClick={() => toggleText(1)}
                            className="bg-blue-700 text-white py-3 px-6 rounded-xl mt-4 hover:bg-blue-800 text-lg">
                            {expandedText[1] ? 'Collapse' : 'Read More'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4 */}
                  <section className="et_pb_section et_pb_section_3 bg-[#FAFAFA] py-16">
                    <div className="et_pb_row">
                      <div className="et_pb_column et_pb_column_1_2">
                        <div className="et_pb_module et_pb_text et_pb_text_2 text-left sm:text-center text-xl">
                          <div className="et_pb_text_inner">
                            <p>
                              This is a hobby that I want to make eventually into a full-time profession...
                            </p>
                          </div>
                          <button
                            onClick={() => toggleText(2)}
                            className="bg-blue-700 text-white py-3 px-6 rounded-xl mt-4 hover:bg-blue-800 text-lg">
                            {expandedText[2] ? 'Collapse' : 'Read More'}
                          </button>
                        </div>
                      </div>
                      <div className="et_pb_column et_pb_column_1_2">
                        <div className="et_pb_module et_pb_image et_pb_image_1">
                          <a href="https://ez12.hu//wp-content/uploads/2022/03/saliling.jpg" className="et_pb_lightbox_image">
                            <span className="et_pb_image_wrap">
                              <div className="box-shadow-overlay"></div>
                              <img
                                className="w-full rounded-lg shadow-xl"
                                src="https://ez12.hu//wp-content/uploads/2022/03/saliling.jpg"
                                alt="Saliling"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 5 */}
                  <section className="et_pb_section et_pb_section_4 bg-[#F4F4F4] py-16">
                    <div className="et_pb_row">
                      <div className="et_pb_column et_pb_column_4_4">
                        <div className="et_pb_module et_pb_text et_pb_text_3 text-center text-xl">
                          <div className="et_pb_text_inner">
                            <p>
                              Mr. Ed Prentke and I designed all kinds of things together...
                            </p>
                          </div>
                          <button
                            onClick={() => toggleText(3)}
                            className="bg-blue-700 text-white py-3 px-6 rounded-xl mt-4 hover:bg-blue-800 text-lg">
                            {expandedText[3] ? 'Collapse' : 'Read More'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 6 */}
                  <section className="et_pb_section et_pb_section_5 bg-[#E0E0E0] py-16">
                    <div className="et_pb_row">
                      <div className="et_pb_column et_pb_column_1_2">
                        <div className="et_pb_module et_pb_image et_pb_image_2">
                          <a href="https://ez12.hu//wp-content/uploads/2022/03/Ulntitled-Scanned-099.jpg" className="et_pb_lightbox_image">
                            <span className="et_pb_image_wrap">
                              <div className="box-shadow-overlay"></div>
                              <img
                                className="w-full rounded-lg shadow-xl"
                                src="https://ez12.hu//wp-content/uploads/2022/03/Ulntitled-Scanned-099.jpg"
                                alt="Untitled Image"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="et_pb_column et_pb_column_1_2">
                        <div className="et_pb_module et_pb_image et_pb_image_3">
                          <a href="https://ez12.hu//wp-content/uploads/2022/03/Ulntitled-Scanned-099.jpg" className="et_pb_lightbox_image">
                            <span className="et_pb_image_wrap">
                              <div className="box-shadow-overlay"></div>
                              <img
                                className="w-full rounded-lg shadow-xl"
                                src="https://ez12.hu//wp-content/uploads/2022/03/Ulntitled-Scanned-099.jpg"
                                alt="Untitled Scanned Image"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 7 */}
                  <section className="et_pb_section et_pb_section_6 bg-[#FAFAFA] py-16">
                    <div className="et_pb_row">
                      <div className="et_pb_column et_pb_column_4_4">
                        <div className="et_pb_module et_pb_text et_pb_text_4 text-center text-xl">
                          <div className="et_pb_text_inner">
                            <p>
                              This is Ed above showing the arm I designed. It could be used to push, pull and twist at the same time...
                            </p>
                          </div>
                          <button
                            onClick={() => toggleText(4)}
                            className="bg-blue-700 text-white py-3 px-6 rounded-xl mt-4 hover:bg-blue-800 text-lg">
                            {expandedText[4] ? 'Collapse' : 'Read More'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PageContent;