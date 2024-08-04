"use client";

import { useContext, useEffect } from "react";
import CharacterContext from "../context/CharacterContext";

const CharacterDetailClient = ({ character }) => {
  const { setSelectedCharacter } = useContext(CharacterContext);

  useEffect(() => {
    if (character && setSelectedCharacter) {
      setSelectedCharacter(character);
    }
  }, [character, setSelectedCharacter]);

  return null;
};

export default CharacterDetailClient;
