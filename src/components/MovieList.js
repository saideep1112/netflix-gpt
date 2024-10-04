import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, list }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };
  return (
    <div className="max-w-[100%] mx-10 mb-16">
      <h1 className="text-2xl font-extrabold mb-6">{title}</h1>
      {list && (
        <Slider {...settings}>
          {list.map((movie) => (
            <MovieCard poster={movie?.poster_path} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default MovieList;
