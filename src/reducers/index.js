export default function movie(state = [], action) {
  if (action.type === "Add_Movie") {
    return action.movies;
  }

  return state;
}
