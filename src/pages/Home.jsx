import React, { useRef } from "react";
import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Project,
  Skill,
} from "../components";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        projectRef={projectRef}
        skillRef={skillRef}
      />
      <Hero ref={homeRef} id={`home`} />
      <About ref={aboutRef} id={`about`} />
      <Skill ref={skillRef} id={`skill`} />
      <Project ref={projectRef} id={`project`} />
      <Contact ref={contactRef} id={`contact`} />
      <Footer />
    </>
  );
};

export default Home;
