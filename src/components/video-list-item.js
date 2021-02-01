import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const VideoListItem = ({ movie }) => {
  return (
    <li className="list-group-item">
      <div className="media-left">
        <img
          height="100px"
          width="100px"
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt="No Img"
        />
        
      </div>
      <div className="media-body">
        <h5 className="title_list_item">{movie.title}</h5>
      </div>
    </li>
  );
};

export default VideoListItem;
