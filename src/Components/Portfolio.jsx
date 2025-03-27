import React, { useEffect, forwardRef } from "react";
import "../styles/portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";

// Project Image Imports
import project1 from "../images/imagehubb.png";
import project2 from "../images/TaskM.webp";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
import rps from "../images/rps.jpg";
import project8 from "../images/Group 1.jpg";
import project9 from "../images/screenshot.png";

// Project Data
const projects = [
  {
    id: 1,
    title: "Nigerian Journal of Social Health",
    imageSrc: project4,
    description:
      "Developed a submission and review system using OJS (PHP-based) for an academic journal.",
    projectUrl: "https://njsh.org.ng/index.php/njsh-journal",
    projectSource: null, // No GitHub link
  },
  {
    id: 3,
    title: "ImageHub",
    imageSrc: project1,
    description:
      "A curated collection of stunning images, categorized for easy browsing. Built with React and Unsplash API.",
    projectUrl: "https://imagehubb.vercel.app/",
    projectSource: "https://github.com/lamba01/Unsplash-App",
  },
  {
    id: 2,
    title: "Task Management App",
    imageSrc: project2,
    description:
      "A full-stack task manager with real-time updates and authentication. Built with MERN stack.",
    projectUrl: "https://task-managementapp-client.vercel.app",
    projectSource: "https://github.com/lamba01/Task-Management-App",
  },
  {
    id: 6,
    title: "EasyBank Landing Page",
    imageSrc: project3,
    description:
      "A fully responsive landing page built with Next.js and Tailwind CSS for a financial services brand.",
    projectUrl: "https://easybank-landings-pages.vercel.app/",
    projectSource: "https://github.com/lamba01/Easybank-landing-page",
  },

  {
    id: 5,
    title: "CEPHER Website",
    imageSrc: project5,
    description:
      "A React and Contentful-powered website for the Centre for Population and Health Research(CEPHER), featuring a modern UI.",
    projectUrl: "https://www.cepher.org.ng/",
    projectSource: "https://github.com/lamba01/cepher",
  },
  {
    id: 4,
    title: "Shop-Ease eCommerce",
    imageSrc: project6,
    description:
      "An intuitive online store with seamless navigation, product displays, and checkout process. Built with React, CSS, Node.js, Express and MySQL",
    projectUrl: "https://commeercee.vercel.app",
    projectSource: "https://github.com/lamba01/App",
  },
  {
    id: 8,
    title: "Appointment Scheduler & Admin Panel",
    imageSrc: project8,
    description:
      "A full-stack scheduling system with JWT authentication, real-time bookings, and an admin dashboard. Developed using MERN Stack",
    projectUrl: "https://airbox-asessment.vercel.app",
    projectSource: "https://github.com/lamba01/Airbox-Asessment",
  },
  {
    id: 7,
    title: "Rock, Paper, Scissors Game",
    imageSrc: rps,
    description:
      "A simple, interactive Rock Paper Scissors game built with Vanilla JavaScript.",
    projectUrl: "https://rpsgamers.netlify.app",
    projectSource: "https://github.com/lamba01/RPS",
  },
  {
    id: 9,
    title: "Manage Landing Page",
    imageSrc: project9,
    description:
      "A sleek, animated landing page built with React, Material UI, and Slick Carousel.",
    projectUrl: "https://managelandingpager.netlify.app",
    projectSource: "https://github.com/lamba01/Manage-Landing-Page",
  },
];

const Portfolio = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="port" ref={ref}>
      <h1>Featured Projects</h1>
      <div className="portfolio" data-aos="fade-up" data-aos-duration="3000">
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <img src={project.imageSrc} alt={project.title} />
            <div className="description">
              <h3 className="title-project">{project.title}</h3>
              <p className="desc">{project.description}</p>
              <div className="btns">
                <button
                  className="live-btn"
                  onClick={() => window.open(project.projectUrl, "_blank")}
                >
                  🔗 Live Site
                </button>

                {project.projectSource ? (
                  <button
                    className="live-btn2"
                    onClick={() => window.open(project.projectSource, "_blank")}
                  >
                    <FaGithub style={{ marginRight: "5px" }} /> View Source Code
                  </button>
                ) : (
                  <button className="live-btn3" disabled>
                    🔒 Source Code Unavailable
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Portfolio;
