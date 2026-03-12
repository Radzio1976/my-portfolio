import React from "react";
import * as styles from "./Projects.module.css";

const projects = [
  {
    title: "Strona hodowli kotów",
    description: "Strona prezentująca koty hodowlane oraz mioty.",
    tech: "Gatsby / React / CMS",
  },
  {
    title: "Landing page firmy",
    description: "Nowoczesna strona dla małej firmy usługowej.",
    tech: "React / CSS",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Portfolio</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} className={styles.card}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className={styles.tech}>{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
