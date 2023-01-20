import { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperSlide } from "swiper/react";
import { PortableText } from "@portabletext/react";
import { useInView } from "react-intersection-observer";

import Div100vh from "react-div-100vh";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import AboutText from "./AboutText";

const Workshop = ({
  workshop,
  english,
  setSliderTitle,
  setSwiperIndex,
  swiperIndex,
}) => {
  const swiperSlide = useSwiperSlide();
  const swiperRef = useRef(null);
  const { ref, inView, entry } = useInView();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span id="workshopPagination" class="' + className + '">' + "</span>"
      );
    },
  };

  useEffect(() => {
    swiperSlide.isActive
      ? (setSliderTitle(<>©{new Date().getFullYear()}</>), setSwiperIndex(3))
      : "";
  }, [inView]);

  return (
    <>
      <div
        className="workshopDesktop"
        style={{ width: "100vw", height: "100%" }}
        ref={ref}
      >
        <div className="swiperSingle">
          <PortableText
            value={english ? workshop[0].textEn : workshop[0].text}
          />
          <a href="">{english ? "Book Workshop" : "Workshop buchen"}</a>
        </div>
      </div>

      <Div100vh>
        <div
          className="workshopMobile"
          style={{ width: "100vw", height: "100%" }}
          ref={ref}
        >
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            pagination={pagination}
            modules={[Pagination]}
            speed={1000}
          >
            {english
              ? workshop[0].textMobileEn.map((entry, i) => (
                  <SwiperSlide key={i}>
                    <div className={"workshopTextWrapper"}>
                      <p>{entry}</p>
                    </div>
                  </SwiperSlide>
                ))
              : workshop[0].textMobile.map((entry, i) => (
                  <SwiperSlide key={i}>
                    <div className={"workshopTextWrapper"}>
                      <p>{entry}</p>
                    </div>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </Div100vh>
    </>
  );
};

export default Workshop;
