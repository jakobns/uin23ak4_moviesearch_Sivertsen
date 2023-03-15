import React from 'react';

function MovieList(props) {
  const { movies } = props;

  return (
    <ul className='PosterCard'>
      {movies.map(movie => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <div>
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
