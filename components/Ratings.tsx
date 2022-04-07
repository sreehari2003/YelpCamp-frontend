import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React, { useState, useRef } from "react";
import classes from "./rate.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useRouter } from "next/router";
import { notifyMessage } from "../helper/toast";

interface change {
  change: () => void;
  show: () => void;
}
const Ratings = ({ change, show }: change) => {
  const router = useRouter();
  const ids = router.query.id;
  const [value, setValue] = useState<number>(2);
  const [err, setErr] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>();
  // const data:string[]= ['Poor','Ok','Good','Best','Excellent'];
  const subMit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref.current) {
      const des: string = ref.current.value;
      if (des.length < 1) {
        setErr(true);
      } else {
        setErr(false);
        const data = {
          rating: value,
          body: des,
        };
        const sendRev = async () => {
          try {
            const res = await axios.post(
              `http://localhost:4000/api/camp/v1/${ids}/reviews`,
              data
            );
            notifyMessage("review was added successfully");
          } catch (e) {
            console.log(e);
            alert("couldnt send the request");
          }
        };
        sendRev();
        show();
      }
    }
  };
  return (
    <>
      <div className={classes.box}>
        <div className={classes.close}>
          <AiOutlineClose onClick={change} />
        </div>
        <form onSubmit={subMit}>
          <div className={`flex ${classes.star}`}>
            <Box sx={{ "& > legend": { mt: 2 } }} />
            <Typography component="legend"></Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                if (newValue != null) setValue(newValue);
              }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={3}
              variant="outlined"
              className={classes.text}
              inputRef={ref}
            />
            <Button variant="contained" size="large" type="submit">
              Submit
            </Button>
            {err && (
              <span className={classes.st}>*Please Provide a review</span>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Ratings;
