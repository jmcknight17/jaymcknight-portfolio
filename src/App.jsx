import { useState } from "react";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import "./App.css";
import Footer from "./Components/Footer";
import Timeline from "./Components/Timeline";

function App() {
  return (
    <>
      <Hero />
        <Timeline />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
