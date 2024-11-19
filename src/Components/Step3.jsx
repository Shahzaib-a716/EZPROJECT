import React, { useState, useRef } from 'react';

const Step3 = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [textMessage, setTextMessage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const audioChunks = useRef([]);
  const mediaRecorderRef = useRef(null);
  const videoRecorderRef = useRef(null);
  const videoStreamRef = useRef(null);

  const audioRef = useRef(null);
  const videoRef = useRef(null);

  // State to manage visibility of text input
  const [isTextInputVisible, setIsTextInputVisible] = useState(false);

  // Handle text message change
  const handleTextMessageChange = (e) => {
    setTextMessage(e.target.value);
  };

  // Handle sending the message
  const handleSendMessage = () => {
    console.log('Text:', textMessage);
    console.log('Audio URL:', audioUrl);
    console.log('Video URL:', videoUrl);
    console.log('Images:', imageUrl);
    // Process selected files, audio, video, text here (e.g., upload to server)
  };

  // Handle image selection (gallery or camera)
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      setSelectedFiles((prev) => [...prev, { type: 'image', url: imageUrl }]);
    }
  };

  // Handle video selection (gallery or camera)
  const handleVideoSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoUrl(videoUrl);
      setSelectedFiles((prev) => [...prev, { type: 'video', url: videoUrl }]);
    }
  };

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
      setSelectedFiles((prev) => [...prev, { type: 'audio', url: URL.createObjectURL(audioBlob) }]);
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
      setSelectedFiles((prev) => [...prev, { type: 'video', url: URL.createObjectURL(videoBlob) }]);
    };
    videoRecorderRef.current.start();
    videoRef.current.srcObject = stream;
    setIsRecording(true);
  };

  // Stop video recording
  const stopVideoRecording = () => {
    videoRecorderRef.current.stop();
    videoStreamRef.current.getTracks().forEach(track => track.stop());
    setIsRecording(false);
  };

  // Handle file deletion
  const handleFileDelete = (fileUrl) => {
    setSelectedFiles(selectedFiles.filter((file) => file.url !== fileUrl));
  };

  // Toggle the visibility of the text input
  const handleTextIconClick = () => {
    setIsTextInputVisible(prev => !prev);
  };

  return (
    <div className="flex justify-center items-center p-2 md:p-4 w-full bg-gray-800" style={{  minHeight: '100vh' }}>
      <div className="flex flex-col w-full max-w-3xl p-4">
        <div className="flex gap-4 items-end border-b-2">
          <a href="#step2" className="flex flex-col gap-2 justify-center items-center">
            <img className="w-10" src="/assets/images/arrow.webp" alt="" />
            <h1 className="border-2 text-center border-b-0 rounded-t-xl w-16 h-10 bg-gradient-to-b from-[#FFCC00] to-[#FF6600] md:text-3xl font-extrabold text-white">3</h1>
          </a>
          <div className="flex justify-center items-center">
            <h1 className="md:text-3xl font-extrabold text-yellow-500">SEND UP TO 4 DIFFERENT TYPES OF MESSAGES AND</h1>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-3 w-full py-3">
          <div className="grid grid-cols-3 gap-3">
            <div className="cursor-pointer" onClick={() => document.getElementById('imageInput').click()}>
              <img className="cursor-pointer" src="/assets/images/photo.webp" alt="" />
            </div>
            <div className="cursor-pointer" onClick={() => document.getElementById('videoInput').click()}>
              <img className="cursor-pointer" src="/assets/images/video.webp" alt="" />
            </div>
            <div
              className="cursor-pointer"
              onClick={isRecording ? stopAudioRecording : startAudioRecording}
            >
              <img className="cursor-pointer" src="/assets/images/voice.webp" alt="" />
              {isRecording && (
                <div className="absolute w-4 h-4 bg-red-500 rounded-full top-2 left-2" />
              )}
            </div>
          </div>
          <div className="cursor-pointer" onClick={handleTextIconClick}>
            <img className="cursor-pointer" src="/assets/images/text.webp" alt="" />
          </div>
        </div>

        {/* Conditional Rendering of Text Input */}
        {isTextInputVisible && (
          <div className="w-full mt-8">
            <div className="flex bg-white items-center px-4 py-2 rounded-t-xl bg-opacity-80 bg-gradient-to-b from-[#A3A3A3] to-[#636363]">
              <h1 className="text-2xl md:text-3xl font-bold">Type What You Need!</h1>
            </div>
            <div>
              <input
                id="imageInput"
                multiple
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageSelect}
              />
              <input
                id="videoInput"
                multiple
                type="file"
                className="hidden"
                accept="video/*"
                onChange={handleVideoSelect}
              />
              <textarea
                id="textMessageInput"
                autoFocus
                className="resize rounded-3xl m-2 mx-4 w-full border-4 border-blue-500 text-3xl hover:text-4xl text-sky-600"
                placeholder="Type Here!"
                aria-label="Search"
                aria-describedby="search-addon"
                value={textMessage}
                onChange={handleTextMessageChange}
              ></textarea>
            </div>
          </div>
        )}

        {/* Display selected images, videos, and audio */}
        <div className="mt-4">
  <div className="flex space-x-4 overflow-x-auto"> {/* Add flex and spacing between items */}
    {selectedFiles.map((file, index) => (
      <div key={index} className="flex items-center gap-2">
        {file.type === 'image' && <img src={file.url} alt="selected" className="w-[120px] h-[115px] object-cover" />}
        {file.type === 'video' && <video src={file.url} className="w-[140px] h-[135px]" controls />}
        {file.type === 'audio' && <audio src={file.url} controls />}
        <button
          onClick={() => handleFileDelete(file.url)}
          className="bg-red-500 text-white rounded-full p-1"
        >
          X
        </button>
      </div>
    ))}
     </div>
     </div>

        <div className="mt-4 flex justify-between">
          <img 
            src="/assets/images/button cancel no.webp" 
            alt="Send Icon" 
            onClick={handleSendMessage} 
            className="w-[70px] h-[65px] cursor-pointer"
          />
          <img 
            src="/assets/images/button ok check.webp"
            alt="Send Icon" 
            onClick={handleSendMessage} 
            className="w-[70px] h-[65px] cursor-pointer"
          />
        </div>

      </div>
    </div>
  );
};

export default Step3;
