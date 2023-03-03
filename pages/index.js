import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import Head from "next/head";

import styles from "../styles/Nav.module.css";

import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Workshop from "../components/Workshop";
import About from "../components/About";
import Impressum from "../components/Impressum";

import useWindowDimensions from "../components/useWindowDimensions";
import Div100vh from "react-div-100vh";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

import client from "../client";
import Info from "../components/Info";

const imprActive = {
  opacity: 1,
  pointerEvents: "auto",
};

const imprInactive = {
  opacity: 0,
  pointerEvents: "none",
};

export default function Home({
  projects,
  about,
  workshop,
  info,
  impressum,
  english,
  setEnglish,
}) {
  const location = useRouter();
  const [active, setActive] = useState(false);
  const [sliderTitle, setSliderTitle] = useState("");
  const [swiperIndex, setSwiperIndex] = useState(0);

  const swiperRef = useRef(null);

  const [lable, setLable] = useState("");

  const { windowWidth } = useWindowDimensions();

  const nextSlide = () => swiperRef.current.swiper.slideTo(1);

  useEffect(() => {
    swiperIndex >= 1 && setActive(true), swiperIndex < 1 && setActive(false);
  }, [swiperIndex]);

  useEffect(() => {
    windowWidth >= 1000 || (swiperIndex < 5 && windowWidth <= 1000)
      ? swiperRef.current.swiper.enable()
      : swiperRef.current.swiper.disable();
  }, [swiperIndex]);

  return (
    <div>
      <Head>
        <meta name="keywords" content="web" />
        <title>Concept Office</title>
        <meta
          name="description"
          content="Concept Office ist ein Studio für Innenarchitektur mit dem Schwerpunkt einer nachhaltigen und flexiblen Raumgestaltung. Das Studio arbeitet dabei mit Experten aus verschiedenen Disziplinen zusammen und analysiert bestehende Büro- und Raumstrukturen, um daraus Ressourcenschonende und Mehrfachnutzbare Räume zu entwickeln."
        />
        <link rel="icon" href="/favicon.ico" sizes="any"></link>
        <link rel="icon" href="/icon.svg" type="image/svg+xml"></link>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="manifest" href="/manifest.json"></link>
      </Head>

      {/* NAV */}

      <div
        className={styles.navWrapper}
        onMouseEnter={() => {
          setActive(true), setLable("");
        }}
        onMouseLeave={swiperIndex < 1 ? () => setActive(false) : () => {}}
      >
        <div
          className={styles.navOuter}
          style={{ width: active ? "calc(50vw + 60px)" : "140px" }}
        >
          <span
            style={{ paddingLeft: "0px" }}
            className={styles.navConcept}
            onClick={() => swiperRef.current.swiper.slideTo(0)}
          >
            concept
          </span>
          <span
            onClick={() => swiperRef.current.swiper.slideTo(0)}
            style={{ paddingRight: "10px" }}
          >
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

      <div className={styles.navBottom} onMouseEnter={() => setLable("")}>
        <div className={styles.navBottomInner}>
          <span className={styles.copyright}>{sliderTitle}</span>
        </div>
        <div
          className={styles.navImpressum}
          style={
            swiperIndex == 4 || swiperIndex == 5 ? imprActive : imprInactive
          }
          onClick={
            swiperIndex == 4
              ? () => {
                  swiperRef.current.swiper.slideTo(5);
                }
              : async () => {
                  await swiperRef.current.swiper.enable();
                  await swiperRef.current.swiper.slideTo(4);
                }
          }
        >
          <span>impressum</span>
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
          style={
            swiperIndex > 0 && swiperIndex < 5
              ? { width: "100%" }
              : { width: "170px" }
          }
          onClick={
            swiperIndex < 1
              ? () => swiperRef.current.swiper.slideTo(2)
              : () => {}
          }
        >
          <span
            className={styles.navMobileConcept}
            onClick={
              swiperIndex != 0
                ? async () => {
                    await swiperRef.current.swiper.enable();
                    await swiperRef.current.swiper.slideTo(0);
                  }
                : () => swiperRef.current.swiper.slideTo(2)
            }
          >
            concept
          </span>

          <span
            onClick={
              swiperIndex != 0
                ? async () => {
                    await swiperRef.current.swiper.enable();
                    await swiperRef.current.swiper.slideTo(0);
                  }
                : () => swiperRef.current.swiper.slideTo(2)
            }
          >
            office
          </span>
        </div>
      </div>

      <div
        className={
          swiperIndex > 0 && swiperIndex < 5
            ? `${styles.navInnerMobile} ${styles.navInnerMobileVisible}`
            : `${styles.navInnerMobile} ${styles.navInnerMobileHidden}`
        }
      >
        <span
          className={styles.navLink}
          style={{ width: "50px" }}
          onClick={() => swiperRef.current.swiper.slideTo(1)}
        >
          <span style={{ pointerEvents: "auto" }}>work</span>
        </span>
        <span
          className={styles.navLink}
          style={{ width: "60px" }}
          onClick={() => swiperRef.current.swiper.slideTo(2)}
        >
          <span style={{ pointerEvents: "auto" }}>about</span>
        </span>
        <span
          className={styles.navLink}
          style={{ width: "95px" }}
          onClick={() => swiperRef.current.swiper.slideTo(3)}
        >
          <span style={{ pointerEvents: "auto" }}>workshop</span>
        </span>
        <span
          className={styles.navLink}
          style={{ width: "38px" }}
          onClick={() => swiperRef.current.swiper.slideTo(4)}
        >
          <span style={{ pointerEvents: "auto" }}>info</span>
        </span>
      </div>

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
              <Swiper
                ref={swiperRef}
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={0}
                keyboard={{
                  enabled: true,
                }}
                modules={[Mousewheel]}
                speed={1000}
                mousewheel={
                  windowWidth > 1000
                    ? { enabled: true, threshold: 20 }
                    : { enabled: false }
                }
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
                    lable={lable}
                    setLable={setLable}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <About
                    english={english}
                    swiperIndex={swiperIndex}
                    setSwiperIndex={setSwiperIndex}
                    setSliderTitle={setSliderTitle}
                    about={about}
                    lable={lable}
                    setLable={setLable}
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
                <SwiperSlide style={{ overflow: "scroll" }}>
                  <Impressum
                    swiperIndex={swiperIndex}
                    setSwiperIndex={setSwiperIndex}
                    impressum={impressum[0]}
                    english={english}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
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
  const impressum = await client.fetch(`
  *   [_type == "impressum"]{...}`);

  return {
    props: {
      projects,
      about,
      workshop,
      info,
      impressum,
    },
  };
}
