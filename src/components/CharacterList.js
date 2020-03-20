import React, { useEffect, useState } from "react";

import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  ;
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChars = () => {axios
    .get('https://rickandmortyapi.com/api/character')
    .then(response => {
      // console.log("characters respons", response.data.characters);
      setCharacters(response.data.results);
      
    })
    .catch(error => {
      console.log(error);
    });}
    getChars();
  }, []);
  //example from react wars to comapare to
  // useEffect(() => {
  //   const getMovies = () => {
  //     axios
  //       .get('http://localhost:5000/api/movies')
  //       .then(response => {
  //         setMovies(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Server Error', error);
  //       });
  //   }
    
  //   getMovies();
  // }, []);
  // console.log('character list', characters)
  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      
    </section>
  );
}
