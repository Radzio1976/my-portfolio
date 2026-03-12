import React from "react";

import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </Layout>
  );
};

export default HomePage;
