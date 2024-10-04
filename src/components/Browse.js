import { useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const showGptPage = useSelector((store) => store.gpt.showGptPage);
  return (
    <div>
      <Header />
      {!showGptPage ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <GptSearchPage />
      )}
    </div>
  );
};

export default Browse;
