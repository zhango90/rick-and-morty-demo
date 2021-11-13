import React from "react";
import { SuspenseImg } from "components/SuspenseImg";
const CharacterItem = ({ name, image }) => {
  return (
    <div>
      <SuspenseImg src={image} alt={`${name} character`} />
      <h3>{name}</h3>
    </div>
  );
};

export default CharacterItem;
