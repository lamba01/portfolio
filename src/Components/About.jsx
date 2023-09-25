import React, { useEffect, forwardRef } from "react";
import "../styles/about.css";
import AOS from "aos";
import "aos/dist/aos.css";
const About =  forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
    return (
  
  <section className="about" ref={ref} data-aos="zoom-in-down" data-aos-easing="ease-in-sine">
      <p>I'm a passionate web developer specializing in crafting immersive online experiences.
         With a solid foundation in JavaScript, I bring ideas to life by designing and building 
         captivating websites and web applications. My goal is to create digital spaces that not only look great 
         but also function seamlessly.  I stay on the cutting edge of web technologies, always seeking new ways 
         to improve my development stack. <br />
         Let's work together to create the next generation of fully interactive and responsive websites and apps. 
         If you're as excited about the possibilities as I am, let's connect and make it happen.
      </p>
  </section>
    );
  });

export default About;  