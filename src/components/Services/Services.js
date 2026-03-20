import React from "react";
import * as styles from "./Services.module.css";
import AnimatedBackground from "../AnimatedBackground";

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <AnimatedBackground />
      <h2>Usługi</h2>

      <ol className={styles.list}>
        <li className={styles.item}>Tworzenie stron internetowych</li>
        <li className={styles.item}>Landing pages</li>
        <li className={styles.item}>Poprawki CSS</li>
        <li className={styles.item}>Responsywność mobile</li>
        <li className={styles.item}>Optymalizacja szybkości</li>
      </ol>
    </section>
  );
};

export default Services;
