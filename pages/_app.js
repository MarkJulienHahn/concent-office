import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";

import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  const location = useRouter();
  return (
    <>
      {" "}
      <Nav />
      {/* <AnimatePresence exitBeforeEnter>
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 500, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -500, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        > */}
          <Component {...pageProps} />{" "}
        {/* </motion.div>
      </AnimatePresence> */}
    </>
  );
}

export default MyApp;
