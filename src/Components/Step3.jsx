import React, { useState, useRef } from 'react';

const Step3 = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [textMessage, setTextMessage] = useState('');
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);
  const videoStreamRef = useRef(null);
  const videoRecorderRef = useRef(null);

  // Start voice recording
  const startAudioRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };
    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
      setAudioUrl(URL.createObjectURL(audioBlob));
    };
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  // Stop voice recording
  const stopAudioRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  // Start video recording
  const startVideoRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoStreamRef.current = stream;
    videoRecorderRef.current = new MediaRecorder(stream);
    videoRecorderRef.current.ondataavailable = (event) => {
      const videoBlob = event.data;
      setVideoUrl(URL.createObjectURL(videoBlob));
    };
    videoRecorderRef.current.start();
    videoRef.current.srcObject = stream;
    setIsRecording(true);
  };

  // Stop video recording
  const stopVideoRecording = () => {
    videoRecorderRef.current.stop();
    videoStreamRef.current.getTracks().forEach(track => track.stop()); // Stop the video stream
    setIsRecording(false);
  };

  // Handle text message change
  const handleTextMessageChange = (e) => {
    setTextMessage(e.target.value);
  };

  // Handle sending the message
  const handleSendMessage = () => {
    console.log('Text:', textMessage);
    console.log('Audio URL:', audioUrl);
    console.log('Video URL:', videoUrl);
    // You can implement logic to send these messages to the server or process them here
  };

  return (
    <div
      id="step3"
      className="flex justify-center items-center p-1 md:p-4 w-full bg-gray-800"
      style={{ minHeight: '8vh' }} // Set the minimum height to 8% of the viewport height
    >
      <div className="flex flex-col w-full max-w-3xl p-4">
        <div className="flex gap-4 items-end border-b-2">
          <a href="#step2" className="flex flex-col gap-2 justify-center items-center">
            <img className="w-10" src="/assets/images/arrow.webp" alt="" />
            <h1 className="border-2 text-center border-b-0 rounded-t-xl w-16 h-10 bg-gradient-to-b from-[#FFCC00] to-[#FF6600] md:text-3xl font-extrabold text-white">
              3
            </h1>
          </a>
          <div className="flex justify-center items-center">
            <h1 className="md:text-3xl font-extrabold text-yellow-500">
              SEND UP TO 4 DIFFERENT TYPES OF MESSAGES AND
            </h1>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-3 w-full py-3">
          <div className="grid grid-cols-3 gap-3">
            <img className="cursor-none" src="/assets/images/photo.webp" alt="" />
            <img className="cursor-none" src="/assets/images/video.webp" alt="" />
            <img className="cursor-none" src="/assets/images/voice.webp" alt="" />
          </div>
          <div>
            <img className="cursor-none" src="/assets/images/text.webp" alt="" />
          </div>
        </div>

        <div className="w-full mt-8">
          <div className="flex bg-white items-center px-4 py-2 rounded-t-xl bg-opacity-80 bg-gradient-to-b from-[#A3A3A3] to-[#636363]">
            <h1 className="text-2xl md:text-3xl font-bold">Type What You Need!</h1>
          </div>
          <div>
            <input
              multiple
              type="file"
              className="hidden"
              accept="video/*,image/*"
            />
            <div className="flex flex-col justify-center items-center">
              <textarea
                autoFocus
                className="resize rounded-3xl m-2 mx-4 w-full border-4 border-blue-500 text-3xl hover:text-4xl text-sky-600"
                placeholder="Type Here!"
                aria-label="Search"
                aria-describedby="search-addon"
                value={textMessage}
                onChange={handleTextMessageChange}
              ></textarea>
              <div className="flex md:mb-5 md:mt-10 w-full md:w-auto gap-4 md:gap-14 justify-center items-center md:rounded-xl bg-yellow-400 text-white">
                <div className="tooltip-container">
                  <button
                    className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 w-20 rounded-full"
                    onClick={startVideoRecording}
                  >
                    <img src="/assets/images/upload.png" alt="" />
                  </button>
                </div>
                <div className="tooltip-container">
                  <button
                    className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 w-20 rounded-full"
                    onClick={startAudioRecording}
                  >
                    <img src="/assets/images/microphone.png" alt="" />
                  </button>
                </div>
                <div className="tooltip-container">
                  <button
                    className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 w-20 rounded-full"
                    onClick={stopAudioRecording}
                    disabled={!isRecording}
                  >
                    <img src="/assets/images/rec2.png" alt="" />
                  </button>
                </div>
                <div className="opacity-20 cursor-not-allowed w-20 rounded-full">
                  <img src="/assets/images/ok.png" alt="" />
                </div>
              </div>
              <div className="grid grid-cols-2 mt-3 md:flex-row justify-center gap-2 mx-2 mb-24 md:mb-0"></div>
            </div>
          </div>
        </div>

        {/* Display Audio and Video playback */}
        {audioUrl && (
          <div>
            <h3 className="text-white">Audio Message:</h3>
            <audio controls src={audioUrl} />
          </div>
        )}

        {videoUrl && (
          <div>
            <h3 className="text-white">Video Message:</h3>
            <video controls src={videoUrl} />
          </div>
        )}

        {/* Send Message Button */}
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-lg mt-4"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Step3;
