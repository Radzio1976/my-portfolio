import React from "react";
import * as styles from "./Skills.module.css";

const skills = [
  "React",
  "Gatsby",
  "JavaScript",
  "GraphQL",
  "HTML",
  "CSS",
  "Responsive Design",
  "Performance Optimization",
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Umiejętności</h2>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill} className={styles.skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
