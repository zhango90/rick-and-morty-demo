/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "@emotion/react";
import { buttonGroupCss } from "./css";
const ButtonGroup = ({ children }) => {
  return <div css={buttonGroupCss}>{children}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node
};

export default ButtonGroup;
