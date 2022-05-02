import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import classes from "../../styles/login.module.scss";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { notifyMessage } from "../../helper/toast";
import Cookie from "js-cookie";

const index = () => {
  const API = "http://localhost:4000/api/auth/login";

  const email = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password && email.current && password.current) {
      const emailId = email.current.value;
      const pass = password.current.value;
      const body = {
        email: emailId,
        password: pass,
      };
      (async () => {
        try {
          const { data, status } = await axios.post(API, body);
          if (status > 201 || !data) throw new Error();
          Cookie.set("jwt", data.token);
          router.push("/campgrounds");
        } catch (e) {
          notifyMessage("invalid email or password");
        }
      })();
    }
  };

  return (
    <div className={`${classes.login}`}>
      <h2>Login</h2>
      <div className="flex">
        <div className={`${classes.dis} flex`}>
          <form className={classes.form} onSubmit={onSubmit}>
            <div className={classes.fr}>
              <label htmlFor="outlined-search">E-Mail</label>
              <TextField
                id="outlined-search"
                label=""
                type="email"
                variant="outlined"
                className={classes.text}
                required
                inputRef={email}
              />
              <label htmlFor="outlined-search">password</label>
              <TextField
                id="outlined-searchs"
                label=""
                type="password"
                variant="outlined"
                className={classes.text}
                required
                inputRef={password}
              />
              <Button type="submit" variant="contained">
                Login
              </Button>
              <span
                className={classes.forgot}
                onClick={() => router.push("/login/reset")}
              >
                Forgot password ?{" "}
              </span>
            </div>
            <div className={classes.google}>
              <span className={classes.or}>or</span>
              <div className={classes.txts}>
                <Button variant="contained" className={classes.oAuth}>
                  Google
                  <FcGoogle />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
