import { useSwiper } from "swiper/react";
import { PortableText } from "@portabletext/react";
import Div100vh from "react-div-100vh";

const AboutText = ({ entry, english, firstSlide }) => {
  const swiper1 = useSwiper();

  return (
    <>
      <div className={"swiperNav"}>
        <div className={"swiperPrev"} onClick={() => swiper1.slidePrev()}></div>
        <div className={"swiperNext"} onClick={() => swiper1.slideNext()}></div>
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
