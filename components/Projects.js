import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProjectsImage from "./ProjectsImage";

const Projects = ({ projects, setSliderTitle, english }) => {
  return (
    <div className="projectsWrapper">
      <div>
        <Swiper
          slidesPerView={1}
          loop={true}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="swiperSingle">
                <ProjectsImage project={project} setSliderTitle={setSliderTitle} english={english}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
