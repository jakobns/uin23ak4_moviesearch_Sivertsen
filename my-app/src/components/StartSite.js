import movies from './MovieSearch';
import React, { useState, useEffect } from "react";

function StartSite() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a2a5d73d&s=James+Bond&type=movie`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
      });
  }, []);
}

export default StartSite; 
