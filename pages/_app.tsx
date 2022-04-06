import "../styles/globals.css";
import { useContext } from "react";
import Navbar from "../components/utils/Navbar";
import { ModalContextProvider, ModalContext } from "../context/ModalContext";
import MainBackDrop from "../modals/alerts/MainBackDrop";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";

function MyApp({ Component, pageProps }: any) {
  const ctx = useContext(ModalContext);
  return (
    <>
      <ModalContextProvider>
        <Navbar />
        {/* {ctx.progress && <LinearProgress className="colo" />} */}
        <Component {...pageProps} />
      </ModalContextProvider>
    </>
  );
}

export default MyApp;
