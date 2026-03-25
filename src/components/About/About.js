import React, { useEffect, useRef, useState } from "react";
import * as styles from "./About.module.css";
import AnimatedElements from "../../hooks/AnimatedElements";

const About = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  AnimatedElements(setVisible, ref);

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
    <section id="about" ref={ref} className={styles.about}>
      <h2
        className={`${styles.aboutTitle} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
      >
        O mnie
      </h2>

      <p className={`${styles.reveal} ${visible ? styles.revealActive : ""}`}>
        Pomagam firmom budować szybkie, nowoczesne strony internetowe, które nie
        tylko dobrze wyglądają, ale też realnie wspierają rozwój biznesu.
        Specjalizuję się w tworzeniu stron opartych o React i Gatsby, dzięki
        którym witryny są szybkie, bezpieczne i dobrze widoczne w
        wyszukiwarkach.
      </p>

      <p className={`${styles.reveal} ${visible ? styles.revealActive : ""}`}>
        W pracy łączę estetykę z technologią – projektuję rozwiązania, które są
        przejrzyste dla użytkownika i łatwe w rozwoju dla firmy. Tworzę strony
        dla małych i średnich firm, projektów indywidualnych oraz startupów.
        Dbam o to, aby każda strona była lekka, responsywna i dopracowana w
        szczegółach.
      </p>

      <h2
        className={`${styles.aboutImportantForMe} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
      >
        Co jest dla mnie ważne
      </h2>

      <ol className={styles.list}>
        {[
          "szybkie działanie strony",
          "pełna responsywność (mobile first)",
          "dobra widoczność w Google",
          "czysty i skalowalny kod",
          "dobra komunikacja z klientem",
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

export default About;
