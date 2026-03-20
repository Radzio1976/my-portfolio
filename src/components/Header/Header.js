import React, { useState } from "react";
import * as styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>RT Dev</div>

        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            O mnie
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Teechnologie
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Portfolio
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Usługi
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
