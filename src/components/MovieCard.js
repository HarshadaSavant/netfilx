import React from "react";
import { IMG_CDN_URL } from "../utils/Constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-52 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};
export default MovieCard;
