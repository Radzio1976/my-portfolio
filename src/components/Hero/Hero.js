import React, { useRef, useState } from "react";
import * as styles from "./Hero.module.css";
import heroImage from "../../images/hero_image.png";
import AnimatedElements from "../../hooks/AnimatedElements";
import AnimatedBackground from "../../hooks/AnimatedBackground";

const Hero = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  AnimatedElements(setVisible, ref);
  return (
    <section id="home" ref={ref} className={styles.hero}>
      <AnimatedBackground />
      <div className={styles.container}>
        <div
          className={`${styles.image} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
        >
          <img src={heroImage} alt=""></img>
        </div>
        <div className={styles.slogan}>
          <h1
            className={`${styles.sloganTitle} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
          >
            Tworzę szybkie i nowoczesne strony internetowe
          </h1>

          <p
            className={`${styles.sloganText} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
          >
            Specjalizuję się w stronach opartych o React i Gatsby. Pomagam
            firmom tworzyć szybkie i responsywne strony internetowe.
          </p>

          <div
            className={`${styles.buttons} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
          >
            <a href="#projects" className={styles.primary}>
              Zobacz portfolio
            </a>

            <a href="#contact" className={styles.secondary}>
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
