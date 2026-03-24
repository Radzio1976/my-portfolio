import React, { useEffect, useRef, useState } from "react";
import * as styles from "./Contact.module.css";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, message };
    console.log(data);
    await fetch("/.netlify/functions/contact.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" ref={ref} className={styles.contact}>
      <h2
        className={`${styles.contactTitle} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
      >
        Kontakt
      </h2>
      <div className={styles.contactWrapper}>
        <div
          className={`${styles.contactData} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
        >
          <h3>Znajdź najlepszą opcję dla siebie lub swojej firmy</h3>
          <h3>Radosław Tomaszewski</h3>
          <h3>Tel. +48 509 998 279</h3>
          <h3>
            <a href="mailto:r.tomaszewski@gmail.com">r.tomaszewski@gmail.com</a>
          </h3>
        </div>
        <div
          className={`${styles.contactForm} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
        >
          {sent && <p className={styles.success}>Wiadomość została wysłana!</p>}

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />

            <p hidden>
              <input name="bot-field" />
            </p>

            <div className={styles.field}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Twoje imię</label>
            </div>

            <div className={styles.field}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>

            <div className={styles.field}>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <label>Wiadomość</label>
            </div>

            <button type="submit">Wyślij wiadomość</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
