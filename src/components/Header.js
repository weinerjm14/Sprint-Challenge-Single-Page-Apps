import React from "react";
import {Link, Route} from "react-router-dom";
import CharacterList from "./CharacterList";
// import LocationCard from "./LocationCard";
import WelcomePage from "./WelcomePage";
// import CharacterCard from "./CharacterCard";
import styled from "styled-components";

export default function Header() {
  const StyledNav = styled.nav`
    display: flex;
    flex-direction: row,
    justify-items: flex-end;
  `;

  return (
    <div>
    <StyledNav>
      <section  className="title">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </section>
      <section className="links">
      <Link to="/" >Home</Link>
      <Link to="/characters" >Characters</Link>
      </section>
      </StyledNav>
      
      <Route  exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
  </div>
     
  )
}
