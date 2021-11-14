/** @jsx jsx */
import { jsx } from "@emotion/react";
import { imgCss } from "./css";
import React from "react";
import { SuspenseImg } from "components/SuspenseImg";
import Card from "components/UI/Card";
import CharacterInfo from "../CharacterInfo";
import { useToggle } from "services/utils";
import Button from "components/UI/Button";
const CharacterItem = (props) => {
  const { toggleOff, toggleOn, toggled } = useToggle();
  const { name, image } = props;
  return (
    <>
      <Card>
        <SuspenseImg css={imgCss} src={image} alt={`${name} character`} />
        <h3>{name}</h3>
        <Button outline onClick={toggleOn}>
          More Info
        </Button>
      </Card>
      {toggled && <CharacterInfo onClose={toggleOff} character={props} />}
    </>
  );
};

export default CharacterItem;
