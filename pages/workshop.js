import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import { PortableText } from "@portabletext/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import client from "../client";

import Image from "next/image";

const Workshop = ({ workshop, english }) => {
  const location = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        location={location}
        key={location.pathname}
        initial={{ y: "100vh", opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100vh", opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={{ width: "100vw", height: "100vh" }}>
          <div className="swiperSingle">
            <PortableText
              value={english ? workshop[0].textEn : workshop[0].text}
            />
            <a href="">{english ? "Book Workshop" : "Workshop buchen"}</a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Workshop;

export async function getServerSideProps() {
  const workshop = await client.fetch(`
  *   [_type == "workshop"]{...}`);

  return {
    props: {
      workshop,
    },
  };
}
