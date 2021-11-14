/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "@emotion/react";
import { buttonCss } from "./css";

const Button = ({ children, outline, ...rest }) => {
  return (
    <button css={buttonCss(outline)} type="button" {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  outline: PropTypes.bool
};

export default Button;
