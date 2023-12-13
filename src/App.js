import React, { useState } from "react";
import {  Route, Routes } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieDescription from "./MovieDescription";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://example.com/inception-poster.jpg",
      rating: 4.5,
      trailerLink: "https://www.youtube.com/embed/8hP9D6kZseM",
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = ({ title, rating }) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...filteredMovies, newMovie]);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Routes>
        <Route path="/movies/:title">
          <MovieDescription movies={movies} />
        </Route>
        <Route path="/">
          <Filter onFilterChange={handleFilterChange} />
          <MovieList movies={filteredMovies} />

          <button
            onClick={() =>
              addMovie({
                title: "The Matrix",
                description: "A sci-fi classic",
                posterURL: "https://example.com/matrix-poster.jpg",
                rating: 4.8,
                trailerLink: "https://www.youtube.com/embed/m8e-FF8MsqU",
              })
            }
          >
            Add The Matrix
          </button>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
