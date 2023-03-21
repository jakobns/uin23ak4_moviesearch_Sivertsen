import React from 'react';

function MovieList(props) {
  const { movies } = props;

  return (
    <div className='PosterCard'>
      {movies.map(movie => (
        <article key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <div>
            <h3>{movie.Title}</h3>
            <p className='CardYear'>Year: {movie.Year}</p>
            <p className='CardType'>Type: {movie.Type}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default MovieList;
