import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen relative">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/GB-en-20241104-TRIFECTA-perspective_b22b6633-ce0d-49ce-bab9-3e20d0259ad4_large.jpg"
            alt="bg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 -z-5"></div>{" "}
        {/* This creates the overlay */}
        {/* Form container */}
        <div className="relative bg-black bg-opacity-60 px-10 py-6 rounded-lg w-[400px]">
          <h1 className="text-white text-2xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form className="flex flex-col items-center">
            {!isSignInForm && (
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-10 m-2 p-2 rounded-md opacity-60"
              />
            )}
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-10 m-2 p-2 rounded-md opacity-60"
              />
            )}
            <input
              type="text"
              placeholder="Email or phone number"
              className="w-full h-10 m-2 p-2 rounded-md opacity-60"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-10 m-2 p-2 rounded-md opacity-60"
            />
            <button className="w-full h-10 m-2 p-2 bg-red-800 text-white rounded-md hover:bg-red-600">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex justify-between items-center w-full">
              <div>
                <input
                  type="checkbox"
                  className="my-2 mr-2 hover:cursor-pointer"
                />
                <span className="text-white">Remember me</span>
              </div>
              <div>
                <Link to="/browse" className="text-white">
                  Need help?
                </Link>
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mt-4">
              <span className="text-gray-400 hover:cursor-default">
                {isSignInForm ? "New to Netflix?" : "Already registered!"}
              </span>
              {/* <Link to="/browse" className="text-gray-300 hover:text-white" onClick={toggleSignIn}>
                Sign up now
              </Link> */}
              <h1
                className="text-gray-300 hover:text-white hover:cursor-pointer"
                onClick={toggleSignIn}
              >
                {isSignInForm ? "Sign Up" : "Sign In"}
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
