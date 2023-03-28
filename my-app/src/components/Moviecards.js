import React from 'react';

function Moviecards(props) {
  const { movies } = props;

  return (
    <section className='PosterCard'>
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
    </section>
  );
}

export default Moviecards;
