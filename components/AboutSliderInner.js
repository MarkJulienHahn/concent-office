import { useState, useEffect, useRef } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import Image from "next/image";

const AboutSliderInner = ({
  i,
  length,
  image,
  prevSlide,
  nextSlide,
  currentIndex,
  setCurrentIndex,
  setLable,
}) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    swiperSlide.isActive ? setCurrentIndex(i) : "";
});

  return (
    <>
      <div className={"swiperNav"}>
        <div
          className={"swiperPrev"}
          onClick={currentIndex == 0 ? prevSlide : () => swiper.slidePrev()}
          onMouseEnter={() => setLable("Previous")}
        ></div>
        <div
          className={"swiperNext"}
          onClick={
            currentIndex == length - 1 ? nextSlide : () => swiper.slideNext()
          }
          onMouseEnter={() => setLable("Next")}
        ></div>
      </div>
      <div>
        {image.dimensions.aspectRatio >= 1 ? (
          <Image
            src={image.url}
            layout="responsive"
            objectFit="contain"
            height="100"
            width="100"
            loading="eager"
          />
        ) : (
          <div className={"portraitImage"}>
            {" "}
            <Image
              src={image.url}
              layout="responsive"
              objectFit="contain"
              height="100"
              width="100"
              loading="eager"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AboutSliderInner;
