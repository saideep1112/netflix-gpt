const GptSearchBar = () => {
  return (
    <div className="w-6/12 mx-auto">
      <form>
        <input
          className="w-full py-4 px-2 rounded-md bg-[#000000e7] text-white"
          type="text"
          placeholder="What kind of movie do you want to watch now ?"
        ></input>
      </form>
    </div>
  );
};

export default GptSearchBar;
