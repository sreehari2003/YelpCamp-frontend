import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { response } from "../type/res";

const Readrate: React.FC<response> = (props) => {
  const [val, setVal] = useState<number>(0);
  useEffect(() => {
    if (props.reviews.length > 0) {
      const sum = props.reviews.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.rating;
      }, 0);
      setVal(Math.round(sum / props.reviews.length));
    }
  }, []);

  return (
    <>
      <Typography component="legend"></Typography>
      <Rating name="read-only" value={val} readOnly />
    </>
  );
};

export default Readrate;
