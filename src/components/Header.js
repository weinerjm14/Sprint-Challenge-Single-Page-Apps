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
    justify-content: space-between;
  `;
  const StyledNavSec = styled.section`
    display:flex;
    justify-content: space-evenly;
    width: 33%;
    padding-right: 5%;
  `;
  return (
    <div>
    <StyledNav>
      <section  className="title">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </section>
      <StyledNavSec className="links">
      <Link to="/" >Home</Link>
      <Link to="/characters" >Characters</Link>
      </StyledNavSec>
      </StyledNav>
      
      <Route  exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
  </div>
     
  )
}
