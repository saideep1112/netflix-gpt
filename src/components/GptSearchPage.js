import GptPageContent from "./GptPageContent";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div className="bg-[#0000009b]">
      <div>
        <img
          className="fixed -z-10 w-screen h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt="background"
        ></img>
      </div>
      <div className="pt-36">
        <GptSearchBar />
        <GptPageContent />
      </div>
    </div>
  );
};

export default GptSearchPage;
