import "../index.css";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { data } from "../data";
import { addMovies, setShowFavourites } from "../actions";
import { StoreContext, connect } from "../index";

class App extends React.Component {
  componentDidMount() {
    // const { dispatch } = this.props;

    // store.subscribe(() => {
    //   this.forceUpdate();
    // });

    this.props.dispatch(addMovies(data));

    console.log(this.props);
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    // const { favourites } = movies;

    const index = movies.favourites.indexOf(movie);

    // if the index is not empty or index of movie exist
    if (index !== -1) {
      return true;
    }
    return false;
  };

  handleShowFavourites = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };

  render() {
    // console.log("App component", this.props.getState());
    const { movies, search } = this.props;
    const { list, favourites, showFavourites } = movies;

    return (
      <div className="App">
        <Navbar dispatch={this.props.dispatch} search={search} />

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
                  dispatch={this.props.dispatch}
                  isFavourite={this.isMovieFavourite(movie)}
                  key={`movies-${index}`}
                />
              ))
            : list.map((movie, index) => (
                <MovieCard
                  movie={movie}
                  dispatch={this.props.dispatch}
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

// // USING THE WRAPPERAPP CLASS TO WRAP THE APP COMPONENT
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => {
//           return <App store={store} />;
//         }}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state) {
  // this callback will retuen movies and search from the state
  return {
    movies: state.movies,
    search: state.search,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
// const connectedAppComponent = connect(callback)(App);

export default connectedAppComponent;
