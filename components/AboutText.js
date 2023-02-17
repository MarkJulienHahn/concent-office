import { useSwiper } from "swiper/react";
import { PortableText } from "@portabletext/react";
import Div100vh from "react-div-100vh";

const AboutText = ({ entry, english, setLable, firstSlide }) => {
  const swiper1 = useSwiper();

  return (
    <>
      <div className={"swiperNav"}>
        <div
          className={"swiperPrev"}
          onClick={() => swiper1.slidePrev()}
          onMouseEnter={() => setLable("Previous")}
        ></div>
        <div
          className={"swiperNext"}
          onClick={() => swiper1.slideNext()}
          onMouseEnter={() => setLable("Next")}
        ></div>
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
