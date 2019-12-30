import React from "react";
import { connect } from "react-redux";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Movie from "./components/MovieDescription";
import { Route } from "react-router-dom";
import "./App.css";

function App(props) {
  return (
    <div>
      <SearchBar />

      <Route
        exact
        path="/"
        render={() => <MovieList isLoading={props.isLoading} />}
      />

      {props.movieData.map(movie => (
        <Route
          key={movie.id}
          path={`/${movie.id}`}
          render={() => (
            <div>
              <Movie movie={movie} />
            </div>
          )}
        />
      ))}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    movieData: state.movieData
  };
};

export default connect(mapStateToProps)(App);
