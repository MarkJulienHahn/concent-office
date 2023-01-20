import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useInView } from "react-intersection-observer";

import { Pagination } from "swiper";

import AboutImage from "./AboutImage";
import AboutText from "./AboutText";
import AboutSlider from "./AboutSlider";

const About = ({ about, english, setSliderTitle, setSwiperIndex }) => {
  const swiperSlide = useSwiperSlide();
  const swiperRef = useRef(null);

  const { ref, inView, entry } = useInView();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const nextSlide = () => swiperRef.current.swiper.slideTo(5);
  const prevSlide = () => swiperRef.current.swiper.slideTo(3);

  useEffect(() => {
    swiperSlide.isActive
      ? (setSliderTitle(<>©{new Date().getFullYear()}</>))
      : "";
  }, [inView]);

  useEffect(() => {
    swiperSlide.isActive
      ? (setSwiperIndex(2))
      : "";
  });

  return (
    <div ref={ref}>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        pagination={pagination}
        modules={[Pagination]}
        speed={1000}
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
                <AboutSlider
                  entry={entry.customSlider}
                  nextSlide={nextSlide}
                  prevSlide={prevSlide}
                  english={english}
                />
              </SwiperSlide>
            ) : (
              ""
            )}
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default About;
