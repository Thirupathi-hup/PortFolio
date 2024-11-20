import React from "react";

import AboutMe from "../AboutMe/AboutMe.js";
import Projects from "../Projects/Projects.js";
import ContactMe from "../ContactMe/ContactMe.js";
import Skills from "../Skills/Skills.js";
import Cover from "../Cover/Cover.js";
import DivSpace from "../DivSpace/DivSpace.js";
import Certificates from "../Certificates/Certificates.js";
const Home = () => {
  return (
    <>
      <Cover />
      <DivSpace />
      <AboutMe />
      <Skills />
      <Projects />
      <Certificates />
      <ContactMe />
    </>
  );
};

export default Home;