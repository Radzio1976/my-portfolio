import React, { useState, useRef } from "react";
import { Link } from "gatsby-plugin-react-i18next";
import * as styles from "./Header.module.css";
import ClickOutside from "../../hooks/ClickOutside";

const Header = () => {
  const menuRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  ClickOutside(setMenuOpen, menuRef);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>atma code</div>
        </Link>
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>

        <nav
          ref={menuRef}
          className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            O mnie
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Technologie
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
