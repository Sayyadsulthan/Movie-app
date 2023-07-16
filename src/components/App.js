import "../index.css";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { data } from "../data";
import { addMovies } from "../actions";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));

    console.log(this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);

    // if the index is not empty or index of movie exist
    if (index !== -1) {
      return true;
    }
    return false;
  };

  render() {
    console.log("App component", this.props.store.getState());
    const { list } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />

        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourute</div>
          </div>
          {list.map((movie, index) => (
            <MovieCard
              movie={movie}
              dispatch={this.props.store.dispatch}
              isFavourite = {this.isMovieFavourite(movie)}
              key={`movies-${index}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
