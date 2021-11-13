/** @jsx jsx */
import { jsx } from "@emotion/react";
import { characterListCss } from "./css";

const CharacterList = ({ children }) => {
  return <div css={characterListCss}>{children}</div>;
};

export default CharacterList;
