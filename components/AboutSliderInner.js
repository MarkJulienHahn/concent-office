import { useSwiper } from "swiper/react";
import Image from "next/image";

const AboutSliderInner = ({ image }) => {
  const swiper = useSwiper();
  return (
    <>
      <div className={"swiperNav"}>
        <div className={"swiperPrev"} onClick={() => swiper.slidePrev()}></div>
        <div className={"swiperNext"} onClick={() => swiper.slideNext()}></div>
      </div>
      {image.dimensions.aspectRation <= 1 ? (
        <Image src={image.url} loading="eager" />
      ) : (
        <Image
          src={image.url}
          layout="fill"
          objectFit="contain"
          loading="eager"
          className="portraitImage"
        />
      )}
    </>
  );
};

export default AboutSliderInner;
