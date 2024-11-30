import React from "react";
import video from "../../assets/video1.mp4";
const CourseVideo = ({ data }) => {
  return (
    <div className="relative px-6 bg-video-bg">
      <video src={video} controls className="block"></video>
    </div>
  );
};

export default CourseVideo;
