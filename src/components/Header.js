import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName = "", photoURL = "" } = user;
        // User is signed in...
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName || "No Name", // Default to 'No Name' if displayName is not available
            photoURL: photoURL || "default-photo-url", // Default to a placeholder image if photoURL is missing
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <div className="w-full absolute bg-gradient-to-b from-black z-10 flex items-center justify-between p-4">
      {/* Logo Section */}
      <div className="w-44 h-auto">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>

      {/* User Avatar and Logout Button */}
      {user && (
        <div className="flex items-center space-x-4">
          {/* User Avatar */}
          <img
            src={user?.photoURL} // Replace with user's profile picture URL
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
          {/* Logout Button */}
          <button
            onClick={handleSignout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
