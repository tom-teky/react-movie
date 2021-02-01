import React from "react";
import VideoListItem from "./video-list-item";

const VideoList = (props) => {
  const {movieList} = props;
  return (
    <div>
      <ul>
        {movieList.map(movie => (
          <VideoListItem key={movie.id} movie={movie} callback={receiveCallBack} />
        ))}
      </ul>
    </div>
  );
  function receiveCallBack(movie){
    props.callback(movie);
  }
};

export default VideoList;
