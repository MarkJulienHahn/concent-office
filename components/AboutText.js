import { useSwiper } from "swiper/react";
import { PortableText } from "@portabletext/react";

const AboutText = ({ entry, english }) => {
  const swiper = useSwiper();
  return (
    <>
      <div className={"swiperNav"}>
        <div className={"swiperPrev"} onClick={() => swiper.slidePrev()}></div>
        <div className={"swiperNext"} onClick={() => swiper.slideNext()}></div>
      </div>
      <div className="swiperSingleAbout">
        <PortableText value={english ? entry.textEn : entry.text} />
      </div>
    </>
  );
};

export default AboutText;
