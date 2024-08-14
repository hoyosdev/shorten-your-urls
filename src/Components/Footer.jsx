import React from "react";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import css from "./Footer.module.css";

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
      src: facebook,
      href: "/",
    },
    {
      name: "Twitter logo",
      src: twitter,
      href: "/",
    },
    {
      name: "Pinterest logo",
      src: pinterest,
      href: "/",
    },
    {
      name: "Instagram logo",
      src: instagram,
      href: "/",
    },
  ];
  return (
    <footer className={css.bgDark}>
      <div className={css.container}>
        <div className={`${css.layout} ${css.mobile}`}>
          <Logo className={css.footerLogo}></Logo>
          <div className={css.layout}>
            <div className={css.footerLinksWrapper}>
              {footerContent.map((element) => (
                <div className={css.column}>
                  <p className={css.columnTitle}>{element.name}</p>
                  {element.content.map((contentName) => (
                    <a className={css.footerLink} href="/">
                      {contentName}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div className={`${css.footerLinksWrapper} ${css.socialMedia}`}>
              {socialMediaContent.map((element) => (
                <a href={element.href}>
                  <img
                    className={css.socialMediaIcon}
                    src={element.src}
                    alt={element.name}
                  />
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
