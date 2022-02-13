import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {useState} from "react";

import React from 'react'

const Ratings = () => {
    const [value, setValue] = React.useState<number | null>(2);
  return (
   <>
    <Box sx={{'& > legend': { mt: 2 },}} />
    <Typography component="legend">Controlled</Typography>
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
   </>
  )
}

export default Ratings;


export const RateRead = ()=>{
  return (
    <>
    <Typography component="legend"></Typography>
    <Rating name="read-only" value={2} readOnly />
    </>
  )
}