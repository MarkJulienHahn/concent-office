import { useEffect } from "react";

import { useSwiperSlide } from "swiper/react";
import { PortableText } from "@portabletext/react";

import { Swiper, SwiperSlide } from "swiper/react";

const Impressum = ({ english, impressum, setSwiperIndex }) => {
  const swiperSlide = useSwiperSlide();
  useEffect(() => {
    swiperSlide.isActive ? setSwiperIndex(5) : "";
  });

  console.log(impressum.contentEN);

  return (
    <>
      <div className={"impressumText"}>
        <div>
          <PortableText
            value={english ? impressum.contentEN : impressum.contentDE}
          />
        </div>
      </div>
    </>
  );
};
export default Impressum;
