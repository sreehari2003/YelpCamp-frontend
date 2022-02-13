import React from 'react'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
interface val {
  val:number;
}
const Readrate = ({val}:val) => {
  return (
          <>
          <Typography component="legend"></Typography>
          <Rating name="read-only" value={val} readOnly />
          </>
  )
}

export default Readrate