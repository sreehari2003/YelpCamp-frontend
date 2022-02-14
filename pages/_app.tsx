import "../styles/globals.css";
import { useState,useContext } from "react";
import Navbar from "../components/utils/Navbar";
import { ModalContextProvider }  from "../context/ModalContext";
import MainBackDrop from "../modals/alerts/MainBackDrop";
import ModalContext from "../context/ModalContext";
import {md} from "../context/ModalContext"
import CircularProgress from '@mui/material/CircularProgress';

function MyApp({ Component, pageProps }:any) {
   const ctx = useContext<md>(ModalContext);  
  return (
    <>
    {ctx.load && <MainBackDrop>
       <CircularProgress />
         </MainBackDrop>}
      <ModalContextProvider>
      <Navbar/>
      <Component {...pageProps} />
      </ModalContextProvider>
    </>
  );
}

export default MyApp;
