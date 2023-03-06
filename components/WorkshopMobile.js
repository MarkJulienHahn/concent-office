import { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";

import Div100vh from "react-div-100vh";
import { use100vh } from "react-div-100vh";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const WorkshopMobile = ({
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
    <Div100vh>
      <div
        className="workshopMobile"
        style={{ width: "100vw", height: "100%" }}
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          pagination={pagination}
          modules={[Pagination]}
          speed={1000}
          style={{ height: `${height}px` }}
        >
          {english
            ? workshop[0].textMobileEn.map((entry, i, workshop) =>
                i + 1 === 2 ? (
                  <SwiperSlide key={i}>
                    <div className={"workshopTextWrapper"}>
                      <p>
                        {entry}{" "}
                        <a href="mailto:contact@conceptoffice.com">
                          <p style={{ textDecoration: "underline" }}>
                            Book Workshop
                          </p>
                        </a>
                      </p>
                    </div>
                  </SwiperSlide>
                ) : (
                  <SwiperSlide key={i}>
                    <div className={"workshopTextWrapper"}>
                      <p>{entry}</p>
                    </div>
                  </SwiperSlide>
                )
              )
            : workshop[0].textMobile.map((entry, i, workshop) =>
                i + 1 === 2 ? (
                  <SwiperSlide key={i}>
                    <div className={"workshopTextWrapper"}>
                      <p>
                        {entry}{" "}
                        <a href="mailto:contact@conceptoffice.com">
                          <p style={{ textDecoration: "underline" }}>
                            Workshop buchen
                          </p>
                        </a>
                      </p>
                    </div>
                  </SwiperSlide>
                ) : (
                  <SwiperSlide key={i}>
                    <div className={"workshopTextWrapper"}>
                      <p>{entry}</p>
                    </div>
                  </SwiperSlide>
                )
              )}
        </Swiper>
      </div>
    </Div100vh>
  );
};

export default WorkshopMobile;
