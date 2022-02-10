import React from "react";
import TextField from "@material-ui/core/TextField";
import classes from "../../styles/login.module.scss";
const index = () => {
  return (
      <div className={`${classes.login} flex`}>
          <h2>Login</h2>
      <div className={`${classes.dis} flex`}>
        <form className={classes.form}>
          <div className={classes.fr}>
          <label htmlFor="outlined-search">E-MAIL</label>
          <TextField
            id="outlined-search"
            label=""
            type="search"
            variant="outlined"
            className={classes.text}
            required
          />
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
