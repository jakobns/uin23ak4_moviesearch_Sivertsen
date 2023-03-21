import './StyleFolder/Main.css';
import React from 'react';
import MovieSearch from './components/MovieSearch';
import StartSite from './components/StartSite';


function App() {
  return (
    <div>
      <header>
      <h1>Movie Search</h1>
      </header>
      <MovieSearch />
      <section className='FrontPage'>
        <h1>James Bond filmer</h1>
      <StartSite />
      </section>
    </div>
  );
}

export default App;

