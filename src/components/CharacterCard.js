import React from "react";

import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";
export default function CharacterCard(props) {
  return (
    <div key={props.id}>
      <p>{props.name}</p>
      <p>{props.species}</p>
      

    </div>
  )
}
