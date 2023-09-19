import React, {useEffect} from "react";
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import '../styles/hero.css';
import backgroundImage from "../images/hero-bckgrd.png";
import 'animate.css'; // Import Animate.css
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

function Hero() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
  return (
    <section className="hero" data-aos="fade-up">
      <div className="image"><img src={backgroundImage} className="img" alt="" /></div>  
      <div className="top">          
        <div className="text">
          <span>Hello Everyone,</span> 
          <h1>I'm John Oluwafemi</h1>
          <p>I am a {"  "}  <span><Typewriter options={{
            strings: ["Designer", "Developer"], // An array of strings to type
            autoStart: true, // Automatically start the typewriter
            loop: true, // Loop the animation
          }}
          /></span>
    </p>
        </div>
        <div className="contact">
          <a href="https://wa.me/2348166009368"><FaWhatsapp color="#e6ff00" size={'2em'}  /><span>whatsapp</span></a>
          <a href="mailto:moyinooluwafemi2004@gmail.com"><FiMail color="#e6ff00" size={'2em'} /><span>Gmail</span></a>
          <span><FaLocationDot color="#e6ff00" size={'2em'} />Lagos, Nigeria</span>
        </div>   
      </div>               
    </section>
  );
}

export default Hero;




