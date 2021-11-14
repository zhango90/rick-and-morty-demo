/** @jsx jsx */
import { jsx } from "@emotion/react";
import { buttonCss } from "./css";

const Button = ({ children, outline, ...rest }) => {
  return (
    <button css={buttonCss(outline)} type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
