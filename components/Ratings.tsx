import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import classes from "./rate.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import React from 'react'
interface change{
  change:()=>void;
  val:(el:number)=>void;
}
const Ratings = ({change,val}:change) => {
    const [value, setValue] =useState<number>(2);
    // console.log(value)
  // const data:string[]= ['Poor','Ok','Good','Best','Excellent'];
  return (
   <>
    <div className={classes.box}>
      <div className={classes.close}>
      <AiOutlineClose onClick={change}/>
      </div>
   <div className={`flex ${classes.star}`}>
   <Box sx={{'& > legend': { mt: 2 },}} />
    <Typography component="legend"></Typography>
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        if(newValue != null) setValue(newValue);
        val(value);
      }}
    />
   </div>
    </div>
   </>
  )
}

export default Ratings;


