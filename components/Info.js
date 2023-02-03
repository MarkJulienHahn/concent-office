import { useEffect } from "react";
import { useSwiperSlide } from "swiper/react";
import { PortableText } from "@portabletext/react";

import Div100vh from "react-div-100vh";
import { use100vh } from "react-div-100vh";

import { useInView } from "react-intersection-observer";

const Info = ({ info, setSliderTitle, setSwiperIndex }) => {
  const swiperSlide = useSwiperSlide();
  const height = use100vh();

  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    swiperSlide.isActive
      ? setSliderTitle(<>©{new Date().getFullYear()}</>)
      : "";
  }, [inView]);

  useEffect(() => {
    swiperSlide.isActive ? setSwiperIndex(4) : "";
  });

  console.log(info, info[0].insta);

  return (
    <Div100vh>
      <div style={{ width: "100vw", height: `${height}px` }} ref={ref}>
        <div className="infoWrapper">
          <p>{info[0].email}</p>
          <p>{info[0].mobile}</p>
          <p>
            insta: <a href={info[0].insta?.instalink} target="_blank" rel="noreferrer">
              {info[0].insta?.instaname}
            </a>{" "}
            <br />
            <br />
          </p>
          <p>{info[0].street}</p>
          <p>{info[0].town}</p>
        </div>
        <div
          className="infoPagination"
          style={{ top: `calc(${height}px - 42px)` }}
        ></div>
      </div>
    </Div100vh>
  );
};

export default Info;
