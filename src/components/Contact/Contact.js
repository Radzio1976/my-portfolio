import React from "react";
import * as styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Kontakt</h2>

      <p>Masz pytanie lub potrzebujesz strony internetowej?</p>

      <a href="mailto:twojemail@email.com">Napisz do mnie</a>
    </section>
  );
};

export default Contact;
