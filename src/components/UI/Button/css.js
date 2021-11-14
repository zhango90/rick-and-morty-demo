import { css } from "@emotion/react";

export const buttonCss = css`
  background-color: transparent;
  border: 2px #fff solid;
  color: #fff;
  font-size: 2rem;
  padding: 1rem 2rem;
  border-radius: 1.6rem;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;
