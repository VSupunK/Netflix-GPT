import React, { useRef, useState } from "react";
import Header from "./Header";
import { addUser } from "../utils/userSlice";
import { Link } from "react-router-dom";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { LOGO, Logo, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null); // Ref for First Name
  const lastName = useRef(null); // Ref for Last Name

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );

    if (message) {
      setErrorMessage(message); // Display validation error message
      return;
    }

    // Sign-Up or Sign-In Logic
    if (!isSignInForm) {
      // Sign-Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // Update Profile with First and Last Name
          updateProfile(user, {
            displayName: `${firstName.current.value} ${lastName.current.value}`,
            photoURL: { USER_AVATAR }, // You can use a placeholder
          })
            .then(() => {
              // Profile updated
              console.log("User signed up:", user);
              const {
                uid,
                email,
                displayName = "",
                photoURL = "",
              } = auth.currentUser;
              // User is signed in...
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName || "No Name", // Default to 'No Name' if displayName is not available
                  photoURL: photoURL || "default-photo-url", // Default to a placeholder image if photoURL is missing
                })
              );
            })
            .catch((error) => {
              // An error occurred while updating profile
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign-In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log("User signed in:", user);
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
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
          <img src={LOGO} alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 -z-5"></div>
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
              <>
                <input
                  ref={firstName}
                  type="text"
                  placeholder="First Name"
                  className="w-full h-10 m-2 p-2 rounded-md opacity-60"
                />
                <input
                  ref={lastName}
                  type="text"
                  placeholder="Last Name"
                  className="w-full h-10 m-2 p-2 rounded-md opacity-60"
                />
              </>
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email address"
              className="w-full h-10 m-2 p-2 rounded-md opacity-60"
            />
            {errorMessage === "Email Address is not valid!" && (
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
            {errorMessage === "Password is not valid!" && (
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

//newemail@gmail.com
//ZXC@34qwe
export default Login;
