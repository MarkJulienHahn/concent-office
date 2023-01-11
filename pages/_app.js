import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";

import Nav from "../components/Nav";

const up = ["100vh", "-100vh"];
const down = ["-100vh", "100vh"];

function MyApp({ Component, pageProps }) {
  const [english, setEnglish] = useState(false);
  // const [directionsAbout, setDirectionsAbout] = useState(up);
  // const [directionsWorkshop, setDirectionsWorkshop] = useState(up);
  // const [directionsInfo, setDirectionsInfo] = useState(down);
  const [sliderTitle, setSliderTitle] = useState("")
  const location = useRouter();

  // useEffect(() => {
  //   location.pathname == "/about" &&
  //     (setDirectionsAbout(down),
  //     setDirectionsWorkshop(up),
  //     setDirectionsInfo(up));
  //   location.pathname == "/workshop" &&
  //     (setDirectionsAbout(up),
  //     setDirectionsWorkshop(down),
  //     setDirectionsInfo(up));
  //   location.pathname == "/info" &&
  //     (setDirectionsAbout(up),
  //     setDirectionsWorkshop(down),
  //     setDirectionsInfo(up));
  // }, [location]);

  // console.log(directionsAbout);
  return (
    <>
      <Nav
        english={english}
        setEnglish={setEnglish}
        sliderTitle={sliderTitle}
      />
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
            setSliderTitle={setSliderTitle}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
