import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "../styles/hero.css";
import backgroundImage from "../images/hero-bckgrd.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import CV from "../Assets/John's Resume.pdf"; // Import the resume file

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  // Handle Download Function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "John's Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero">
      <div className="image">
        <img src={backgroundImage} className="img" alt="" />
      </div>
      <div className="top">
        <div className="text">
          <span>Hello,</span>
          <h1>I'm John</h1>
          <h2>
            I am a{" "}
            <span className="typewriter-wrapper">
              <Typewriter
                options={{
                  strings: ["Designer", "Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>

          {/* Download Resume Button */}
          <button className="download-btn2" onClick={handleDownload}>
            Download Resume
          </button>
        </div>

        <div className="contact">
          <a href="https://wa.me/2348166009368">
            <FaWhatsapp color="#e6ff00" size={"2em"} />
            <span>Whatsapp</span>
          </a>
          <a href="mailto:moyinooluwafemi2004@gmail.com">
            <FiMail color="#e6ff00" size={"2em"} />
            <span>Send me a mail</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
