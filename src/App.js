// App.js
import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Background from "./Components/Background";
import Topnav from "./Components/Navigation";
import "./App.css";

function App() {
  return (
    <div>
      <Background />
      <div className="App">
        <Topnav />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
