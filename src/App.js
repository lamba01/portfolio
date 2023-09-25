import React, { useRef } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Background from "./Components/Background";
import Topnav from "./Components/Navigation";
import DownloadButton from "./Components/Download";
import "./App.css";

function App() {
  // Create and assign refs to each child component
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific ref
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Background />
      <Topnav
        scrollToRef={scrollToRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        skillsRef={skillsRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <div className="App">
        <Hero />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Skills ref={skillsRef} />
        <Portfolio ref={portfolioRef} />
        <Contact ref={contactRef} />
      </div>
      <DownloadButton />
      <Footer />
    </div>
  );
}

export default App;
