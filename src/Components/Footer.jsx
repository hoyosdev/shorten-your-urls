import React from "react";
import  { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import {ReactComponent as Pinterest} from "../images/icon-pinterest.svg";
import {ReactComponent as Instagram} from "../images/icon-instagram.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import styles from "./Footer.module.css";

function Footer() {
  const footerContent = [
    {
      name: "Features",
      content: ["Link Shortening", "Branded Links", "Analytics"],
    },
    { name: "Resources", content: ["Blog", "Developers", "Support"] },
    { name: "Company", content: ["About", "Our Team", "Careers", "Contact"] },
  ];
  const socialMediaContent = [
    {
      name: "Facebook logo",
      src: Facebook,
      href: "/",
    },
    {
      name: "Pinterest logo",
      src: Pinterest,
      href: "/",
    },
    {
      name: "Instagram logo",
      src: Instagram,
      href: "/",
    },
    {
      name: "Twitter logo",
      src: Twitter,
      href: "/",
    },
    
  ];
  return (
    <footer className={styles.bgDark}>
      <div className={styles.container}>
        <div className={`${styles.layout} ${styles.mobile}`}>
          <Logo className={styles.footerLogo}></Logo>
          <div className={styles.layout}>
            <div className={styles.footerLinksWrapper}>
              {footerContent.map((element) => (
                <div key={element.name} className={styles.column}>
                  <p className={styles.columnTitle}>{element.name}</p>
                  {element.content.map((contentName) => (
                    <a key={contentName}  className={styles.footerLink} href="/">
                      {contentName}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div className={`${styles.footerLinksWrapper} ${styles.socialMedia}`}>
              {socialMediaContent.map((element) => (
                <a key={element.name} href={element.href}>
                  <element.src
                    className={styles.socialMediaIcon}
                  ></element.src>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
