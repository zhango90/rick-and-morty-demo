/** @jsx jsx */
import { jsx } from "@emotion/react";
import { cardWrapper } from "./css";
const Card = ({ children }) => {
  return <div css={cardWrapper}>{children}</div>;
};

export default Card;
