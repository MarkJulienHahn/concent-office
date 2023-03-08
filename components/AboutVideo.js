import { useSwiper } from "swiper/react";
import useWindowDimensions from "../components/useWindowDimensions";

const AboutVideo = ({ entry, setLable }) => {
  const swiper = useSwiper();

  const { windowWidth } = useWindowDimensions();

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
        <div className="swiperVideoDesktop">
          <video loop autoPlay playsInLine muted>
            {/* {windowWidth < 601 ? (
              <source src={entry.videoMobile.url} />
            ) : (
              <source src={entry.videoDesktop.url} />
            )} */}
            <source src={entry.videoDesktop.url} />
          </video>
        </div>
        {/* <div className="swiperVideoDesktop">
          <video loop autoPlay playsInLine muted></video>
        </div> */}
      </div>
    </>
  );
};

export default AboutVideo;
