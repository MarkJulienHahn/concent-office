import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import { PortableText } from "@portabletext/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import client from "../client";

import Image from "next/image";

const Workshop = ({ workshop }) => {
  const location = useRouter();

  console.log(workshop);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="swiperSingle">
        <PortableText value={workshop[0].text} />
        <a href="">Workshop buchen</a>
      </div>
    </div>
  );
};

export default Workshop;

export async function getStaticProps() {
  const workshop = await client.fetch(`
  *   [_type == "workshop"]{...}`);

  return {
    props: {
      workshop,
    },
    revalidate: 10,
  };
}
