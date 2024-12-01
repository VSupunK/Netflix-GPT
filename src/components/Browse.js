import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const Browse = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
