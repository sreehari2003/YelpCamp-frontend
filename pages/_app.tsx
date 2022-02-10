import "../styles/globals.css";
import { useEffect, useState } from "react";
import Navbar from "../components/utils/Navbar";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }:any) {
  const [bar, showBar] = useState(true);
  // const router = useRouter();
  // useEffect(() => {
  //   if (router.pathname === "/") {
  //     showBar(false);
  //   } else {
  //     showBar(true);
  //   }
  // }, []);
  return (
    <>
      {bar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
