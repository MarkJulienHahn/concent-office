import { useEffect } from "react";
import { useSwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";

const ProjectsImage = ({ project, setSliderTitle, english }) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    english
      ? swiperSlide.isActive
        ? setSliderTitle(project.description)
        : ""
      : swiperSlide.isActive
      ? setSliderTitle(project.descriptionEn)
      : "";
  });

  return (
    <>
      <div className={"swiperNav"}>
        <div className={"swiperPrev"} onClick={() => swiper.slidePrev()}></div>
        <div className={"swiperNext"} onClick={() => swiper.slideNext()}></div>
      </div>
      <div className={"projectsDesktop"}>
        {project.image.dimensions.width <= project.image.dimensions.height ? (
          <Image
            src={project.image.url}
            layout="fill"
            objectFit="contain"
            objectPosition="left top"
            loading="eager"
          />
        ) : (
          <Image
            src={project.image.url}
            layout="responsive"
            objectFit="contain"
            height="100"
            width="100"
            objectPosition="left top"
            loading="eager"
          />
        )}
      </div>
      <div className={"projectsMobile"}>

          <Image
            src={project.image.url}
            layout="fill"
            objectFit="cover"
          />

      </div>
    </>
  );
};

export default ProjectsImage;
