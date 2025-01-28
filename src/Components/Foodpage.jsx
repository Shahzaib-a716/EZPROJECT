import React from "react";

const VirtualAerobicsInstructor = () => {
  return (
    <div className="bg-green-500 min-h-screen flex flex-col items-center">
      {/* Top Section */}
      <div className="relative w-full flex justify-center items-center p-4">
        <img
          src="/assets/images/button right training.webp"
          alt="Icon"
          className="absolute top-4 left-4 w-[100px] h-[150px]"
        />
        <h1 className="text-black text-6xl font-extrabold text-center">
          <span className="block">VIRTUAL</span>
          <span className="block">AEROBICS</span>
          <span className="block">INSTRUCTOR</span>
        </h1>
      </div>

      {/* Videos Section */}
      <div className="w-full max-w-4xl flex flex-col gap-4 mt-4">
        {/* Video 1 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/sample_video_id_1"
              title="Aerobics for Beginners"
              allowFullScreen
              className="w-full rounded-md"
            ></iframe>
          </div>
          <div className="mt-2">
            <h2 className="text-lg font-bold">Aerobics for Beginners</h2>
            <p>Intensity: ⭐⭐⭐</p>
          </div>
        </div>

        {/* Video 2 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/sample_video_id_2"
              title="35 MIN Full Body Workout"
              allowFullScreen
              className="w-full rounded-md"
            ></iframe>
          </div>
          <div className="mt-2">
            <h2 className="text-lg font-bold">35 MIN Full Body Workout</h2>
          </div>
        </div>

        {/* Video 3 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/sample_video_id_3"
              title="5 MIN Beginner Cardio"
              allowFullScreen
              className="w-full rounded-md"
            ></iframe>
          </div>
          <div className="mt-2">
            <h2 className="text-lg font-bold">5 MIN Beginner Cardio</h2>
          </div>
        </div>

        {/* Video 4 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/sample_video_id_4"
              title="12 MIN Standing Arm Workout"
              allowFullScreen
              className="w-full rounded-md"
            ></iframe>
          </div>
          <div className="mt-2">
            <h2 className="text-lg font-bold">12 MIN Standing Arm Workout</h2>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-[250px] mt-8">
        <button className="w-[100px] h-[100px]">
          <img
            src="/assets/images/button back.webp"
            alt="Left Arrow"
            className="w-full h-full rounded-full"
          />
        </button>
        <button className="w-[100px] h-[100px]">
          <img
            src="/assets/images/button help.webp"
            alt="Question Mark"
            className="w-full h-full rounded-full"
          />
        </button>
        <button className="w-[100px] h-[100px]">
          <img
            src="/assets/images/button ok check.webp"
            alt="Checkmark"
            className="w-full h-full rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default VirtualAerobicsInstructor;
