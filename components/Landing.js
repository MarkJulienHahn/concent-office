import { useState, useEffect } from "react";
import { useSwiperSlide, useSwiper } from "swiper/react";

const Landing = ({ nextSlide, setSliderTitle, setSwiperIndex }) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

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
    <div className="landingWrapper">
      <p>shaping flexible and sustainable office environments.</p>
    </div>
  );
};

export default Landing;
