import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { setShowGptPage } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((store) => store?.user?.displayName);
  const showGptPage = useSelector((store) => store?.gpt?.showGptPage);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearch = () => {
    dispatch(setShowGptPage());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email } = user;
        dispatch(addUser({ email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div
      className={
        name
          ? "flex justify-between items-center pr-8 py-3 pl-4 bg-gradient-to-b from-black  to-[#00000047] absolute left-0 right-0 z-10"
          : "flex justify-between items-center pr-8 py-4 pl-4"
      }
    >
      <div>
        <img
          className={name ? "w-36" : "w-48"}
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        ></img>
      </div>
      {name && (
        <div className="flex items-center">
          <div className="px-4">
            <p className="text-white font-bold">Hi, {name}</p>
          </div>
          <div className="ml-2">
            <button
              className="text-white bg-[#d31f1fe1] px-4 py-2 font-semibold rounded-md"
              onClick={handleGptSearch}
            >
              {showGptPage ? "Home" : "GPT Search"}
            </button>
          </div>
          <div className="ml-2">
            <button
              className="text-white bg-[#d31f1fe1] px-4 py-2 font-semibold rounded-md"
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
