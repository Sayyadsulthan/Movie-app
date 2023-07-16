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

  render() {
    console.log("App component", this.props.store.getState());
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />

        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourute</div>
          </div>
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={`movies-${index}`} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
