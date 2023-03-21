import React, { useState } from 'react';
import MovieList from './MovieList.js';
import StartSite from './StartSite.js'


function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a2a5d73d&s=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch(error => {
        console.error(error);
        setMovies([]);
      });
  };

  return (
    <div>
      <form className='SearchBar' onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' value={searchTerm} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <StartSite />
      )}
    </div>
  );
}

export default MovieSearch;
