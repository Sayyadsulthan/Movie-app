import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITE,
  SET_SHOW_FAVOURITES,
} from "../actions";

// defining the state initial state
const inintalMovieState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = inintalMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: [...action.movies],
      };

    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.movie],
      };

    case REMOVE_FROM_FAVOURITE:
      const updatedFavourite = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
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

    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
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

const initialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };

    // case ADD_MOVIE_TO_LIST:
    //   return {
    //     ...state,
    //     showSearchResults: false,
    //   };
    default:
      return state;
  }
}

// const initialRootState = {
//   movies: inintalMovieState,
//   search: initialSearchState,
// };

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies: movies,
  search, //using the short hand property
});
