import { useSwiper } from "swiper/react";
import Image from "next/image";

const AboutImage = ({ entry, setLable }) => {
  const swiper = useSwiper();
  return (
    <>
      <div className={"swiperNav"}>
        <div
          className={"swiperPrev"}
          onClick={() => swiper.slidePrev()}
          onMouseEnter={() => setLable("Previous")}
        ></div>
        <div
          className={"swiperNext"}
          onClick={() => swiper.slideNext()}
          onMouseEnter={() => setLable("Next")}
        ></div>
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
