import React, { useRef, useState } from "react";
import { handleForm } from "../utils/handleForm";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispath = useDispatch();

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrMessage(null);
  };

  const handleClick = () => {
    const message = handleForm(email.current.value, password.current.value);
    setErrMessage(message);

    if (message) return;

    if (!isSignIn) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { email, displayName } = user;
              dispath(addUser({ email: email, displayName: displayName }));
            })
            .catch((error) => {
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <div>
        <img
          className="absolute -z-10 w-screen h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt="background"
        ></img>
      </div>
      <div className="bg-[#0000008b] w-screen h-screen">
        <div className="w-10/12 mx-auto">
          <Header />
        </div>
        <div className="w-4/12 mx-auto bg-[#000000c6] px-4 py-14">
          <form
            className="flex flex-col w-9/12 mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h1 className="text-white text-3xl font-bold">Sign In</h1>
            {!isSignIn && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="p-4 rounded bg-transparent border border-[#fff] mt-8 text-white"
              ></input>
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="p-4 rounded bg-transparent border border-[#fff] mt-8 text-white"
            ></input>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-4 rounded bg-transparent border border-[#fff] mt-8 text-white"
            ></input>
            <button
              className="text-white bg-red-700 p-4 mt-8 rounded font-medium"
              onClick={handleClick}
            >
              {isSignIn ? "SignIn" : "Sign Up"}
            </button>
            <p className="text-red-600">{errMessage}</p>
            <p
              className="text-white mt-6 cursor-pointer"
              onClick={handleSignIn}
            >
              {isSignIn
                ? "New to Netflix? Sign up now."
                : "Already member ? Click to signin."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
