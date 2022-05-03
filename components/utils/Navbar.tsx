import React, { useState, useEffect, useContext } from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import MobileNav from "./MobileNav";
import AuthContext from "../../context/authContext";
const Navbar: React.FC = () => {
  const { auth, removeAuth } = useContext(AuthContext);
  const [show, setShow] = useState<boolean>(false);
  const toggle = () => {
    setShow((el) => !el);
  };

  return (
    <>
      {show && <MobileNav click={toggle} />}
      <div className={`${classes.navbar}`}>
        <div className={classes.main}>
          <h1 className={classes.mobh}>YelpCamp</h1>
          <Link href="/">
            <h1 className={classes.mainChild}>YelpCamp</h1>
          </Link>
          <Link href="/campgrounds">
            <h3 className={classes.mainChild}>Campgrounds</h3>
          </Link>
          <Link href="/profile">
            <h3 className={classes.mainChild}>Profile</h3>
          </Link>
          <Link href="/new">
            <h3 className={classes.mainChild}>New</h3>
          </Link>
        </div>
        <div className={`flex ${classes.sub}`}>
          {!auth && (
            <>
              <Link href="/login">
                <h3 className={classes.mainChild}>Login</h3>
              </Link>
              <Link href="/signup">
                <h3 className={classes.mainChild}>Sign Up</h3>
              </Link>
            </>
          )}
          {auth && (
            <>
              <Link href="/login">
                <h3 className={classes.mainChild} onClick={removeAuth}>
                  Logout
                </h3>
              </Link>
            </>
          )}
          <HiMenuAlt2 className={classes.bur} onClick={toggle} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
