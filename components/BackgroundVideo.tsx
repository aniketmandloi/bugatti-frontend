// components/BackgroundVideo.tsx
import React from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-0">
      <video
        className="object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/heroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
