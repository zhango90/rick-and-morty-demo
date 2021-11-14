/** @jsx jsx */
import { jsx } from "@emotion/react";

import { loaderContainerCss, loaderCss } from "./css";
const Loader = (props) => {
  return (
    <div css={loaderContainerCss} {...props}>
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
