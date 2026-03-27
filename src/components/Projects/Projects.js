import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby-plugin-react-i18next";
import * as styles from "./Projects.module.css";
import AnimatedElements from "../../hooks/AnimatedElements";
import atmaBank from "../../images/portfolio/atma_bank.jpg";
import tlenoterapia from "../../images/portfolio/tlenoterapia.jpg";
import pralniaCytrynka from "../../images/portfolio/pralnia_cytrynka.jpg";
const projects = [
  {
    title: "Atma Bank",
    description: "Blog o tematyce rozwoju duchowego",
    tech: "Gatsby / React / CMS",
    image: atmaBank,
    link: "https://www.atmabank.com/",
  },
  {
    title: "Prema O2 terapia tlenowa",
    description: "Nowoczesna strona dla małej firmy usługowej.",
    tech: "React / Node / CSS",
    image: tlenoterapia,
    link: "https://www.google.com",
  },
  {
    title: "Pralnia Cytrynka w Ustroniu Morskim",
    description: "Prosta strona wizytówkowa dla małej firmy rodzinnej.",
    tech: "React / Gatsby / Node / CSS",
    image: pralniaCytrynka,
    link: "https://cytrynka-gatsby.vercel.app/",
  },
];

const Projects = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  AnimatedElements(setVisible, ref);

  return (
    <section id="projects" ref={ref} className={styles.projects}>
      <h2
        className={`${styles.projectsTitle} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
      >
        Portfolio
      </h2>

      <div className={styles.grid}>
        {projects.map((project, i) => {
          return i % 2 === 0 ? (
            <div
              key={project.title}
              className={`${styles.card} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
            >
              <div className={styles.image}>
                <img src={project.image} alt="" />
              </div>
              <div className={styles.description}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <span className={styles.tech}>{project.tech}</span>
                <Link to={project.link} target="_blank">
                  <button>Więcej</button>
                </Link>
              </div>
            </div>
          ) : (
            <div
              key={project.title}
              className={`${styles.card} ${styles.reveal} ${visible ? styles.revealActive : ""}`}
            >
              <div className={styles.description}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <span className={styles.tech}>{project.tech}</span>
                <Link to={project.link} target="_blank">
                  <button>Więcej</button>
                </Link>
              </div>
              <div className={styles.image}>
                <img src={project.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
