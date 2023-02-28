import { useEffect } from "react";
import { useSwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";

const ProjectsImage = ({
  project,
  setSliderTitle,
  swiperIndex,
  english,
  setLable,
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
      <div className={"projectsDesktop"}>
        {project.image.dimensions.width <= project.image.dimensions.height ? (
          <Image
            src={project.image.url}
            layout="fill"
            objectFit="contain"
            objectPosition={project.right ? "right top" : "left top"}
            loading="eager"
          />
        ) : (
          <Image src={project.image.url} layout="fill" objectFit="cover" />
        )}
      </div>
      <div className={"projectsMobile"}>
        <Image src={project.image.url} layout="fill" objectFit="cover" />
      </div>
    </>
  );
};

export default ProjectsImage;
