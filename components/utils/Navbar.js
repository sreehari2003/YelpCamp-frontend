import React from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.main}>
        <Link href="/">
          <h1 className={classes.mainChild}>YelpCamp</h1>
        </Link>
        <Link href="/campgrounds">
          <h3 className={classes.mainChild}>campgrounds</h3>
        </Link>
        <Link href="/about">
          <h3 className={classes.mainChild}>About</h3>
        </Link>
        <Link href="/new">
          <h3 className={classes.mainChild}>New</h3>
        </Link>
      </div>
      <div className={`flex ${classes.sub}`}>
        <Link href="/login">
          <h3 className={classes.mainChild}>Login</h3>
        </Link>
        <Link href="/signup">
          <h3 className={classes.mainChild}>Sign Up</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
