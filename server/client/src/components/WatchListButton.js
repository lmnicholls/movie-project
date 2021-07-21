import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToWatchList } from "../actions";

const WatchListButton = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.entries[id]);
  const authenticated = useSelector((state) => state.auth.authenticated);

  if (authenticated) {
    return (
      <button onClick={() => dispatch(addMovieToWatchList(movie))}>
        Add to WatchList
      </button>
    );
  } else {
    return null;
  }
};

export default WatchListButton;
