import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useInView } from "react-intersection-observer";

import Div100vh from "react-div-100vh";
import { use100vh } from "react-div-100vh";

import { Pagination, Mousewheel } from "swiper";

import AboutImage from "./AboutImage";
import AboutText from "./AboutText";
import AboutSlider from "./AboutSlider";
import MouseDiv from "./MouseDiv";

const About = ({
  about,
  english,
  swiperIndex,
  setSliderTitle,
  setSwiperIndex,
  lable, setLable
}) => {
  const swiperSlide = useSwiperSlide();
  const swiperRef = useRef(null);



  const height = use100vh();

  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const firstSlide = () => swiperRef.current.swiper.slideTo(0);
  const nextSlide = () => swiperRef.current.swiper.slideTo(3);
  const prevSlide = () => swiperRef.current.swiper.slideTo(1);

  useEffect(() => {
    swiperSlide.isActive
      ? setSliderTitle(<>©{new Date().getFullYear()}</>)
      : "";
  }, [inView]);

  useEffect(() => {
    swiperSlide.isActive ? setSwiperIndex(2) : "";
  });

  return (
    <>
      <MouseDiv lable={lable} />
      <Div100vh>
        <div ref={ref} style={{background: "white", cursor: "none"}}>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            pagination={pagination}
            modules={[Pagination]}
            speed={1000}
            style={{ height: `${height}px` }}
          >
            {about.map((entry, i) => (
              <>
                {entry.image ? (
                  <Div100vh>
                    <SwiperSlide key={i}>
                      <AboutImage entry={entry} setLable={setLable} />
                    </SwiperSlide>
                  </Div100vh>
                ) : (
                  ""
                )}
                {entry.text ? (
                  <Div100vh>
                    <SwiperSlide key={i}>
                      <AboutText
                        entry={entry}
                        english={english}
                        swiperIndex={swiperIndex}
                        fristSlide={firstSlide}
                        setLable={setLable}
                      />
                    </SwiperSlide>
                  </Div100vh>
                ) : (
                  ""
                )}
                {entry.customSlider ? (
                  <Div100vh>
                    <SwiperSlide key={i}>
                      <AboutSlider
                        entry={entry.customSlider}
                        nextSlide={nextSlide}
                        prevSlide={prevSlide}
                        english={english}
                        setLable={setLable}
                      />
                    </SwiperSlide>
                  </Div100vh>
                ) : (
                  ""
                )}
              </>
            ))}
          </Swiper>
        </div>
      </Div100vh>
    </>
  );
};

export default About;
