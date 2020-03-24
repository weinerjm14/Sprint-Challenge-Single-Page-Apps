import React from "react";

// import {Link} from "react-router-dom";
// import CharacterCard from "./CharacterCard";
// import Header from "./Header";

export default function WelcomePage() {
  return (
     <header className="ui centered">
      <section className="welcome-page">
      <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </section>
   
    </header>
  );
}
