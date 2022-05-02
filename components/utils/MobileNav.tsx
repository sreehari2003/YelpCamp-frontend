import React, { useState, useEffect } from "react";
import classes from "./mobile.module.scss";
import NavModal from "../../modals/NavModal";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

interface types {
  click: () => void;
}

const MobileNav: React.FC<types> = ({ click }) => {
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

  const logOut = () => {
    Cookie.remove("jwt");
    router.replace("/");
    setAuth(false);
  };

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
            <Link href="/campgrounds">
              <div className={classes.route}>Campgrounds</div>
            </Link>
            <Link href="/profile">
              <div className={classes.route}>Profile</div>
            </Link>
            <Link href="/new">
              <div className={classes.route}>New</div>
            </Link>
            {!auth && (
              <>
                <Link href="/login">
                  <div className={classes.route}>Login</div>
                </Link>
                <Link href="/signup">
                  <div className={classes.route}>SignUp</div>
                </Link>
              </>
            )}
            {auth && (
              <>
                <Link href="/login">
                  <div className={classes.route} onClick={logOut}>
                    Logout
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </NavModal>
    </>
  );
};

export default MobileNav;
