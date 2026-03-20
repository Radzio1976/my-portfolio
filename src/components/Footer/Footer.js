import React, { useState } from "react";
import * as styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLeft}>
          <h2>O mnie</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={styles.footerMiddle}>
          <h2>Dane kontaktowe</h2>
          <p>Radosław Tomaszewzski</p>
          <p>Tel. 509-998-279</p>
          <a href="mailto:r.tomaszewski@gmail.com">r.tomaszewski@gmail.com</a>
        </div>
        <div className={styles.footerRight}>
          <h2>Zapisz się do newslettera</h2>
        </div>
      </div>
    </section>
  );
};

export default Footer;
