import React from 'react'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Readrate = () => {
  return (
          <>
          <Typography component="legend"></Typography>
          <Rating name="read-only" value={2} readOnly />
          </>
  )
}

export default Readrate