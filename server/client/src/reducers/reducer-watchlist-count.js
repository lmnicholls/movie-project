import { ADD_MOVIE, AUTH_USER, FETCH_WATCHLIST_MOVIES } from "../actions/types";

export default function (state = 0, action) {
  switch (action.type) {
    case AUTH_USER:
      return action.payload.watchListCount || 0;
    case FETCH_WATCHLIST_MOVIES:
      return action.payload.watchListCount;
    case ADD_MOVIE:
      return action.payload.watchListCount;
    default:
      return state;
  }
}
