import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";

import Link from "next/link";

const Nav = ({ english, setEnglish, sliderTitle, functionAbout }) => {
  const router = useRouter();

  const [active, setActive] = useState(false);
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

  return (
    <>
      <div
        className={styles.navWrapper}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <div
          className={styles.navOuter}
          style={{ width: active ? "50vw" : "140px" }}
        >
          <Link href="/">
            <span className={styles.navConcept}>concept</span>
          </Link>
          <Link href="/">
            <span>office</span>
          </Link>
        </div>

        {/* <div
          className={styles.navInner}
          style={{ transform: active ? "translateY(0)" : "translateY(-100px)" }}
        >
          <Link href="/about">
            <span className={styles.navLink} style={{ width: "60px" }}>
              about
            </span>
          </Link>
          <Link href="/workshop">
            <span className={styles.navLink} style={{ width: "95px" }}>
              workshop
            </span>
          </Link>
          <Link href="/info">
            <span className={styles.navLink} style={{ width: "38px" }}>
              info
            </span>
          </Link>
        </div> */}

        <div
          className={styles.navInner}
          style={{ transform: active ? "translateY(0)" : "translateY(-100px)" }}
        >
          <span className={styles.navLink} style={{ width: "60px" }} onClick={() => functionAbout(0)}>
            about
          </span>

          <Link href="/workshop">
            <span className={styles.navLink} style={{ width: "95px" }}>
              workshop
            </span>
          </Link>
          <Link href="/info">
            <span className={styles.navLink} style={{ width: "38px" }}>
              info
            </span>
          </Link>
        </div>
      </div>

      <Link href={router.route == "/" ? "/about" : "/"}>
        <div
          className={styles.navMobileWrapper}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <div
            className={styles.navMobileOuter}
            style={router.route == "/" ? { width: "170px" } : { width: "100%" }}
          >
            <span className={styles.navMobileConcept}>concept</span>

            <span>office</span>
          </div>
        </div>
      </Link>

      {router.route !== "/" && (
        <div className={styles.navInnerMobile}>
          <Link href="/about">
            <span className={styles.navLink} style={{ width: "60px" }}>
              about
            </span>
          </Link>
          <Link href="/workshop">
            <span className={styles.navLink} style={{ width: "95px" }}>
              workshop
            </span>
          </Link>
          <Link href="/info">
            <span className={styles.navLink} style={{ width: "38px" }}>
              info
            </span>
          </Link>
        </div>
      )}

      {(router.route !== "/") | (scrollPosition >= 200) ? (
        <div className={styles.navBottom}>
          <div className={styles.navBottomInner}>
            <span className={styles.copyright}>
              {router.route !== "/" ? (
                <>©{new Date().getFullYear()}</>
              ) : (
                sliderTitle
              )}
            </span>
          </div>
          <div className={styles.navBottomInner}>
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
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Nav;
