import React, { useRef } from "react";
import { Hero, Navbar } from "../components";

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
      <section
        ref={aboutRef}
        id={`about`}
        className="h-screen flex items-center justify-center flex-col bg-slate-50"
      >
        <h1 className="text-3xl font-bold text-slate-900">About</h1>
      </section>
      <section
        ref={skillRef}
        id={`skill`}
        className="h-screen flex items-center justify-center flex-col bg-slate-50"
      >
        <h1 className="text-3xl font-bold text-slate-900">Skills</h1>
      </section>
      <section
        ref={projectRef}
        id={`project`}
        className="h-screen flex items-center justify-center flex-col bg-slate-50"
      >
        <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
      </section>
      <section
        ref={contactRef}
        id={`contact`}
        className="h-screen flex items-center justify-center flex-col bg-slate-50"
      >
        <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
      </section>
    </>
  );
};

export default Home;
