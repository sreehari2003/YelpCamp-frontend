import React, { useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import classes from "../../styles/new.module.scss";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";

const Index = () => {
  const [err, seteErr] = useState(false);
  const title = useRef();
  const location = useRef();
  const imgUrl = useRef();
  const price = useRef();
  const dsc = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const tit = title.current.value;
    const loc = location.current.value;
    const img = imgUrl.current.value;
    const dscs = dsc.current.value;
    const pr = price.current.value;
    if (
      tit.length < 0 ||
      loc.length < 0 ||
      img.length < 0 ||
      dscs.length < 0 ||
      pr <= 0
    ) {
      seteErr(true);
    } else {
      const dt = {
        title: tit,
        description: dscs,
        location: loc,
        image: img,
        price: pr,
      };
      const sendData = async () => {
        try {
          const res = await axios.post("http://localhost:4000/api/camp", dt);
          if (!res.data.ok) {
            throw new Error("wrong");
          }
        } catch (e) {
          console.log(e);
        }
      };
      sendData();
    }
  };
  return (
    <>
      <Head>
        <title>New Camp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={classes.cont}>
        <h1>New Campgrounds</h1>
        <form onSubmit={onSubmit}>
          <div className={`${classes.input} flex col put`}>
            <div className="col">
              <label htmlFor="outlined-search">title</label>
              <TextField
                id="outlined-search"
                label=""
                type="search"
                variant="outlined"
                className={classes.text}
                required
                inputRef={title}
              />
            </div>
            <div className="col">
              <label htmlFor="outlined-search">Location</label>
              <TextField
                id="outlined-search"
                label=""
                type="search"
                variant="outlined"
                className={classes.text}
                required
                inputRef={location}
              />
            </div>
            <div className="col">
              <label htmlFor="outlined-search">Image url</label>
              <TextField
                id="outlined-search"
                label=""
                type="search"
                variant="outlined"
                required
                className={classes.text}
                inputRef={imgUrl}
              />
            </div>
            <div className="col">
              <label htmlFor="outlined-search">Price</label>
              <TextField
                id="outlined-search"
                label=""
                type="number"
                variant="outlined"
                className={classes.text}
                required
                inputRef={price}
              />
            </div>
            <div className="col">
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                className={classes.text}
                inputRef={dsc}
              />
            </div>
            <div className={` ${classes.tns} flex`}>
              <button className="btn">Submit</button>
              <button className="btn">
                <Link href="/campgrounds">campgrounds</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Index;
