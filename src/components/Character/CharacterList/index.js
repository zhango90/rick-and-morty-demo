/** @jsx jsx */
import { jsx } from "@emotion/react";
import { characterListCss } from "./css";
import Grid from "components/UI/Grid";

const CharacterList = ({ children }) => {
  return <Grid css={characterListCss}>{children}</Grid>;
};

export default CharacterList;
