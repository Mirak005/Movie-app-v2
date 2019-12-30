import React from "react";
import {  Link } from "react-router-dom"
import EditForm from "./EditForm";
import StarRatingComponent from "react-star-rating-component";
import play from "./play-flat.png";

function MovieCard({ movie, deleteMovie = () => {} }) {
  return (
    <div className="card-container">
      <a href="/" className="movie-card">
        <StarRatingComponent
          className="rating-star"
          name="rate1"
          starCount={5}
          value={movie.rating}
        />
        <img className="movieImage" src={movie.image} alt="movie" />
        <h3 className="movieName">{movie.name}</h3>
        <p className="movieYear">{movie.year}</p>

        <div className="overlay">
          <img src={play} alt="img" />
        </div>
      </a>
      <div className="MovieCardButtonsContainer">
        <EditForm movie={movie} />
        <button  onClick={deleteMovie}>DELETE</button>
        <Link   to ={`/${movie.id}`}><button>DESCRIPTION</button></Link>
        
      </div>
    </div>
  );
}

export default MovieCard;
