import { useEffect, useRef } from "react";

import { useInView } from "react-intersection-observer";
import { useSwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProjectsImage from "./ProjectsImage";

const Projects = ({
  projects,
  setSliderTitle,
  setSwiperIndex,
  swiperIndex,
  english,
}) => {
  const swiperSlide = useSwiperSlide();

  const { ref, inView, entry } = useInView();

  useEffect(() => {
    swiperSlide.isActive ? setSwiperIndex(1) : "";
  });

  return (
    <div className="projectsWrapper">
      <div ref={ref}>
        <Swiper slidesPerView={1} loop={true} speed={1000}>
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="swiperSingle" >
                <ProjectsImage
                  project={project}
                  setSliderTitle={setSliderTitle}
                  swiperIndex={swiperIndex}
                  english={english}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
