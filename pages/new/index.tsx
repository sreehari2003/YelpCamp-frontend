import React, { useRef, useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import classes from "../../styles/new.module.scss";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import Alert from "../../modals/alerts/Alert";
import { notifyMessage } from "../../helper/toast";
import { useRouter } from "next/router";
import AuthContext from "../../context/authContext";
interface ress {
  title: string;
  description: string;
  location: string;
  image: string;
  price: number;
  reviews: string[];
  __id: string;
}
interface result {
  ok: boolean;
  res: ress;
}

const Index = () => {
  const { auth, removeAuth } = useContext(AuthContext);
  const [err, seteErr] = useState<boolean>(false);
  const title = useRef<HTMLInputElement>();
  const location = useRef<HTMLInputElement>();
  const imgUrl = useRef<HTMLInputElement>();
  const price = useRef<HTMLInputElement>();
  const dsc = useRef<HTMLInputElement>();

  useEffect(() => {
    if (!auth) {
      removeAuth();
    }
  }, [auth]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      title.current &&
      location.current &&
      imgUrl.current &&
      price.current &&
      dsc.current
    ) {
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
        pr.length <= 0
      ) {
        alert("Please enter all input");
      } else {
        const dt = {
          title: tit,
          description: dscs,
          location: loc,
          image: img,
          price: pr,
        };
        console.log(dt);
        const sendData = async () => {
          try {
            const res: result = await axios.post(
              "http://localhost:4000/api/camp/v1",
              dt
            );
            if (!res.ok) {
              seteErr(true);
              throw new Error("could not add the camp something went wrong");
            }
            notifyMessage("New camp was added succesfully");
            // seteErr(true);
          } catch (e) {
            notifyMessage(e);
          }
        };
        sendData();
      }
    }
  };
  return (
    <>
      {err && <Alert code={404} />}
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
