import React, { useState } from "react";

const PageContent = () => {
  // State to manage expanding and collapsing of text sections
  const [expandedText, setExpandedText] = useState({});
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to navigate back
  const navigateBack = () => {
    window.history.back();
  };

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
                  <section className="et_pb_section et_pb_section_0 et_pb_with_background bg-[#e0e0e0dc] py-16">
                    <div className="et_pb_row">
                      <div className="et_pb_column et_pb_column_4_4">
                        <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_center text-5xl flex justify-center font-bold animate-pulse">
                          <p>Clinical Engineering</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2 */}
                  <section className="et_pb_section et_pb_section_1 bg-white py-16">
                    <div className="et_pb_row">
                      <div className="et_pb_column et_pb_column_4_4">
                        <div className="et_pb_module et_pb_image et_pb_image_0">
                          <span className="et_pb_image_wrap">
                            <img
                              className="w-[600px] ml-[350px] rounded-lg shadow-xl"
                              src="https://proof.ez123.eu/wp-content/uploads/2022/03/olt.jpg"
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
                        <div className="et_pb_module et_pb_text et_pb_text_1 text-center text-black font-bold text-3xl p-12">
                          <div className="et_pb_text_inner">
                            <p>
                            I have worked under Mr. Ed Prentke at Metro-Health Medical Centre in the United States. I also did a few things for the Cleveland Clinic. Ed was the founder of Prentke-Romac in the U.S. He was also like me but an older version when We met. And we have designed many things together while I was there.
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
                            This is a hobby that I want to make eventually into a full-time profession.
                            The Prenke_Bubik Arm is being used by occupational therapists all over the states. I did this one for free among other things. But I cannot do anything here for free. Perhaps one day I will figure out how OHIP can pay me. Until then this is why it will have to be.
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
                            Mr. Ed Prentke and I designed all kinds of things together. He was 82 some 2o years ago when this picture was taken. Today he is 102. But I will always remember him in my heart and all the fun we had sailing in his Ketch, and all the devices we designed and built for all the disabled people who really needed to have things made. And who loved us for it.
                            I designed and made this in one day. The patient got it the next day. So completely shocked he was and the rest of the department, I ended up making about 3 more before they were sourced out to another company. It was called a “gurney adapter.” When patients are on a gurney facing up for part of the time and then facing down part of the time. When they are facing down, there used to be a tray that would hold their food and if they wanted to read, they could not because the left over food was there. So I made a round tray so it could swivel out of the way. Now the Patient did not have to wait for the nurse to take the tray. The patients loved it. And it wasn’t long before my phone was ringing off the hook from many different departments.
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
                          <a href="https://proof.ez123.eu/wp-content/uploads/2022/03/Ulntitled-Scanned-099.jpg" className="et_pb_lightbox_image">
                            <span className="et_pb_image_wrap">
                              <div className="box-shadow-overlay"></div>
                              <img
                                className="w-[600px] rounded-lg shadow-3xl"
                                src="https://proof.ez123.eu/wp-content/uploads/2022/03/Ulntitled-Scanned-099.jpg"
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
                            This is Ed above showing the arm I designed. It could be used to push, pull and twist at the same time.
And the resistance could be adjusted with a small screw. There was also a soft rubber stopper at either end to cushion the shock when it reached it’s end or beginning of the stroke. The O.T. (occupational therapists) Department used this one and I made three others too. As well a the really big one which 20 people could use all at the same time. I left Metro-health before it was finished but Ed sent me a picture of it. It was cool. It was exactly how I envisioned it.
I want to thank Vince, wherever he may be. For all the great pictures he took of all our inventions. He and I and Ed had a conversation several months before he died. About some of the things I am building up here, in Canada and I would like someone to see them so they can be sold in the states and told me to contact Prenke-Romac but no one ever called me back. I left several messages for his old partner. The name escapes me now.
Ed sent me a collection of all his designs, with schematics and all and told me to use them to do my clinical engineering business here in Toronto. It is very difficult to do it here. If anyone needs a good clinical engineer, please let me know. I was ED’S “MINI ME.”
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
        {/* Fixed Back Button */}
     <button
     onClick={navigateBack}
     className="fixed bottom-5 left-5 p-4 rounded-full  transition-transform transform hover:scale-110 flex items-center justify-center"
   >
     <img
      src="/assets/images/button back.webp"
      alt="Top"
      className="h-[124px] w-[124px]"
     />
   </button>
   
   {/* Fixed Scroll-to-Top Button */}
   <button
     onClick={scrollToTop}
     className="fixed bottom-5 right-5  p-4 rounded-full   transition-transform transform hover:scale-110 flex items-center justify-center"
   >
     <img
       src="/assets/images/button page up.webp"
       alt="Top"
       className="h-[130px] w-[114px]"
     />
   </button>
   </div>
   
    
  );
};

export default PageContent;