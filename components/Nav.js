import { useState } from "react";
import styles from "../styles/Nav.module.css";

import Link from "next/link";

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={styles.navWrapper}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className={styles.navOuter}
        style={{ width: active ? "50vw" : "140px" }}
      >
        <span>concept</span>
        <span>office</span>
      </div>
      <div
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
      </div>
    </div>
  );
};

export default Nav;
