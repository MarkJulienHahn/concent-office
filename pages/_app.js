import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";

import Nav from "../components/Nav";

const up = ["100vh", "-100vh"];
const down = ["-100vh", "100vh"];

function MyApp({ Component, pageProps }) {
  const [english, setEnglish] = useState(false);
  const [functionAbout, setFunctionAbout] = useState()
  const location = useRouter();


  return (
    <>
      {/* <Nav
        english={english}
        setEnglish={setEnglish}
        sliderTitle={sliderTitle}
        functionAbout={functionAbout}
      /> */}
      <AnimatePresence mode="popLayout">
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Component
            {...pageProps}
            // directionsAbout={directionsAbout}
            // directionsWorkshop={directionsWorkshop}
            // directionsInfo={directionsInfo}
            english={english}
            setEnglish={setEnglish}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
