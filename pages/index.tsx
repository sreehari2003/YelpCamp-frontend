import React from "react";
import Link from "next/link";
import Head from "next/head";
const index = () => {
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
          <span className="btn log">
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
