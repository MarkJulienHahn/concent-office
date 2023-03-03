import { useState, useEffect, useRef } from "react";

import { Pagination } from "swiper";
import Div100vh from "react-div-100vh";
import { use100vh } from "react-div-100vh";

import { useInView } from "react-intersection-observer";
import { useSwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProjectsImage from "./ProjectsImage";
import MouseDiv from "./MouseDiv";

const Projects = ({
  projects,
  setSliderTitle,
  setSwiperIndex,
  swiperIndex,
  english,
  lable,
  setLable,
}) => {
  const swiperSlide = useSwiperSlide();
  const swiperRef = useRef(null);
  const [reset, setReset] = useState(false)

  const { ref, inView, entry } = useInView();

  const height = use100vh();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span id="projectsPagination" class="' + className + '">' + "</span>"
      );
    },
  };

  useEffect(() => {
    swiperSlide.isActive ? setSwiperIndex(1) : "";
  });

  useEffect(() => {
    !swiperSlide.isActive ? setReset(true) : setReset(false);
  });

    useEffect(() => {
    swiperSlide.isActive
      ? setSliderTitle(<>©{new Date().getFullYear()}</>)
      : "";
  }, [inView]);

  return (
    <>
      <MouseDiv lable={lable} />
      <Div100vh>
        <div
          className="projectsWrapper"
          style={{ width: "100vw", height: "100%", background: "white" }}
        >
          <div ref={ref}>
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              pagination={pagination}
              modules={[Pagination]}
              loop={true}
              speed={1000}
              style={{ height: `${height}px` }}
            >
              {projects.map((project, i) => (
                <SwiperSlide key={i}>
                  <Div100vh>
                    <div className="swiperSingle">
                      <ProjectsImage
                        project={project}
                        setSliderTitle={setSliderTitle}
                        swiperIndex={swiperIndex}
                        english={english}
                        setLable={setLable}
                        reset={reset}
                      />
                    </div>
                  </Div100vh>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Div100vh>
    </>
  );
};

export default Projects;
