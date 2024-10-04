import { FiInfo } from "react-icons/fi";
import { FaPlay } from "react-icons/fa6";

const VideoTitle = ({ movieInfo }) => {
  const { original_title, overview } = movieInfo;
  return (
    <div className="absolute text-white pt-64 pl-8 bg-gradient-to-r from-black w-full aspect-video">
      <div>
        <h1 className="text-5xl font-extrabold">
          {original_title.toUpperCase()}
        </h1>
        <p className="w-1/3 text-lg mt-4">{overview}</p>
      </div>
      <div className="flex items-center mt-8">
        <button className="flex items-center bg-white px-12 py-4 text-lg font-semibold text-black rounded-md">
          <FaPlay className="mr-2" />
          Play
        </button>
        <button className="flex items-center bg-[#2f2d2d80] px-12 py-4 text-lg font-semibold ml-3 rounded-md">
          <FiInfo className="mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
