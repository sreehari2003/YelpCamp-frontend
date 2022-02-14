import React from 'react'
import classes from "../back.module.scss";
import {child} from "../../type/res"

const MainBackDrop = (props:child) => {
  return (
    <div className={`${classes.backdrop} flex`}>
          {props.children}
        </div>
  )
}

export default MainBackDrop