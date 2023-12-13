
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, description, posterURL, rating, trailerLink }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${title}`}>
        <img src={posterURL} alt={title} />
        <h3>{title}</h3>
      </Link>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;
