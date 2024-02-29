import React from "react";
import ViedoTitle from "./ViedoTitle";
import ViedoBackground from "./ViedoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { overview, original_title, id } = mainMovie;
  return (
    <div>
      <ViedoTitle title={original_title} overview={overview} />
      <ViedoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
