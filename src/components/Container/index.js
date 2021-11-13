/** @jsx jsx */
import { jsx } from "@emotion/react";
import { containerCss } from "./css";

const Container = ({ children }) => {
  return <div css={containerCss}>{children}</div>;
};

export default Container;
