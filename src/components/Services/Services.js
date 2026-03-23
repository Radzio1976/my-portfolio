import React, { useEffect, useRef, useState } from "react";
import * as styles from "./Services.module.css";
import AnimatedBackground from "../AnimatedBackground";

const Services = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // 👈 RESET
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className={styles.services}>
      <AnimatedBackground />
      <h2
        className={`${styles.servicesTitle} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
      >
        Usługi
      </h2>

      <ol className={styles.list}>
        {[
          "Tworzenie stron internetowych",
          "Landing pages",
          "Poprawki CSS",
          "Responsywność mobile",
          "Optymalizacja szybkości",
        ].map((text, i) => (
          <li
            key={i}
            className={`${styles.item} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
          >
            {text}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Services;
