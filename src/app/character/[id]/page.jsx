import Episodios from "../../../components/Episodios";
import OtraInformacion from "../../../components/OtraInformacion";
import CharacterDetailClient from "../../../components/CharacterDetailClient";
import { CharacterProvider } from "../../../context/CharacterContext";
import axios from "axios";

const CharacterDetail = async ({ params }) => {
  const { id } = params;

  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const character = response.data;

    return (
      <CharacterProvider>
        <CharacterDetailClient character={character} />
        <div className="container mx-auto">
          <Episodios />
          <OtraInformacion />
        </div>
      </CharacterProvider>
    );
  } catch (error) {
    console.error("Error fetching character data:", error);
    return (
      <div>
        <h1>Error fetching character data</h1>
        <p>{error.message}</p>
      </div>
    );
  }
};

export default CharacterDetail;
