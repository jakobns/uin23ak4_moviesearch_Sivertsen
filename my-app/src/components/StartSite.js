import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';

function StartSite() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a2a5d73d&s=James+Bond')
      .then(response => response.json())
      .then(data => setMovies(data.Search));
  }, []);

  return (
    <section>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies found.</p>
      )}
    </section>
  );
}

export default StartSite;
