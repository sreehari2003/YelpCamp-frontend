import React from "react";
import { createPortal } from "react-dom";
import BackDrop from "./BackDrop";
const NavModal = (props) => {
  const val = <BackDrop>{props.children}</BackDrop>;
  return createPortal(val, document.getElementById("nav"));
};

export default NavModal;
