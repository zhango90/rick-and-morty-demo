/** @jsx jsx */
import { jsx } from "@emotion/react";
import { imgCss } from "./css";

import { SuspenseImg } from "components/SuspenseImg";
import Card from "components/UI/Card";
const CharacterItem = ({ name, image }) => {
  return (
    <Card>
      <SuspenseImg css={imgCss} src={image} alt={`${name} character`} />
      <h3>{name}</h3>
    </Card>
  );
};

export default CharacterItem;
