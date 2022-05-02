import React, { useState, useEffect } from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import MobileNav from "./MobileNav";
const Navbar: React.FC = () => {
  const router = useRouter();
  const outPutAUth = Cookie.get("jwt");
  const [show, setShow] = useState<boolean>(false);
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const outPutAUth = Cookie.get("jwt");
    if (outPutAUth) {
      setAuth(true);
    }
  }, [outPutAUth]);
  const toggle = () => {
    setShow((el) => !el);
  };

  const logOut = () => {
    Cookie.remove("jwt");
    router.replace("/");
    setAuth(false);
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
                <h3 className={classes.mainChild} onClick={logOut}>
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
