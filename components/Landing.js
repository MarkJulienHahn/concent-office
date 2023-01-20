import { useState, useEffect } from "react";
import { useSwiperSlide, useSwiper } from "swiper/react";

import { use100vh } from "react-div-100vh";
import Div100vh from "react-div-100vh";

const Landing = ({ nextSlide, setSliderTitle, setSwiperIndex }) => {
  const swiperSlide = useSwiperSlide();
  const height = use100vh();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    swiperSlide.isActive ? (setSliderTitle(""), setSwiperIndex(0)) : "";
    scrollPosition > 0 && nextSlide;
  });

  // useEffect(() => {
  //   scrollPosition > 0 && nextSlide;
  // });

  return (
    <Div100vh>
      <div className="landingWrapper">
        <p>shaping flexible and sustainable office environments.</p>
      </div>
    </Div100vh>
  );
};

export default Landing;
