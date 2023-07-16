// {
//   type: "Add_Movie", (movies = [m1, m2, m3]);
// }

// action types
export const ADD_MOVIES = "ADD_MOVIES";

// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}
