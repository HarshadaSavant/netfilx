import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json1 = await data.json();
    dispatch(addPopularMovies(json1.results));
    console.log(json1.results);
  };

  useEffect(() => {
    getPopularMovie();
  }, []);
};

export default usePopularMovie;
