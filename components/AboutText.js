import { useSwiper } from "swiper/react";
import { PortableText } from "@portabletext/react";

import { use100vh } from "react-div-100vh";

const AboutText = ({ entry, english }) => {
  const swiper = useSwiper();
  const height = use100vh();


  return (
    <>
      <div className={"swiperNav"}>
        <div className={"swiperPrev"} onClick={() => swiper.slidePrev()}></div>
        <div className={"swiperNext"} onClick={() => swiper.slideNext()}></div>
      </div>
      <div className="swiperSingleAbout" style={{height: `calc(${height}px - 160px`}}>
        <PortableText value={english ? entry.textEn : entry.text} />
      </div>
    </>
  );
};

export default AboutText;
