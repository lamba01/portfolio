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
      <p>Hey there! 👋 I'm John, your go-to enthusiast for crafting awesome web experiences!
In the world of web development, I'm your friendly neighborhood Frontend Web Developer. 
My game? My expertise goes beyond coding - it's about crafting solutions that resonate with clients needs.
<br />
For the Frontend - <strong style={{ color: "white" }}>React.js</strong><br />
for the Backend - <strong style={{ color: "white" }}>Node.js</strong><br />
my go-to database - <strong style={{ color: "white" }}>MySQL, MongoDB</strong><br />
for creative designs - <strong style={{ color: "white" }}>CSS5, Tailwind css, Material UI.</strong>
</p>
  </section>
    );
  });

export default About;  