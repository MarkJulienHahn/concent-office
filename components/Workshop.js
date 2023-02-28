import { useEffect, useRef } from "react";

import { useSwiperSlide } from "swiper/react";
import { PortableText } from "@portabletext/react";
import { useInView } from "react-intersection-observer";

import { use100vh } from "react-div-100vh";

import "swiper/css";
import "swiper/css/pagination";

import WorkshopMobile from "./WorkshopMobile";

const Workshop = ({
  workshop,
  english,
  setSliderTitle,
  setSwiperIndex,
  swiperIndex,
}) => {
  const swiperSlide = useSwiperSlide();
  const swiperRef = useRef(null);

  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  const height = use100vh();

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
      ? setSliderTitle(<>©{new Date().getFullYear()}</>)
      : "";
  }, [inView]);

  useEffect(() => {
    swiperSlide.isActive ? setSwiperIndex(3) : "";
  });

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
          <a href=""><p>{english ? "Book Workshop" : "Workshop buchen"}</p></a>
        </div>
      </div>

      <WorkshopMobile
        english={english}
        swiperIndex={swiperIndex}
        setSwiperIndex={setSwiperIndex}
        setSliderTitle={setSliderTitle}
        workshop={workshop}
      />
    </>
  );
};

export default Workshop;
