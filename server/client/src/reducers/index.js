import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
import MoviesReducer from "./reducer-movies";
import TotalPagesReducer from "./reducer-total-pages";

const rootReducer = combineReducers({
  movies: MoviesReducer,
  total_pages: TotalPagesReducer,
});

export default rootReducer;
