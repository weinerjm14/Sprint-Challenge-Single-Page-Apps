import React from "react";

import {Route} from "react-router-dom";
import CharacterCard from "./CharacterCard";
import Header from "./Header";

export default function WelcomePage() {
  return (
     <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <nav>
        
        </nav>
      </header>
      
    </section>
    </header>
  );
}
