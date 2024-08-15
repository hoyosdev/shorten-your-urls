import React, { useState, useEffect } from "react";
import logo from "./../images/logo.svg";
import menu_icon from "./../images/menu-icon.svg";
import styles from "./Navbar.module.css";

function Navbar() {
  const windowSize = window.innerWidth > 765 ? true : false;
  const [isMenuOpen, setIsMenuOpen] = useState(windowSize);

  const showMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 765) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    window.addEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`container ${styles.nav}`}>
        <a className={styles.navLogo} href="/">
          <img src={logo} alt="Shortly logo"></img>
        </a>
        {isMenuOpen && (
          <ul className={styles.navList}>
            <div
              className={
                isMenuOpen
                  ? styles.navContent
                  : `${styles.navContent} ${styles.hidden}`
              }
            >
              <li>
                <a href="/" className={styles.navLink}>
                  Features
                </a>
              </li>
              <li>
                <a href="/" className={styles.navLink}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className={styles.navLink}>
                  Resources
                </a>
              </li>
            </div>
            <div className={styles.navContent}>
              <li>
                <a href="/" className={styles.navLink}>
                  Login
                </a>
              </li>
              <li className={styles.btnWrapper}>
                <button className="btn-primary btn-small">Sign up</button>
              </li>
            </div>
          </ul>
        )}
        <button
          id="menuButton"
          className={styles.navMenuIcon}
          type="button"
          onClick={showMobileMenu}
        >
          <img height={36} src={menu_icon} alt="Shortly logo"></img>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
