import axios from "axios";
import { FETCH_MOVIES, FETCH_MOVIE } from "./types";

export const fetchMovies =
  (page = 1) =>
  (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      )
      .then(function (response) {
        dispatch({ type: FETCH_MOVIES, payload: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&include_adult=false&include_video=false`
    )
    .then(function (response) {
      dispatch({ type: FETCH_MOVIE, payload: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
};
