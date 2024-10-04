import { IMG_URL_TMDB } from "../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-48 mr-4 rounded-lg">
      <img
        className="w-48 rounded-lg"
        alt="movie-poster"
        src={IMG_URL_TMDB + poster}
      ></img>
    </div>
  );
};

export default MovieCard;
