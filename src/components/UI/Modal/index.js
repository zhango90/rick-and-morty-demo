/** @jsx jsx */
import { jsx } from "@emotion/react";

// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDom from "react-dom";
import Button from "../Button";
import { modalCss, overlayCss } from "./css";

const Modal = ({ children, onClose, customCss }) => {
  return ReactDom.createPortal(
    <>
      <div css={overlayCss} onClick={onClose} />
      <div css={[modalCss, customCss]}>
        {children}
        <Button onClick={onClose}>Close Modal</Button>
      </div>
    </>,
    document.getElementById("modal")
  );
};
export default Modal;
