import { useSwiper } from "swiper/react";
import useWindowDimensions from "../components/useWindowDimensions";

const AboutVideo = ({ entry, setLable }) => {
  const swiper = useSwiper();

  const { windowWidth } = useWindowDimensions();

  console.log(windowWidth);

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
        {/* {windowWidth > 601 ? ( */}
        <div className="swiperVideoDesktop">
          <video
            loop
            autoPlay={true}
            playsInline
            webkit-playsinline={true}
            muted
          >
            <source
              autoPlay={true}
              muted={true}
              loop
              playsInLine
              src={entry.videoDesktop.url}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="swiperVideoMobile">
          <video
            loop
            autoPlay={true}
            playsInline
            webkit-playsinline={true}
            muted
          >
            <source
              autoPlay={true}
              muted={true}
              loop
              playsInLine
              src={entry.videoMobile.url}
              type="video/mp4"
            />
          </video>
        </div>
        {/* ) : (
          <div className="swiperVideoDesktop">
            <video
              loop
              autoPlay={true}
              playsInline
              webkit-playsinline={true}
              muted
            >
              <source
                autoPlay={true}
                muted={true}
                loop
                playsInLine
                src={entry.videoMobile.url}
                type="video/mp4"
              />
            </video>
          </div>
        )} */}
      </div>
    </>
  );
};

export default AboutVideo;
