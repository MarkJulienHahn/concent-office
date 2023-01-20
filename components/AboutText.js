import { useSwiper } from "swiper/react";
import { PortableText } from "@portabletext/react";
import Div100vh from "react-div-100vh";

const AboutText = ({ entry, english }) => {
  const swiper = useSwiper();

  return (
    <>
      <div className={"swiperNav"}>
        <div className={"swiperPrev"} onClick={() => swiper.slidePrev()}></div>
        <div className={"swiperNext"} onClick={() => swiper.slideNext()}></div>
      </div>
      <Div100vh>
        <div className="swiperSingleAbout">
          <PortableText value={english ? entry.textEn : entry.text} />
        </div>
      </Div100vh>
    </>
  );
};

export default AboutText;
