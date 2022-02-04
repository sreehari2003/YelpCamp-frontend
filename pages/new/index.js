import React from "react";
import TextField from "@material-ui/core/TextField";
import classes from "../../styles/new.module.scss";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const Index = () => {
  return (
    <div className={classes.cont}>
      <h1>New Campgrounds</h1>
      <form>
        <div className={`${classes.input} flex col put`}>
          <div className="col">
            <label htmlFor="outlined-search">title</label>
            <TextField
              id="outlined-search"
              label=""
              type="search"
              variant="outlined"
              className={classes.text}
              required="true"
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
              required="true"
            />
          </div>
          <div className="col">
            <label htmlFor="outlined-search">Image url</label>
            <TextField
              id="outlined-search"
              label=""
              type="search"
              variant="outlined"
              required="true"
              className={classes.text}
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
              required="true"
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
            />
          </div>
          <div className={` ${classes.tns} flex`}>
            <button className="btn">Submit</button>
            <button className="btn">campgrounds</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Index;
