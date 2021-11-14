/** @jsx jsx */
import { jsx } from "@emotion/react";
import { gridCss } from "./css";
const Grid = ({ children, ...rest }) => {
  return (
    <div css={[gridCss]} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
