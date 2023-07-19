import React from "react";
import {  handleAddToMovieToList, handleMovieSearch } from "../actions";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      showSearchResults: false,
      searchText: "",
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(handleAddToMovieToList(movie));
    this.setState({
      showSearchResults: false,
    });
  };

  handleSearch = () => {
    const { searchText } = this.state;
    // this.props.dispatch(handleMovieSearch(searchText));
    this.props.dispatch(handleMovieSearch(searchText));
    this.setState({
      showSearchResults:true
    })
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { showSearchResults } = this.state;
    const { result } = this.props.search;
    console.log(this.state.searchText);
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={() => this.handleSearch()}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img alt="" src={result.Poster} />

                <div className="movie-info">
                  <span>{result.Title}</span>
                  <button onClick={() => this.handleAddToMovies(result)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
