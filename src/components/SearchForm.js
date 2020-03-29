import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearch(event.target.value);
  }; 
  console.log("search", props);
  const submitHandler = event => {
    event.preventDefault(); 
    // props.search(characterSearch);
    
    
  };
  useEffect(()=>{
    const results = props.characters.filter((filteredChar)=>{
        return filteredChar.name.toLowerCase().includes(search.toLowerCase())
    })
    setSearchResults(results);
  }, [search])
  return (
    
    <section className="search-form">
      <form onSubmit={submitHandler}> 
     <label htmlFor="search">Search</label>
     <input 
      name="search" 
      type="text" 
      placeholder="search" 
      value={search}
      onChange= {handleChange}
     />
     </form>
     {searchResults.map((item) => {
       return <CharacterCard id={item.id} species={item.species} name= {item.name} />
     })}
    </section>
  );
}
