import React from 'react'
import classes from "../back.module.scss";

const MainBackDrop = (props:any) => {
  return (
    <div className={`${classes.backdrop} flex`}>
          {props.children}
        </div>
  )
}

export default MainBackDrop