/** @jsx jsx */
import { jsx } from "@emotion/react";

import { loaderContainerCss, loaderCss } from "./css";
const Loader = () => {
  return (
    <div css={loaderContainerCss}>
      <div css={loaderCss}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
