import "../index.css";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { data } from "../data";
import { addMovies, setShowFavourites } from "../actions";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));

    // console.log(this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    // const { favourites } = movies;

    const index = movies.favourites.indexOf(movie);

    // if the index is not empty or index of movie exist
    if (index !== -1) {
      return true;
    }
    return false;
  };

  handleShowFavourites = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {
    console.log("App component", this.props.store.getState());
    const { movies } = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
    return (
      <div className="App">
        <Navbar />

        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.handleShowFavourites(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.handleShowFavourites(true)}
            >
              Favourute
            </div>
          </div>

          {showFavourites
            ? favourites.map((movie, index) => (
                <MovieCard
                  movie={movie}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isMovieFavourite(movie)}
                  key={`movies-${index}`}
                />
              ))
            : list.map((movie, index) => (
                <MovieCard
                  movie={movie}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isMovieFavourite(movie)}
                  key={`movies-${index}`}
                />
              ))}

          {favourites.length === 0 && (
            <div className="no-movies"> No Movies to show...! </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
