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
        <div className="swiperVideoMobile">
          <video loop autoPlay playsinline muted>
            <source src={entry.videoMobile.url} />
          </video>
        </div>
        <div className="swiperVideoDesktop">
          <video loop autoPlay playsinline muted>
            <source src={entry.videoDesktop.url} />
          </video>
        </div>
      </div>
    </>
  );
};

export default AboutVideo;
