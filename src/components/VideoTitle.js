import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36">
      <h1>{title}</h1>
      <h1>{overview}</h1>
    </div>
  );
};

export default VideoTitle;
