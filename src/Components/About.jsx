import React, { useEffect, forwardRef } from "react";
import "../styles/about.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      className="about"
      ref={ref}
      data-aos="zoom-in-down"
      data-aos-easing="ease-in-sine"
    >
      <h2 className="about-header">About Me</h2>

      <p>
        Hi there! 👋 I'm John, a passionate{" "}
        <strong>Full-Stack Web Developer</strong> and{" "}
        <strong>SEO Specialist</strong>. I specialize in building{" "}
        <strong>high-performance web applications</strong> that are both
        visually appealing and optimized for search engines.
      </p>

      <p>
        With expertise in{" "}
        <strong>
          React, Next.js, Nest.js Node.js, Express, MongoDB, MySQL, Tailwind
          CSS, and SEO strategies
        </strong>
        , I create fast, scalable, and user-friendly digital experiences.
        Whether it's designing seamless UIs, implementing efficient backend
        systems, or optimizing websites for better search rankings, I ensure
        every project delivers real impact.
      </p>

      <p>
        I thrive on solving complex problems, improving web accessibility, and
        enhancing user engagement through data-driven strategies. Beyond coding,
        I leverage SEO best practices to boost website visibility and drive
        organic traffic.
      </p>

      <p>
        I'm always eager to take on new challenges, collaborate with teams, and
        turn ideas into reality. Let’s build something amazing together!
      </p>
    </section>
  );
});

export default About;
