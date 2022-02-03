import React from "react";
import classes from "./mobile.module.scss";
import NavModal from "../../modals/NavModal";
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
        </div>
      </NavModal>
    </>
  );
};

export default MobileNav;
