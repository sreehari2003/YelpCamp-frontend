import React from 'react'
import Image from 'next/Image'
import { response }  from "../type/res"
import classes from "./main.module.scss"
import Button from '@mui/material/Button';
import Readrate from "./Readrate"
const MainCard:React.FC<response> = (props) => {
  return (
   <div className={classes.body}>
        <div className={classes.box} key={props._id}>
    <Image
      src={props.image}
      width={400}
      height={400}
      key={props._id}
      alt={props.title}
      className={classes.img}
    />
    <div className={classes.box_sub}>
      <h2>{props.title}</h2>
    </div>
    <div className={classes.info}>
        <p>{props.description}</p>
    </div>
    <div className={`${classes.info} ${classes.price}`}>
        ${props.price}
    </div>
    <div className={`${classes.info} ${classes.btn}`}>
    <Button variant="contained">Edit</Button>
    <Button variant="contained">Delete</Button>
    </div>
    <div className={classes.ratings}>
        <Readrate/>
        <h3>Leave a review</h3>
    </div>
  </div>
   </div>
  )

}

export default MainCard