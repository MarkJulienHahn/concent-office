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
          <video
            loop
            autoPlay={true}
            playsInLine
            webkit-playsinline={true}
            muted
          >
            {/* {windowWidth < 601 ? (
              <source src={entry.videoMobile.url} />
            ) : (
              <source src={entry.videoDesktop.url} />
            )} */}
            <source
              autoPlay={true}
              muted={true}
              loop
              src={entry.videoDesktop.url}
              type='video/mp4' 
            />
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
