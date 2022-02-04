import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <div id="landing-header">
        <h1 className="display-4">Welcome to YelpCamp!</h1>
        <div className="link">
          <Link href="/campgrounds">
            <span className="btn camp">View Campgrounds</span>
          </Link>
          <Link href="/login" className="btn log">
            <span className="btn log">Log In</span>
          </Link>
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
