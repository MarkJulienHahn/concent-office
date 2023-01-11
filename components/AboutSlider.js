import { useSwiper } from "swiper/react";
import AboutSliderInner from "./AboutSliderInner";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { EffectCreative } from "swiper";

const AboutSlider = ({ entry }) => {
  const swiper = useSwiper();

  return (
    <>
      {/* <div className={"swiperNav"}>
        <div className={"swiperPrev"} onClick={() => swiper.slidePrev()}></div>
        <div className={"swiperNext"} onClick={() => swiper.slideNext()}></div>
      </div> */}
      <div           className="swiper">
        <Swiper
          effect={"creative"}
          modules={[EffectCreative]}
          creativeEffect={{
            prev: {
              translate: [0, 0, 0],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}

        >
          {entry.map((image, i) => (
            <SwiperSlide key={i}>
                <div className="swiperImageSlideIn">
                  <AboutSliderInner image={image} />
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AboutSlider;
