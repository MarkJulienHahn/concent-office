import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import { PortableText } from "@portabletext/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import client from "../client";

import Image from "next/image";

const About = ({ about }) => {
  const location = useRouter();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Swiper slidesPerView={1}>
        {about.map((entry, i) =>
          entry.image ? (
            <SwiperSlide key={i}>
              <div className="swiperImageAbout">
                <div className="swiperImageInner">
                  <Image
                    src={entry.image.url}
                    layout="responsive"
                    objectFit="contain"
                    height="100"
                    width="100"
                    loading="eager"
                  />
                </div>
              </div>
            </SwiperSlide>
          ) : (
            <SwiperSlide  key={i}>
              <div className="swiperSingle">
                <PortableText value={entry.text} />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default About;

export async function getStaticProps() {
  const about = await client.fetch(`
  *   [_type == "about"]|order(orderRank){"image": image.asset->{url, "dimensions": metadata.dimensions}, description, text}`);

  return {
    props: {
      about,
    },
    revalidate: 10,
  };
}
