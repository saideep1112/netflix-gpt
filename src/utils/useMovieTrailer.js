import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";
import { useEffect } from "react";
import { addTrailerData } from "./movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const trailers = json.results.filter((video) => video.type === "Trailer");
    dispatch(addTrailerData(trailers ? trailers[0] : json.results[0]));
  };

  useEffect(() => {
    getMovieTrailer(movieId);
  }, []);
};

export default useMovieTrailer;
