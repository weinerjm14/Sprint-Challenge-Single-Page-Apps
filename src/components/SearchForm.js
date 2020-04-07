import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({ setSearchChar, searchChar }) {
  const handleChange = (event) => {
    setSearchChar(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search</label>
        <input
          name="search"
          type="text"
          placeholder="search"
          value={searchChar}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
