import React from "react";
import Link from "next/link";
import Head from "next/head";
import { ModalContext } from "../context/ModalContext";
import { useContext } from "react";
const index = () => {
  const ctx = useContext(ModalContext);
  return (
    <div>
      <Head>
        <title>YelpCamp</title>
      </Head>
      <div id="landing-header">
        <h1 className="display-4">Welcome to YelpCamp!</h1>
        <div className="link">
          <Link href="/campgrounds">
            <span className="btn camp">View Campgrounds</span>
          </Link>
          <span className="btn log" onClick={() => ctx.loader()}>
            <Link href="/login">Log In</Link>
          </span>
        </div>
      </div>
      <ul className="slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default index;
