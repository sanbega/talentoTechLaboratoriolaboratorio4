// "use client";

// import { useContext, useEffect, useState } from "react";
// import CharacterContext from "../context/CharacterContext";
// import axios from "axios";

// const Episodios = () => {
//   const { selectedCharacter } = useContext(CharacterContext);
//   const [episodes, setEpisodes] = useState([]);

//   useEffect(() => {
//     if (selectedCharacter) {
//       const fetchEpisodes = async () => {
//         const episodePromises = selectedCharacter.episode.map((url) =>
//           axios.get(url)
//         );
//         const episodeResponses = await Promise.all(episodePromises);
//         setEpisodes(episodeResponses.map((response) => response.data));
//       };

//       fetchEpisodes();
//     }
//   }, [selectedCharacter]);

//   if (!selectedCharacter) {
//     return <p>Selecciona un personaje para ver sus episodios.</p>;
//   }

//   return (
//     <div>
//       <h2 className="text-2xl font-bold my-4">
//         Episodios de {selectedCharacter.name}
//       </h2>
//       <ul>
//         {episodes.map((episode) => (
//           <li key={episode.id}>{episode.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Episodios;
"use client";

import { useContext, useEffect, useState } from "react";
import CharacterContext from "../context/CharacterContext";
import axios from "axios";

const Episodios = () => {
  const { selectedCharacter } = useContext(CharacterContext);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (selectedCharacter) {
      const fetchEpisodes = async () => {
        const episodePromises = selectedCharacter.episode.map((url) =>
          axios.get(url)
        );
        const episodeResponses = await Promise.all(episodePromises);
        setEpisodes(episodeResponses.map((response) => response.data));
      };

      fetchEpisodes();
    }
  }, [selectedCharacter]);

  if (!selectedCharacter) {
    return <p>Selecciona un personaje para ver sus episodios.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">
        Episodios de {selectedCharacter.name}
      </h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>{episode.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Episodios;
