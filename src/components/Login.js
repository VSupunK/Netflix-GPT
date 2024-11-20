import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidateData } from "../utils/validate";
// import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data

    // console.log("Email", email.current.value);
    // console.log("Password", password.current.value);

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    // console.log("Error", message);
    setErrorMessage(message);
    if (!message) return;

    //Sign In/ Sign Up Logic
  };
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
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center"
          >
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
              ref={email}
              type="text"
              placeholder="Email address"
              className="w-full h-10 m-2 p-2 rounded-md opacity-60"
            />
            {errorMessage == "Email Address is not valid!" && (
              <div>
                <p className="text-red-600 font-medium">{errorMessage}</p>
              </div>
            )}
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full h-10 m-2 p-2 rounded-md opacity-60"
            />
            {errorMessage == "Password is not valid!" && (
              <div>
                <p className="text-red-600 font-medium">{errorMessage}</p>
              </div>
            )}
            <button
              className="w-full h-10 m-2 p-2 bg-red-800 text-white rounded-md hover:bg-red-600"
              onClick={handleButtonClick}
            >
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
