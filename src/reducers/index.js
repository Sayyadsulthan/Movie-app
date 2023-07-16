import {
  ADD_MOVIES,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITE,
  SET_SHOW_FAVOURITES
} from "../actions";

// defining the state initial state
const inintalState = {
  list: [],
  favourites: [],
  showFavourites: false
};

export default function movie(state = inintalState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_TO_FAVOURITES:
      console.log(action);

      return {
        ...state,
        favourites: [...state.favourites, action.movie],
      };

    case REMOVE_FROM_FAVOURITE:
      const updatedFavourite = state.favourites.filter(
        (movie) => movie.Title != action.movie.Title
      );

      return {
        ...state,
        favourites: updatedFavourite,
      };
    // const index = state.favourites.indexOf(action.movie);
    // if (index !== -1) {
    //   let updatedFavourite = state.favourites;
    //   updatedFavourite.splice(index, 1);
    //   return {
    //     ...state,
    //     favourites: [...updatedFavourite],
    //   };
    // } else {
    //   return {
    //     ...state,
    //   };
    // }


    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val
      }
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
