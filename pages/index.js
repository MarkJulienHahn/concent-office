import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import Head from "next/head";

import styles from "../styles/Nav.module.css";

import Landing from "../components/Landing";
import Projects from "../components/Projects";

import Workshop from "../components/Workshop";
import About from "../components/About";

import { use100vh } from "react-div-100vh";
import Div100vh from "react-div-100vh";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

import client from "../client";
import Info from "../components/Info";

export default function Home({
  // projects,
  // about,
  // workshop,
  // info,
  english,
  setEnglish,
}) {
  const location = useRouter();
  const [active, setActive] = useState(false);
  const [sliderTitle, setSliderTitle] = useState("");
  const [swiperIndex, setSwiperIndex] = useState(0);

  const swiperRef = useRef(null);

  const height = use100vh();

  const nextSlide = () => swiperRef.current.swiper.slideTo(1);

  useEffect(() => {
    swiperIndex >= 1 && setActive(true), swiperIndex < 1 && setActive(false);
  }, [swiperIndex]);

  return (
    <div>
      <Head>
        <title>Concept Office</title>
        <meta name="description" content="Concept Office" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAV */}

      <div
        className={styles.navWrapper}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={swiperIndex < 1 ? () => setActive(false) : () => {}}
      >
        <div
          className={styles.navOuter}
          style={{ width: active ? "50vw" : "140px" }}
        >
          <span
            className={styles.navConcept}
            onClick={() => swiperRef.current.swiper.slideTo(0)}
          >
            concept
          </span>
          <span onClick={() => swiperRef.current.swiper.slideTo(0)}>
            office
          </span>
        </div>

        <div
          className={styles.navInner}
          style={{
            transform: active ? "translateY(0)" : "translateY(-130px)",
          }}
        >
          <span
            className={swiperIndex == 1 ? styles.navLinkActive : styles.navLink}
            style={{ width: "50px" }}
            onClick={() => swiperRef.current.swiper.slideTo(1)}
          >
            work
          </span>
          <span
            className={swiperIndex == 2 ? styles.navLinkActive : styles.navLink}
            style={{ width: "60px" }}
            onClick={() => swiperRef.current.swiper.slideTo(2)}
          >
            about
          </span>
          <span
            className={swiperIndex == 3 ? styles.navLinkActive : styles.navLink}
            style={{ width: "95px" }}
            onClick={() => swiperRef.current.swiper.slideTo(3)}
          >
            workshop
          </span>{" "}
          <span
            className={swiperIndex == 4 ? styles.navLinkActive : styles.navLink}
            style={{ width: "38px" }}
            onClick={() => swiperRef.current.swiper.slideTo(4)}
          >
            info
          </span>
        </div>
      </div>

      {/* NAV BOTTOM */}

      <div className={styles.navBottom}>
        <div className={styles.navBottomInner}>
          <span className={styles.copyright}>{sliderTitle}</span>
        </div>
        <div className={styles.navBottomInner}>
          {swiperIndex != 0 && (
            <>
              <span
                onClick={() => setEnglish(!english)}
                className={english ? styles.active : styles.passive}
              >
                en
              </span>
              /
              <span
                onClick={() => setEnglish(!english)}
                className={!english ? styles.active : styles.passive}
              >
                de
              </span>
            </>
          )}
        </div>
      </div>

      {/* NAV MOBILE */}

      <div className={styles.navMobileWrapper}>
        <div
          className={styles.navMobileOuter}
          style={swiperIndex < 1 ? { width: "170px" } : { width: "100%" }}
          onClick={
            swiperIndex < 1
              ? () => swiperRef.current.swiper.slideTo(2)
              : () => {}
          }
        >
          <span
            className={styles.navMobileConcept}
            onClick={() => swiperRef.current.swiper.slideTo(0)}
          >
            concept
          </span>

          <span onClick={() => swiperRef.current.swiper.slideTo(0)}>
            office
          </span>
        </div>
      </div>

      {swiperIndex > 0 ? (
        <div className={styles.navInnerMobile}>
          <span
            className={styles.navLink}
            style={{ width: "50px" }}
            onClick={() => swiperRef.current.swiper.slideTo(1)}
          >
            work
          </span>
          <span
            className={styles.navLink}
            style={{ width: "60px" }}
            onClick={() => swiperRef.current.swiper.slideTo(2)}
          >
            about
          </span>
          <span
            className={styles.navLink}
            style={{ width: "95px" }}
            onClick={() => swiperRef.current.swiper.slideTo(3)}
          >
            workshop
          </span>
          <span
            className={styles.navLink}
            style={{ width: "38px" }}
            onClick={() => swiperRef.current.swiper.slideTo(4)}
          >
            info
          </span>
        </div>
      ) : (
        ""
      )}

      <AnimatePresence>
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
          <Div100vh>
            <div
              style={{
                width: "100vw",
                height: "100%",
                overflow: "hidden",
                background: "white",
              }}
            >
              {/* <Swiper
                ref={swiperRef}
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={0}
                keyboard={{
                  enabled: true,
                }}
                modules={[Mousewheel, Pagination]}
                allowTouchMove={false}
                speed={1000}
                mousewheel={{ enabled: true, thresholdDelta: 100 }}
              >
                <SwiperSlide>
                  <div onClick={() => swiperRef.current.swiper.slideTo(1)}>
                    <Landing
                      setSliderTitle={setSliderTitle}
                      setSwiperIndex={setSwiperIndex}
                      swiperIndex={swiperIndex}
                      nextSlide={nextSlide}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <Projects
                    projects={projects}
                    setSliderTitle={setSliderTitle}
                    setSwiperIndex={setSwiperIndex}
                    swiperIndex={swiperIndex}
                    english={english}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <About
                    english={english}
                    swiperIndex={swiperIndex}
                    setSwiperIndex={setSwiperIndex}
                    setSliderTitle={setSliderTitle}
                    about={about}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Workshop
                    english={english}
                    swiperIndex={swiperIndex}
                    setSwiperIndex={setSwiperIndex}
                    setSliderTitle={setSliderTitle}
                    workshop={workshop}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Info
                    swiperIndex={swiperIndex}
                    setSwiperIndex={setSwiperIndex}
                    setSliderTitle={setSliderTitle}
                    info={info}
                  />
                </SwiperSlide>
              </Swiper> */}
            </div>{" "}
          </Div100vh>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export async function getServerSideProps() {
  const projects = await client.fetch(`
  *   [_type == "projects"]|order(orderRank){"image": image.asset->{url, "dimensions": metadata.dimensions}, alt, ...}`);

  const about = await client.fetch(`
  *[_type == "about"]|order(orderRank){"image": image.asset->{url, "dimensions": metadata.dimensions}, description, text, textEn, "customSlider": customSlider[].asset->{url, "dimensions": metadata.dimensions}}`);
  const workshop = await client.fetch(`
  *   [_type == "workshop"]{...}`);
  const info = await client.fetch(`
  *   [_type == "info"]{...}`);

  return {
    props: {
      projects,
      about,
      workshop,
      info,
    },
  };
}
