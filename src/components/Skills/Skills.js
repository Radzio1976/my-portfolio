import React from "react";
import * as styles from "./Skills.module.css";
import reactIcon from "../../images/technology_icons/react.png";
import gatsbyIcon from "../../images/technology_icons/gatsby.png";
import javaScriptIcon from "../../images/technology_icons/javascript.png";
import graphQL from "../../images/technology_icons/graphQL.png";
import html5 from "../../images/technology_icons/html5.png";
import css3 from "../../images/technology_icons/css3.png";
import responsiveDevices from "../../images/technology_icons/responsive-devices.png";
import seoPerformanceMarketing from "../../images/technology_icons/seo-performance-marketing.png";

const skills = [
  reactIcon,
  gatsbyIcon,
  javaScriptIcon,
  graphQL,
  html5,
  css3,
  responsiveDevices,
  seoPerformanceMarketing,
];

// const skills = [
//   "React",
//   "Gatsby",
//   "JavaScript",
//   "GraphQL",
//   "HTML",
//   "CSS",
//   "Responsive Design",
//   "Performance Optimization",
// ];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Technologie</h2>
      <p>
        Na co dzień operuję wieloma technologiami, które umożliwiają mi
        tworzenie różnorodnych i ciekawych rozwiązań na stronach. Buduję strony
        zarówno od podstaw jak i z gotowych szblonów.
      </p>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill} className={styles.skill}>
            <img src={skill} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
