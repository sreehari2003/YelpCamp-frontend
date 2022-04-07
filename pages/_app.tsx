import "../styles/globals.css";
import { useContext } from "react";
import Navbar from "../components/utils/Navbar";
import { ModalContextProvider, ModalContext } from "../context/ModalContext";
import MainBackDrop from "../modals/alerts/MainBackDrop";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: any) {
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
