// "use client";

// import { useContext } from "react";
// import CharacterContext from "../context/CharacterContext";

// const OtraInformacion = () => {
//   const { selectedCharacter } = useContext(CharacterContext);

//   if (!selectedCharacter) {
//     return <p>Selecciona un personaje para ver su información.</p>;
//   }

//   return (
//     <div>
//       <h2 className="text-2xl font-bold my-4">
//         Información de {selectedCharacter.name}
//       </h2>
//       <p>
//         <strong>Estado:</strong> {selectedCharacter.status}
//       </p>
//       <p>
//         <strong>Especie:</strong> {selectedCharacter.species}
//       </p>
//       <p>
//         <strong>Género:</strong> {selectedCharacter.gender}
//       </p>
//       <p>
//         <strong>Origen:</strong> {selectedCharacter.origin.name}
//       </p>
//     </div>
//   );
// };

// export default OtraInformacion;
"use client";

import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";

const OtraInformacion = () => {
  const { selectedCharacter } = useContext(CharacterContext);

  if (!selectedCharacter) {
    return <p>Selecciona un personaje para ver su información.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">
        Información de {selectedCharacter.name}
      </h2>
      <p>
        <strong>Estado:</strong> {selectedCharacter.status}
      </p>
      <p>
        <strong>Especie:</strong> {selectedCharacter.species}
      </p>
      <p>
        <strong>Género:</strong> {selectedCharacter.gender}
      </p>
      <p>
        <strong>Origen:</strong> {selectedCharacter.origin.name}
      </p>
    </div>
  );
};

export default OtraInformacion;
