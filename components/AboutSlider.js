import { useState, useRef } from "react";
import { useSwiper } from "swiper/react";
import AboutSliderInner from "./AboutSliderInner";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { EffectCreative } from "swiper";

const AboutSlider = ({ entry, nextSlide, prevSlide }) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="swiper">
        <Swiper
          ref={swiperRef}
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
          speed={500}
        >
          {entry.map((image, i) => (
            <>
              <SwiperSlide key={i}>
                {/* {i == 0 && <button onClick={nextSlide}>BUTTON</button>} */}
                <div className="swiperImageSlideIn">
                  <AboutSliderInner
                    i={i}
                    setCurrentIndex={setCurrentIndex}
                    currentIndex={currentIndex}
                    length={entry.length}
                    image={image}
                    nextSlide={nextSlide}
                    prevSlide={prevSlide}
                  />
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AboutSlider;
