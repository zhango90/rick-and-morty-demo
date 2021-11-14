import { css } from "@emotion/react";

export const characterInfoCss = css`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #134074;
  > * {
    width: 100%;
  }
  h2 {
    margin-bottom: 0.8rem;
  }
  p {
    margin-top: 0;
  }
`;

export const characterInfoImgCss = css`
  border-radius: 1.6rem;
`;

export const characterInfoMainCss = css`
  display: flex;

  > *:not(:last-child) {
    margin-right: 1.6rem;
  }
`;
