import { ADD_MOVIES, ADD_FAVOURITES } from "../actions";

// defining the state initial state
const inintalState = {
  list: [],
  favourites: [],
};

export default function movie(state = inintalState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITES:
      console.log(action);

      return {
        ...state,
        favourites: [ ...state.favourites, action.movie],
      };

    default:
      return state;
  }

  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  //   };
  // }

  // return state;
}
