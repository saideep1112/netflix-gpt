import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((store) => store?.user?.displayName);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex justify-between bg-gradient-to-b from-black to-transparent items-center pr-8 py-4 pl-4">
      <div>
        <img
          className="w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        ></img>
      </div>
      <div className="flex">
        <div className="px-4">
          <p className="text-white">Hi, {name}</p>
        </div>
        <div>
          <button className="text-white" onClick={handleClick}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
