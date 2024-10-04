import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";

const MainContainer = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);
  if (!nowPlayingMovies) return;
  return (
    <div>
      <VideoTitle movieInfo={nowPlayingMovies[0]} />
      <VideoBackground movieId={nowPlayingMovies[0].id} />
    </div>
  );
};

export default MainContainer;
