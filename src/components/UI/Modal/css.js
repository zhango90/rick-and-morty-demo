import { css } from "@emotion/react";

export const modalCss = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 5rem;
  z-index: 1000;
  border-radius: 1.6rem;
  font-family: "Open Sans";
  h1,
  h2 {
    font-family: "Rubik";
  }
`;

export const overlayCss = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
