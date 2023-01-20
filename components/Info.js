import { useEffect } from "react";
import { useSwiperSlide } from "swiper/react";
import { PortableText } from "@portabletext/react";

import { useInView } from "react-intersection-observer";

const Info = ({ info, setSliderTitle, setSwiperIndex }) => {
  const swiperSlide = useSwiperSlide();
  const { ref, inView, entry } = useInView();
  useEffect(() => {
    swiperSlide.isActive
      ? (setSliderTitle(<>©{new Date().getFullYear()}</>), setSwiperIndex(4))
      : "";
  }, [inView]);

  return (
      <div style={{ width: "100vw", height: "100%" }} ref={ref}>
        <div className="infoWrapper">
          <PortableText value={info[0].text} />
        </div>
        <div className="infoPagination"></div>
      </div>
  );
};

export default Info;
