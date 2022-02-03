import React from "react";
import classes from "./back.module.scss";
const BackDrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  );
};

export default BackDrop;
