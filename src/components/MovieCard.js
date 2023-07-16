import React from "react";
import { addFavourites } from "../actions";

class MovieCard extends React.Component {
  // used to handle the adding favourite to state
  handleAddFavourite = () => {
    const { movie } = this.props;

    this.props.dispatch(addFavourites(movie));
  };

  handleRemoveFavourite = () => {};

  render() {
    const { movie } = this.props;
    const { isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {/* {console.log(isMovieFavourite)} */}
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleRemoveFavourite}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleAddFavourite}
              >
                favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
