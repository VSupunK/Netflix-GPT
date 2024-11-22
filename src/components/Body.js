import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
    {
      future: {
        v7_startTransition: true, // Wraps state updates in React.startTransition
        v7_fetcherPersist: true, // Changes fetcher persistence behavior
        v7_normalizeFormMethod: true, // Normalizes formMethod to uppercase
        v7_partialHydration: true, // Changes RouterProvider hydration behavior
        v7_skipActionErrorRevalidation: true, // Skips revalidation after 4xx/5xx action responses
        v7_relativeSplatPath: true, // Updates relative route resolution in splat routes
      },
    }
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // User is signed in...
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
