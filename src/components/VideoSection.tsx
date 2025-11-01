import React from "react";

const VideoSection = () => {
  return (
    <div className="h-[120vh] py-48 flex items-center justify-center">
      <div className="relative w-[75vw] h-[85vh] overflow-hidden  shadow-lg">
        {/* Background video */}
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/856398/856398-hd_1280_720_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Bottom left box */}
        <div className="absolute bottom-10 left-10">
          <div
            className="flex gap-3 backdrop-blur-xl  px-3 py-2  text-white text-lg 
            hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            <span>
              <img src="fullscreen.png" alt="" />
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
              </svg>
            </span>
          </div>
        </div>

        {/* Bottom right box */}
        <div className="absolute bottom-10 right-10">
          <div className="flex flex-col gap-1 uppercase ">
            <span
              className="backdrop-blur-xl   px-4 py-2  text-white text-sm 
            hover:bg-black flex items-center gap-2 transition-all duration-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="rgba(255,255,255,1)"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
              </svg>
              Construction
            </span>
            <span
              className="backdrop-blur-xl  px-4 py-2  text-white text-sm 
            hover:bg-black flex items-center gap-2 transition-all duration-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="rgba(255,255,255,1)"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
              </svg>
              Live Site
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
