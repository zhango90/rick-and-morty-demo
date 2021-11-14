/** @jsx jsx */
import { jsx } from "@emotion/react";
import { buttonCss } from "./css";

const Button = ({ children, ...rest }) => {
  return (
    <button css={buttonCss} type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
