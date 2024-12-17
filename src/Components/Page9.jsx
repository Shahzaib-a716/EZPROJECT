import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Step3 = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [textMessage, setTextMessage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [name, setName] = useState(''); // State for name input
  const [email, setEmail] = useState(''); // State for email input
  const audioChunks = useRef([]);
  const mediaRecorderRef = useRef(null);
  const videoRecorderRef = useRef(null);
  const videoStreamRef = useRef(null);
  const videoPreviewRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to navigate back
  const navigateBack = () => {
    window.history.back();
  };

  const navigate = useNavigate();

  // State to manage visibility of text input
  const [isTextInputVisible, setIsTextInputVisible] = useState(false);

  // Handle text message change
  const handleTextMessageChange = (e) => {
    setTextMessage(e.target.value);
  };

  // Handle sending the message
  const handleSendMessage = () => {
    navigate('/EmergencyPage', {
      state: {
        textMessage,
        selectedFiles,
        audioUrl,
        videoUrl,
        imageUrl,
        name,
        email,
      },
    });
  };

  // Handle image and video selection from gallery
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      if (file.type.startsWith('image/')) {
        setImageUrl(fileUrl);
        setSelectedFiles((prev) => [...prev, { type: 'image', url: fileUrl }]);
      } else if (file.type.startsWith('video/')) {
        setVideoUrl(fileUrl);
        setSelectedFiles((prev) => [...prev, { type: 'video', url: fileUrl }]);
      }
    }
  };

  // Start audio recording
  const startAudioRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };
    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
      const audioFileUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioFileUrl);
      setSelectedFiles((prev) => [...prev, { type: 'audio', url: audioFileUrl }]);
    };
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  // Stop audio recording
  const stopAudioRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  // Start video recording (Icon B)
  const startVideoRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoStreamRef.current = stream;

      // Show the live camera preview on the page
      if (videoPreviewRef.current) {
        videoPreviewRef.current.srcObject = stream;
      }

      const videoRecorder = new MediaRecorder(stream);
      videoRecorder.ondataavailable = (event) => {
        const videoBlob = new Blob([event.data], { type: 'video/mp4' });
        const videoFileUrl = URL.createObjectURL(videoBlob);
        setVideoUrl(videoFileUrl);
        setSelectedFiles((prev) => [...prev, { type: 'video', url: videoFileUrl }]);
      };
      videoRecorder.start();
      setIsRecording(true);
      videoRecorderRef.current = videoRecorder;
    } catch (error) {
      console.error('Error starting video recording:', error);
    }
  };

  // Stop video recording
  const stopVideoRecording = () => {
    if (videoRecorderRef.current) {
      videoRecorderRef.current.stop();
      setIsRecording(false);
    }
    if (videoStreamRef.current) {
      videoStreamRef.current.getTracks().forEach((track) => track.stop());
    }
  };

  // Toggle the visibility of the text input (Icon D)
  const handleTextIconClick = () => {
    setIsTextInputVisible((prev) => !prev);
  };

  // Handle file deletion
  const handleFileDelete = (fileUrl) => {
    setSelectedFiles(selectedFiles.filter((file) => file.url !== fileUrl));
  };

  return (
    <div className="flex justify-center items-center p-2 md:p-4 w-full bg-gradient-to-br from-pink-500 to-red-400" style={{ minHeight: '100vh' }}>
      
      <div className="flex flex-col w-full max-w-xl p-4">
        {/* Name Input Field */}
        <div className="w-full mb-4">
        <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 text-xl font-extrabold placeholder-black border-2 border-black rounded-tl-lg rounded-tr-lg"
          />
        </div>

        
         
      
        <div className="mt-2">
        <h1 className="text-4xl font-bold text-white mb-4">Show me your idea</h1>
        <div className="grid grid-rows-2 gap-3 w-full py-3">
          {/* Icon A - Gallery Upload (Image & Video) */}
          
          <div className="grid grid-cols-3 gap-3">
            <div className="cursor-pointer" onClick={() => document.getElementById('fileInput').click()}>
              <img className="cursor-pointer" src="/assets/images/photo.webp" alt="" />
              <input
                id="fileInput"
                type="file"
                accept="image/*,video/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
            {/* Icon B - Start Video Recording */}
            <div
              className="cursor-pointer"
              onClick={isRecording ? stopVideoRecording : startVideoRecording}
            >
              <img className="cursor-pointer" src="/assets/images/video.webp" alt="" />
            </div>
            {/* Icon C - Start/Stop Audio Recording */}
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

          {/* Icon D - Toggle Text Input */}
          <div className="cursor-pointer" onClick={handleTextIconClick}>
            <img className="cursor-pointer" src="/assets/images/text.webp" alt="" />
          </div>
        </div>

        {isTextInputVisible && (
          <div className="w-full mt-8">
            <div className="flex bg-white items-center px-4 py-2 rounded-t-xl bg-opacity-80 bg-gradient-to-b from-[#A3A3A3] to-[#636363]">
              <h1 className="text-2xl md:text-3xl font-bold">Type What You Need!</h1>
            </div>
            <textarea
              id="textMessageInput"
              autoFocus
              className="resize rounded-3xl m-2 mx-4 w-full border-4 border-blue-500 text-3xl hover:text-4xl text-sky-600"
              placeholder="Type Here!"
              aria-label="Message Input"
              value={textMessage}
              onChange={handleTextMessageChange}
            ></textarea>
          </div>
        )}

        {/* Display the preview of video recording */}
        {isRecording && videoStreamRef.current && (
          <div className="mt-4">
            <video
              ref={videoPreviewRef}
              autoPlay
              muted
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}

        <div className="mt-4">
          <div className="flex space-x-4 overflow-x-auto">
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

        <div className="mt-4">
          <div className="w-full  mb-4">
            <input
              type="email"
              placeholder="@"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               className="w-full p-3 text-3xl font-extrabold placeholder-black border-2 border-black rounded-tl-lg rounded-lg flex justify-centre "
            />
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <img
            src="/assets/images/button cancel no.webp"
            alt="Cancel Icon"
            className="w-[70px] ml-[60px] h-[65px] cursor-pointer"
          />
          <img
            src="/assets/images/button help.webp"
            alt="Send Icon"
            onClick={handleSendMessage}
            className="w-[70px] h-[65px] cursor-pointer"
          />
           <img
            src="/assets/images/button ok check.webp"
            alt="Send Icon"
            onClick={handleSendMessage}
            className="w-[70px] h-[65px] mr-[60px] cursor-pointer"
          />
        </div>
      </div>
     {/* Fixed Back Button */}
     <button
     onClick={navigateBack}
     className="fixed bottom-5 left-5 p-4 rounded-full shadow-lg  transition-transform transform hover:scale-110 flex items-center justify-center"
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
     className="fixed bottom-5 right-5  p-4 rounded-full   transition-transform transform hover:scale-110 flex items-center justify-center "
   >
     <img
       src="/assets/images/button page up.webp"
       alt="Top"
       className="h-[150px] w-[124px]"
     />
   </button>
   </div>
   </div>
  );
};

export default Step3;
