import React from "react";
import classes from "./mobile.module.scss";
import NavModal from "../../modals/NavModal";
import Link from "next/link";
import { GrClose } from "react-icons/gr";

const MobileNav = ({ click }) => {
  return (
    <>
      <NavModal>
        <div className={classes.mob}>
          <div className={classes.main}>
            <div className={`flex ${classes.head}`}>
              <h1>YelpCamp</h1>
            </div>
            <div className={`flex ${classes.icon}`} onClick={click}>
              <GrClose className={classes.close} />
            </div>
          </div>
          <div className={classes.li}>
            <div className={classes.route}>
              <Link href="/campgrounds">Campgrounds</Link>
            </div>
            <div className={classes.route}>
              <Link href="/about">About</Link>
            </div>
            <div className={classes.route}>
              <Link href="/new">New</Link>
            </div>
            <div className={classes.route}>
              <Link href="/login">Login</Link>
            </div>
            <div className={classes.route}>
              <Link href="/signup">SignUp</Link>
            </div>
          </div>
        </div>
      </NavModal>
    </>
  );
};

export default MobileNav;
