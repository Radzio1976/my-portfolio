import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import * as styles from "./Projects.module.css";
import atmaBank from "../../images/portfolio/atma_bank.jpg";
import cats from "../../images/portfolio/cats.jpg";
import tlenoterapia from "../../images/portfolio/tlenoterapia.jpg";
import pralniaCytrynka from "../../images/portfolio/pralnia_cytrynka.jpg";
const projects = [
  {
    title: "Atma Bank",
    description: "Blog o tematyce rozwoju duchowego",
    tech: "Gatsby / React / CMS",
    image: atmaBank,
    link: "https://www.atmabank.com.pl",
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
    tech: "React / Node / CSS",
    image: pralniaCytrynka,
    link: "https://www.google.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Portfolio</h2>

      <div className={styles.grid}>
        {projects.map((project, i) => {
          return i % 2 === 0 ? (
            <div key={project.title} className={styles.card}>
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
            <div key={project.title} className={styles.card}>
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
