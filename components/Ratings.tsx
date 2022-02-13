import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState,useRef } from "react";
import classes from "./rate.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import Button from "@mui/material/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";
import axios from "axios";
import {useRouter } from "next/router";

interface change {
  change: () => void;
  val: (el: number) => void;
}
const Ratings = ({ change, val }: change) => {
  const router = useRouter();
  const ids = router.query.id;
  const [value, setValue] = useState<number>(2);
  const ref = useRef<HTMLInputElement>();
  // console.log(value)
  // const data:string[]= ['Poor','Ok','Good','Best','Excellent'];
  const subMit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
       if(ref.current){
         const des:string = ref.current.value;
         if(des.length < 1){
           alert("Please provide a review")
         }else{
          const data = {
            rating:value,
            body:des
          }
          const sendRev = async ()=>{
            try{
            const res =  await axios.post(`http://localhost:4000/api/camp/${ids}/reviews`,data);
            console.log(res)
            }catch(e){
              console.log(e);
              alert("couldnt send the request");
            }
          }
          sendRev();
         }
       }
  }
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
              val(value);
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
        </div>
      </form>
      </div>
    </>
  );
};

export default Ratings;
