import "../styles/globals.css";
import { useState } from "react";
import Navbar from "../components/utils/Navbar";
function MyApp({ Component, pageProps }:any) {
  
 
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
