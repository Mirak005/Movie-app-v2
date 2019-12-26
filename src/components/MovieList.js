import React from "react";
import MovieCard from "./MovieCard";
import AddForm from "./AddForm";
import { connect } from "react-redux";
import { deleteMovie } from "./redux/actions";
import withLoader from "./withLoader";

function MovieList(props) {
  return (
    //map movie card
    <div className="movie-list-container">
      {props.movieData
        .filter(
          movie =>
            movie.rating >= props.rate &&
            movie.name.toLowerCase().includes(props.search.toLowerCase().trim())
        )
        .map(movie => (
          <MovieCard
            movie={movie}
            key={movie.id}
            deleteMovie={() => props.deleteMovie(movie.id)}
          />
        )).length < 1
        ? [
            <div className="noResult">
              <h6>Oups!No result...</h6>
            </div>
          ]
        : props.movieData
            .filter(
              movie =>
                movie.rating >= props.rate &&
                movie.name
                  .toLowerCase()
                  .includes(props.search.toLowerCase().trim())
            )
            .map(movie => (
              <MovieCard
                movie={movie}
                key={movie.id}
                deleteMovie={() => props.deleteMovie(movie.id)}
              />
            ))}

      <AddForm />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    movieData: state.movieData,
    search: state.search,
    rate: state.rating
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: payload => dispatch(deleteMovie(payload))
  };
};

export default withLoader(
  connect(mapStateToProps, mapDispatchToProps)(MovieList)
);
