import React from "react";
import * as styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.aboutTitle}>O mnie</h2>

      <p>
        Pomagam firmom budować szybkie, nowoczesne strony internetowe, które nie
        tylko dobrze wyglądają, ale też realnie wspierają rozwój biznesu.
        Specjalizuję się w tworzeniu stron opartych o React i Gatsby, dzięki
        którym witryny są szybkie, bezpieczne i dobrze widoczne w
        wyszukiwarkach.
      </p>
      <p>
        W pracy łączę estetykę z technologią – projektuję rozwiązania, które są
        przejrzyste dla użytkownika i łatwe w rozwoju dla firmy. Tworzę strony
        dla małych i średnich firm, projektów indywidualnych oraz startupów.
        Dbam o to, aby każda strona była lekka, responsywna i dopracowana w
        szczegółach.
      </p>
      <h2 className={styles.aboutmportantForMe}>Co jest dla mnie ważne</h2>
      <ol className={styles.list}>
        <li className={styles.item}>szybkie działanie strony</li>
        <li className={styles.item}>pełna responsywność (mobile first)</li>
        <li className={styles.item}>dobra widoczność w Google</li>
        <li className={styles.item}>czysty i skalowalny kod</li>
        <li className={styles.item}>dobra komunikacja z klientem</li>
      </ol>
      {/* <p>⚡ szybkie działanie strony</p>
      <p>📱 pełna responsywność (mobile first)</p>
      <p>🔍 dobra widoczność w Google</p>
      <p>🧩 czysty i skalowalny kod</p>
      <p>🤝 dobra komunikacja z klientem</p> */}
    </section>
  );
};

export default About;
