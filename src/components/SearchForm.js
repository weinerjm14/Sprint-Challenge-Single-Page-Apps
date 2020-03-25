import React, { useState } from "react";

export default function SearchForm(props) {
  const [search, setSearch] = useState("");
  const handleChange = event => {
    setSearch(event.target.value);
  }; 
  console.log("earch", props);
  const submitHandler = event => {
    event.preventDefault(); 
 
    const characterSearch = props.characters.filter(character => {
      return (
        character.name.toLowerCase()
        // .indexOf(results.toLowerCase()) !== -1;
        // console.log('charsearch', search);
      )
      
      
    });
    // props.search(characterSearch);
    
    
  };
  return (
    
    <section className="search-form">
      <form onSubmit={submitHandler}> 
     <label for="search">Search</label>
     <input 
      name="search" 
      type="text" 
      placeholder="search" 
      value={search}
      onChange={handleChange}
     />
     </form>
    </section>
  );
}
