import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import client from "../client";

import AboutImage from "../components/AboutImage";
import AboutText from "../components/AboutText";
import AboutSlider from "../components/AboutSlider";

const About = ({ about, directionsAbout, english }) => {
  const location = useRouter();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

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
          <Swiper
            slidesPerView={1}
            pagination={pagination}
            modules={[Pagination]}
          >
            {about.map((entry, i) => (
              <>
                {entry.image ? (
                  <SwiperSlide key={i}>
                    <AboutImage entry={entry} />
                  </SwiperSlide>
                ) : (
                  ""
                )}
                {entry.text ? (
                  <SwiperSlide key={i}>
                    <AboutText entry={entry} english={english} />
                  </SwiperSlide>
                ) : (
                  ""
                )}
                {entry.customSlider ? (
                  <SwiperSlide key={i}>
                    <AboutSlider entry={entry.customSlider} english={english} />
                  </SwiperSlide>
                ) : (
                  ""
                )}
              </>
            ))}
          </Swiper>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;

export async function getServerSideProps() {
  const about = await client.fetch(`
  *[_type == "about"]|order(orderRank){"image": image.asset->{url, "dimensions": metadata.dimensions}, description, text, textEn, "customSlider": customSlider[].asset->{url, "dimensions": metadata.dimensions}}`);

  return {
    props: {
      about,
    },
  };
}
