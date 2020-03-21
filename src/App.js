import React from "react";
import Header from "./components/Header.js";
// import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <CharacterCard />
    </main>
  );
}
