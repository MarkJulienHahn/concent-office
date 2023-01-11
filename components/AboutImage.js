import { useSwiper } from "swiper/react";
import Image from "next/Image";

const AboutImage = ({ entry }) => {
  const swiper = useSwiper();
  return (
    <>
      <div className={"swiperNav"}>
        <div className={"swiperPrev"} onClick={() => swiper.slidePrev()}></div>
        <div className={"swiperNext"} onClick={() => swiper.slideNext()}></div>
      </div>
      <div className="swiperImageAbout">
        <div className="swiperImageInner">
          <Image
            src={entry.image.url}
            layout="responsive"
            objectFit="contain"
            height="100"
            width="100"
            loading="eager"
          />
        </div>
      </div>
    </>
  );
};

export default AboutImage;
