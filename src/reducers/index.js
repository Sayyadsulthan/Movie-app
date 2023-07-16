import { ADD_MOVIES } from "../actions";

// defining the state initial state
const inintalState = {
  list: [],
  favourites: [],
};

export default function movie(state = inintalState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }

  return state;
}
