import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

function MovieDescription({ movie }) {
  return (
    <div className="movie-description">
      <img className="movieImage" src={movie.image} alt="movie" />
      <div>
      <StarRatingComponent
          className="rating-star"
          name="rate1"
          starCount={5}
          value={movie.rating}
        />
        <h3>{movie.name}</h3>
        <h3>{movie.year}</h3>
        
        

        <Link  to="/"><h5>Back Home </h5></Link>
      </div>
    </div>
  );
}

export default MovieDescription;
