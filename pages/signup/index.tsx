import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../../styles/sign.module.scss";
import axios from "axios";

const signUp = () => {
  const name = useRef<HTMLInputElement>();
  const email = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();
  const confirmPassword = useRef<HTMLInputElement>();

  const api = "http://localhost:4000/api/auth/signup";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      name.current &&
      email.current &&
      password.current &&
      confirmPassword.current
    ) {
      const names = name.current.value;
      const emails = email.current.value;
      const passwords = password.current.value;
      const passwordCon = confirmPassword.current.value;
      if (
        names.length < 0 ||
        emails.length < 0 ||
        passwords.length < 0 ||
        passwordCon.length < 0
      ) {
        alert("Please enter all input");
      } else {
        const dt = {
          name: names,
          email: emails,
          password: passwords,
          passwordConfirm: passwordCon,
        };
      }
    }
  };

  return (
    <>
      <div className={styles.bdy}>
        <h1>Sign Up</h1>
        <form>
          <div className={styles.txt}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required={true}
            />
          </div>
          <div className={styles.txt}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              required={true}
            />
          </div>
          <div className={styles.txt}>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              required={true}
            />
          </div>
          <div className={styles.txt}>
            <TextField
              id="outlined-basic"
              label="confirm password"
              variant="outlined"
              required={true}
            />
          </div>
          <div className={styles.txts}>
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default signUp;
