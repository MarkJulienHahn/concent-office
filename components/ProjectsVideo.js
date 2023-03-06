import { useEffect } from "react";
import { useSwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";

const ProjectsVideo = ({
  project,
  setSliderTitle,
  swiperIndex,
  english,
  setLable,
  reset,
}) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    swiperIndex == 1
      ? english
        ? swiperSlide.isActive
          ? setSliderTitle(project.description)
          : ""
        : swiperSlide.isActive
        ? setSliderTitle(project.descriptionEn)
        : ""
      : "";
  });

  // useEffect(() => {
  //   reset && swiper.slideTo(0,0,false)
  // })

  console.log(project);

  return (
    <>
      <div className={"swiperNav"} style={{ cursor: "none" }}>
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
          <video loop autoPlay muted style={{ width: "100%" }}>
            <source
              className="videoDesktop"
              src={project.video.videoDesktop.url}
            />
          </video>
        </div>
        <div className="swiperVideoMobile">
          <video loop autoPlay muted style={{ width: "100vw" }}>
            <source
              className="videoMobile"
              src={project.video.videoMobile.url}
            />
          </video>
        </div>
      </div>
    </>
  );
};

export default ProjectsVideo;
