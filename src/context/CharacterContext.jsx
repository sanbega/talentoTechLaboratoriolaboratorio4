"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        setCharacters,
        selectedCharacter,
        setSelectedCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
