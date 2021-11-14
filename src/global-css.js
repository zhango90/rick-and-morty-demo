import { css } from "@emotion/react";
import normalize from "normalize.css";

export const globalCss = css`
  ${normalize}
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    font-size: 1.4rem;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

export const appCss = css`
  min-height: 100vh;
  padding: 6rem 3%;
  position: relative;
  background: rgb(11, 37, 69);
  background: linear-gradient(
    145deg,
    rgba(11, 37, 69, 1) 0%,
    rgba(19, 49, 92, 1) 35%,
    rgba(19, 64, 116, 1) 100%
  );
  color: #fff;
  font-family: "Roboto", sans-serif;

  h1 {
    margin: 0;
    font-size: 3.8rem;
    font-family: "Rubik";
    font-weight: 700;
    text-align: center;
  }
`;
