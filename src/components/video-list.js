import React from "react";
import VideoListItem from "./video-list-item";

const VideoList = () => {
  const movies = ["film1", "film2", "film3"];
  return (
    <div>
      <ul>
        {movies.map((movie, index) => (
          <VideoListItem movie={movie} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
