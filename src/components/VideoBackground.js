import React from "react";

const VideoBackground = ({ title, overview }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{overview}</h1>
    </div>
  );
};

export default VideoBackground;
