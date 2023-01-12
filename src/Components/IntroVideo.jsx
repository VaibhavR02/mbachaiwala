import React from 'react';
import introvideo from '../assets/video.mp4';
const IntroVideo = () => {
  return (
    <div className="intro">
      <video
        src={introvideo}
        muted
        autoPlay
        loop
        controlsList="nodownload"
      ></video>
      <div></div>
    </div>
  );
};

export default IntroVideo;
