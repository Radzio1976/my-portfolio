import React from "react";
import * as styles from "./Services.module.css";

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h2>Usługi</h2>

      <ul>
        <li>Tworzenie stron internetowych</li>
        <li>Landing pages</li>
        <li>Poprawki CSS</li>
        <li>Responsywność mobile</li>
        <li>Optymalizacja szybkości</li>
      </ul>
    </section>
  );
};

export default Services;
