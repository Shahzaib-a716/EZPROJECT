import React, { useState } from "react";

// TextWithReadMore Component for each section
const TextWithReadMore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-1/2 p-4">
      <p className="text-justify text-2xl font-bold">
        {isExpanded ? (
          <>
            {text}
          </>
        ) : (
          <>
            {text.split(' ').slice(0, 10).join(' ')}...
          </>
        )}
      </p>
      <button
        className="mt-2 text-blue-500 hover:underline"
        onClick={toggleText}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

const Page = () => {
  return (
    <div className="bg-blue-200">
  <div className="container mx-auto p-4">
    <article className="post">
      <div>
        <div className="text-center py-16 px-4 bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA]">
          <h1 className="text-3xl text-yellow-400 md:text-5xl font-extrabold mb-4 animate-bounceIn">
            I didn’t build THEM, I just made THEM better!
          </h1>
        </div>

        {/* Flexbox layout for text and image */}
        <div className="flex items-center mt-8">
          {/* Text on the left */}
         
          <TextWithReadMore 
          text="I wish I could take credit for the electric car, but it was made in Germany. You would think that perhaps that might be a good thing, but these Germans used terrible poor quality parts and the car wasn’t that great in the end. I modified it with a friend, made it faster, and added a solar trailer to extend its range. I even got a compliment from an engineer who works for Tesla. How impressed they were with my solar trailer. Cool EH?"
        />


          {/* Image on the right */}
          <div className="w-1/2">
            <img
              className="w-full h-auto"
              src="https://proof.ez123.eu/wp-content/uploads/2022/04/img6.jpg"
              alt="solar trailer"
            />
                </div>
                </div>
            
            {/* Second Section with TextWithReadMore */}
            <div className="my-8">
              <div className="flex ">
                <div className="w-full ml-11 p-4">
                  <TextWithReadMore 
                    text="I did however design and build the solar trailer and Tesla called me and asked me to create a solar trailer for their cars. I can’t tell you how amazingly flattered I was but I also told Tesla that what I created is not new technology I just made my electric car go a little further. What they have done in their cars adding solar panels integrated into their structure is far more sexy than my solar trailer although my solar trailer could always hold true tremendous amount of weight in the frame of the panel weighed more than the whole trailer."
                  />
                </div>
              </div>
            </div>

            {/* Third Section with TextWithReadMore */}
            {/* Flexbox layout for text and image */}
        <div className="flex items-center mt-8">
          {/* Text on the left */}
         
          <TextWithReadMore 
          text="When I was told that it couldn’t be done the way that I wanted to use Lexan honeycomb paneling and a very thin aluminum frame, I was told that it couldn’t be welded and it couldn’t be done. But I come from a family where anything is possible and if you put your mind to it you can also do almost the impossible?"
        />


          {/* Image on the right */}
          <div className="w-1/2">
            <img
              className="w-full h-auto"
              src="https://proof.ez123.eu/wp-content/uploads/2022/04/IMG_20200130_180216-Copy.jpg"
              alt="solar trailer"
            />
                </div>
                </div>
                <div className="w-[500px] ml-[400px] mt-10">
            <img
              className="w-full h-auto"
              src="https://proof.ez123.eu/wp-content/uploads/2022/04/img8.jpg"
              alt="solar trailer"
            />
                </div>
                <div className="w-[500px] ml-[400px] mt-11">
            <img
              className="w-full h-auto"
              src="https://proof.ez123.eu/wp-content/uploads/2022/04/img9.jpg"
              alt="solar trailer"
            />
                </div>

            {/* Fifth Section with TextWithReadMore */}
            <div className="my-8 text-2xl font-bold">
              <TextWithReadMore 
                text="I was able to extend the range, by almost 25%, and I was happy to do so because in Hungary if you asked someone to plug your electric car into their house even for half an hour they are so cheap they won’t let you do it. Even with the offer to pay them something still not. So I have to pay a tow truck to take my electric car home and then started to work on a solar backup system that also had its own battery pack contained within it so that if I went on longer trips I could use the battery backup system as well."
              />
            </div>

            {/* Sixth Section with TextWithReadMore */}
            <div className="my-8">
            <div className="flex items-center mt-8">
          {/* Text on the left */}
         
          <TextWithReadMore 
          text="I bought this bicycle below in Germany for more money than I paid for my electric car and trailer combined.
Never buy any German product.. I take that back there are some German products that are good but mostly there over engineered and poor quality or so I have seen so far now you can’t compare that with the BMW and the Mercedes and the Volkswagen and even the Skoda which are excellent vehicles made by Germans however many other things in my my experience has been with German companies is that they are not entirely honest. Anyway that’s a story for another time"
        />
                <div className="w-1/2 p-4">
                  <img
                    className="w-full h-auto"
                    src="https://proof.ez123.eu/wp-content/uploads/2022/04/IMG_20200117_075159-Copy.jpg"
                    alt="bicycle"
                  />
                </div>
              </div>
            </div>

            {/* Seventh Section with TextWithReadMore */}
            <div className="my-8">
            <p className=" text-center  mt-8">
          {/* Text on the left */}
         
          <TextWithReadMore 
          text="The bicycle was a piece of garbage because it was so completely over-engineered and so unstable and so dangerous I even had an accident actually the first bicycle accident I have had since I was five years old. So I reengineered it twice and now it’s almost perfect"
        />
</p>
</div>

            {/* Eighth Section with TextWithReadMore */}
            <div className="my-8">
              <p className="text-center text-2xl font-bold bg-slate-500">
                So I also created a solar trailer for my NEW bicycle, which can
                also charge other devices, and can be used as a table to have a
                bite. I am also working on an integrated chair which I can also
                pull out of the trailer. I just love doing this stuff and I am
                working on a version where the whole trailer is a cooler for the
                most important drink of a Canadian, which is beer. But for me it
                is champagne.
              </p>
            </div>

            {/* Ninth Section with TextWithReadMore */}
            <div className="my-8">
              <div className="w-full p-4">
                <img
                  className="w-[800px] ml-[200px] h-auto"
                  src="https://proof.ez123.eu/wp-content/uploads/2022/04/IMG_20200214_150309-Copy.jpg"
                  alt="solar trailer bicycle"
                />
              </div>
            </div>

            {/* Tenth Section with TextWithReadMore */}
            <div className="my-8">
              <p className="text-center text-2xl font-bold text-yellow-600">
                And can be used as a table to have a bite. I am also working on
                an integrated chair which I can also pull out of the trailer. I
                just love doing this stuff. And I am in the process of creating a
                solar trailer for my motorhome, to add another 600 W of charging
                power to my 1.2 kW solar system.
              </p>
            </div>

            {/* Eleventh Section with TextWithReadMore */}
            <div className="my-8">
              <div className="w-full p-4">
                <iframe
                  className="w-[700px] ml-[300px] h-[500px]"
                  src="https://www.youtube.com/embed/amtmmeroX_8?feature=oembed"
                  title="manufacturer-needed"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Final Section */}
            <div className="my-8 text-center">
              <TextWithReadMore 
                text="And what’s next?, Finish my service software which I became famous for in Canada and then retire"
              />
            </div>

          
          </div>
        </article>
      </div>
    </div>
  );
};

export default Page;
