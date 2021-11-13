import React from "react";

const CharacterItem = ({ name, image }) => {
  return (
    <div>
      <img src={image} alt={`${name} character`} />
    </div>
  );
};

export default CharacterItem;
