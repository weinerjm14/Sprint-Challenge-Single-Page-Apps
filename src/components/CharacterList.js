import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchChar, setSearchChar] = useState("");

  useEffect(() => {
    const getChars = () => {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => {
          setCharacters(response.data.results);
        })
        .catch((error) => {
          console.log("server error", error);
        });
    };
    getChars();
  }, []);

  const CharCard = styled.div`
    display: flex;
    justify-content: space-between;
    border: 3px inset green;
    margin: 2% 4%;
    padding: 1%;
  `;

  return (
    <section className="character-list">
      <SearchForm searchChar={searchChar} setSearchChar={setSearchChar} />
      {characters
        .filter((char) =>
          char.name.toLowerCase().includes(searchChar.toLowerCase())
        )
        .map((listcharacters) => {
          return (
            <CharCard className="character-info" key={listcharacters.id}>
              <h3>Character Name: {listcharacters.name}</h3>
              <br />
              <p className="species">Species: {listcharacters.species}</p>
            </CharCard>
          );
        })}
    </section>
  );
}
