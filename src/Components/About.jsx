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
In the world of web development, I'm your friendly neighborhood Frontend Web Developer. My game? Creating websites that not only look good but also feel like a breeze for users.
<br />
<strong style={{ color: "white" }}>What's my secret sauce?</strong>
<br />
<strong style={{ color: "white" }}>🎨Creative Design: </strong>
   I'm all about making things easy on the eyes. From colors to layouts, I've got a knack for crafting visually appealing websites that users can't help but love.
<br />
<br />
<strong style={{ color: "white" }}>👂Listening and Translating: </strong>
   Ever heard of a developer who's also a great listener? Well, you have now! I'm all ears for your ideas and needs. Tell me what you're envisioning, and I'll turn it into a web reality.
<br />
<br />
<strong style={{ color: "white" }}>🛠️Problem-Solving Jedi: </strong>
   Got a web-related challenge? I'm your guy! I take pride in finding clever and innovative solutions that not only fix problems but also elevate the whole experience.
<br />
<br />
<strong style={{ color: "white" }}>💻Tech Savvy: </strong>
   Now, here's where the magic happens. I'm fluent in frontend technologies that make websites tick. Responsive, pixel-perfect, and always on the cutting edge.
<br />
<br />
<strong style={{ color: "white" }}>🚀Node.js Maestro: </strong>
   Oh, did I mention I'm buddies with Node.js? Yeah, that's my go-to for connecting the dots to databases. It's like the superhero of backend connectivity, making sure everything runs smoothly.
<br />
<br />
<strong style={{ color: "white" }}>🌟Elevating Web Experiences: </strong>
   My mission? Taking web applications to the next level. I'm not just about coding; I'm about creating experiences that users remember and businesses thrive on.

Let's turn your web dreams into reality! Ready to create something amazing together? 🚀
      </p>
  </section>
    );
  });

export default About;  