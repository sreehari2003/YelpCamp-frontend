import "../styles/globals.css";
import { useContext } from "react";
import Navbar from "../components/utils/Navbar";
import { ModalContextProvider, ModalContext } from "../context/ModalContext";
import MainBackDrop from "../modals/alerts/MainBackDrop";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import { ToastContainer } from "react-toastify";
import "nprogress/nprogress.css";
import Router from "next/router";
import React from "react";
import NProgress from "nprogress";
function MyApp({ Component, pageProps }: any) {
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  const ctx = useContext(ModalContext);
  return (
    <>
      <ModalContextProvider>
        <Navbar />
        <ToastContainer
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* {ctx.progress && <LinearProgress className="colo" />} */}
        <Component {...pageProps} />
      </ModalContextProvider>
    </>
  );
}

export default MyApp;
