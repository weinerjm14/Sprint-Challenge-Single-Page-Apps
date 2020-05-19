import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchChar, setSearchChar] = useState([]);
  // const characterSearch = characters.filter(character => {
  //   return (
  //     setSearchChar(search.value.toLower().indexof.character);
  //   )
  // };
  
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
      console.log("server error", error);
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
  console.log('character list', characters)
  const CharCard = styled.div `
    display: flex;
    justify-content: space-between;
    border: 3px inset green;
    margin: 2% 4%;
    padding: 1%;
  `;


  return (
   
   
    <section className="character-list">
       <SearchForm characters={characters} />
      {characters.map((listcharacters) => {
        return (
          <CharCard className="character-info" key={listcharacters.id}>
          <h3>Character Name: {listcharacters.name}</h3><br />
          <p className="species">Species: {listcharacters.species}</p>
          </CharCard>
        )
        
      })}
    </section>
  )
  
  
}
// function CharacterDetails ({characters}) {
//   return(
//     console.log('character list', characters)
//   );
// }
