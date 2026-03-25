import React, { useState } from "react";
import { Link } from "gatsby-plugin-react-i18next";
import * as styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerData}>
        <div className={styles.footerAbout}>
          <h2>O mnie</h2>
          <p>
            Pomagam firmom budować szybkie, nowoczesne strony internetowe, które
            nie tylko dobrze wyglądają, ale też realnie wspierają rozwój
            biznesu.
          </p>
        </div>
        <div className={styles.footerMenu}>
          <nav className={styles.nav}>
            <h2>Menu</h2>
            <Link to="/">Home</Link>
            <Link to="#about">O mnie</Link>
            <Link to="#skills">Technologie</Link>
            <Link to="#projects">Portfolio</Link>
            <Link to="#services">Usługi</Link>
            <Link to="#contact">Kontakt</Link>
          </nav>
        </div>
        <div className={styles.footerAddress}>
          <h2>Dane kontaktowe</h2>
          <p>Radosław Tomaszewzski</p>
          <p>Tel. 509-998-279</p>
          <a href="mailto:r.tomaszewski@gmail.com">r.tomaszewski@gmail.com</a>
        </div>
      </div>
      <div className={styles.footerDesignedBy}>
        <p>
          Designed by<span>&nbsp;&nbsp;</span>
          <a href="http://atmacode.com/" target="_blank">
            Atma Code
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
