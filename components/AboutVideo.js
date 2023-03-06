import { useSwiper } from "swiper/react";

const AboutVideo = ({ entry, setLable }) => {
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
        <div className="swiperVideoDesktop">
          <video loop autoPlay muted>
            <source className="videoDesktop" src={entry.videoDesktop.url} />
          </video>
        </div>
        <div className="swiperVideoMobile">
          <video loop autoPlay muted>
            <source className="videoMobile" src={entry.videoMobile.url} />
          </video>
        </div>
      </div>
    </>
  );
};

export default AboutVideo;
