import React from "react";
import * as styles from "./Hero.module.css";
import heroImage from "../../images/hero_image.png";
import AnimatedBackground from "../AnimatedBackground";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <AnimatedBackground />
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={heroImage} alt=""></img>
        </div>
        <div className={styles.slogan}>
          <h1>Tworzę szybkie i nowoczesne strony internetowe</h1>

          <p>
            Specjalizuję się w stronach opartych o React i Gatsby. Pomagam
            firmom tworzyć szybkie i responsywne strony internetowe.
          </p>

          <div className={styles.buttons}>
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
