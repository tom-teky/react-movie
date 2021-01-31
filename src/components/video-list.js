import React from "react";
import VideoListItem from "./video-list-item";

const VideoList = ({movieList}) => {
  return (
    <div>
      <ul>
        {movieList.map(movie => (
          <VideoListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
