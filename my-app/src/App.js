import './StyleFolder/Main.css';
import React from 'react';
import Searchresults from './components/Searchresults';
import StartSite from './components/StartSite';


function App() {
  return (
    <div>
      <header>
      <h1>Movie Search</h1>
      </header>
      <Searchresults />
      <section className='FrontPage'>
        <h1>James Bond filmer</h1>
      <StartSite />
      </section>
    </div>
  );
}

export default App;

