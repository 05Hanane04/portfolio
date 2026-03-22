import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import SoftSkills from "./components/SoftSkills";
import Topics from "./components/Topics";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import BackgroundAnimation from "./components/BackgroundAnimation";
import "./assets/css/style.css";
import "./assets/css/footer.css";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.className = theme + "-theme";
  }, [theme]);
  return (
    <>
      <ScrollUp />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <BackgroundAnimation />
      <main>
        <Hero />
        <Marquee />

        <div className="main">
          <div className="container">
            <div className="blog">
              <Projects />
              <Education />
              <Certificates />
            </div>

            <div className="aside">
              <Topics />
              <SoftSkills />
            </div>
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
