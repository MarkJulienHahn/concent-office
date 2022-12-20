import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useInView } from "react-intersection-observer";

import Image from "next/image";

import img1 from "../public/images/Concept-Office8.jpg";
import img2 from "../public/images/Concept-Office9.jpg";
import img3 from "../public/images/Concept-Office10.png";
import img4 from "../public/images/Concept-Office7.jpg";

const Projects = ({ projects }) => {
  // const { ref: projects, inView: isVisible } = useInView({
  //   threshold: 0.01,
  // });

  const ref = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  const scrollDown = () => {
    ref.current.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  // useEffect(() => {
  //   isVisible && scrollDown();
  // }, [isVisible]);


  return (
    <div className="projectsWrapper">
      <div ref={ref}>
        <Swiper slidesPerView={1} loop={true}>
          {projects.map((project, i) => (
            <SwiperSlide>
              <div className="swiperSingle">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
