import React,{ useState } from "react";
import classes from "./back.module.scss";
import {child} from "../type/res"
const BackDrop:React.FC<child> = (props) => {
  const [show, setShow] = useState<boolean>(true);
  const onClick = () => {
    // props.onClose();
    setShow(false);
  };
  return (
    <>
      {show && (
        <div className={classes.backdrop} onClick={onClick}>
          {props.children}
        </div>
      )}
    </>
  );
};

export default BackDrop;
