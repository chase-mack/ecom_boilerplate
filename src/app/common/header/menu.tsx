"use client";
import { useState } from "react";
import styles from "./header.module.css";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div role="navigation" className={styles.hamburgerMenu}>
        <div className={styles.navBtn} onClick={toggleMenu}>
          <span
            className={`${styles.navBtnBar} ${
              menuOpen ? styles.rotateLine1 : ""
            }`}
          ></span>
          <span
            className={`${styles.navBtnBar} ${
              menuOpen ? styles.hideLine2 : ""
            }`}
          ></span>
          <span
            className={`${styles.navBtnBar} ${
              menuOpen ? styles.rotateLine3 : ""
            }`}
          ></span>
        </div>
      </div>
      <div
        className={`${styles.menuOverlay} ${menuOpen ? styles.navOpen : ""}`}
      >
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
