import React from "react";
import * as styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>O mnie</h2>

      <p>
        Jestem frontend developerem specjalizującym się w tworzeniu szybkich
        stron internetowych opartych o React i Gatsby.
      </p>

      <p>
        Tworzę strony dla małych firm, hodowli zwierząt oraz projekty
        indywidualne.
      </p>
    </section>
  );
};

export default About;
