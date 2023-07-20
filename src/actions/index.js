// {
//   type: "Add_Movie", (movies = [m1, m2, m3]);
// }

// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIES_TO_LIST";

// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}

export function addFavourites(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie,
  };
}

export function removeFavourite(movie) {
  return {
    type: REMOVE_FROM_FAVOURITE,
    movie,
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val,
  };
}

export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?apikey=4f8aee23&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((res) => res.json())
      .then((movie) => {
        console.log("movie", movie);

        dispatch(addSearchResult(movie));
      });
  };
}

export function addSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}

export function handleAddMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}
