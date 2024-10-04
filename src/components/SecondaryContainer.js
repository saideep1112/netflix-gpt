import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black text-white">
      <div className="relative -mt-52">
        <MovieList title={"Now Playing"} list={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} list={movies?.popularMovies} />
        <MovieList title={"Top Rated"} list={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} list={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
