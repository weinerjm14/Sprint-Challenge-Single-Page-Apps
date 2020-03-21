import React from "react";

import {Link} from "react-router-dom";
import CharacterCard from "./CharacterCard";
// import Header from "./Header";

export default function WelcomePage() {
  return (
     <header className="ui centered">
       <nav>
   <Link exact to="/" component={WelcomePage}>Home</Link>
   <Link exact to="/characters" component={CharacterCard}>Characters</Link>
   </nav>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        
      </header>
      
    </section>
    </header>
  );
}
