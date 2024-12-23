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
      <p>
        Hey there! 👋 I'm John, your go-to enthusiast for crafting awesome web experiences!
        In the world of web development, I'm your friendly neighborhood FullStack Web Developer. <br />
        My game? My expertise goes beyond coding - it's about crafting solutions that resonate with clients needs.  
        Whether it's building sleek websites or creating intuitive features, my goal is to bring ideas to life and deliver solutions that truly resonate.  
        Let's make the web a more exciting place, one project at a time!
      </p>
  </section>
    );
  });

export default About;  