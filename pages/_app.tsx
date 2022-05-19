import "../styles/globals.css";
import Navbar from "../components/utils/Navbar";
import { ToastContainer } from "react-toastify";
import "nprogress/nprogress.css";
import Router from "next/router";
import React from "react";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import { store } from "../store/config";
import { AuthContextProvider } from "../context/authContext";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
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
  return (
    <>
      <Provider store={store}>
        <AuthContextProvider>
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
          <Component {...pageProps} />
        </AuthContextProvider>
      </Provider>
    </>
  );
}

export default MyApp;
