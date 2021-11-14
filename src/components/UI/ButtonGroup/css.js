import { css } from "@emotion/react";

export const buttonGroupCss = css`
  display: flex;
  align-items: center;
  justify-content: stretch;
  margin: 4rem 0;
  width: 100%;
  > *:not(:last-child) {
    margin-right: 1rem;
  }
  > * {
    flex-grow: 1;
  }
`;
