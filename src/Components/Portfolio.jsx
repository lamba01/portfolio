import React, { useEffect, forwardRef } from "react";
import "../styles/portfolio.css";
import project1 from "../images/imagehubb.png";
import project2 from "../images/TaskM.webp";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
import rps from "../images/rps.jpg";
import project8 from "../images/Group 1.jpg";
import project9 from "../images/screenshot.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "ImageHub",
    imageSrc: project1,
    description:
      "Dive into a curated collection of stunning images, meticulously organized for your inspiration and convenience. Explore diverse categories, discover captivating visuals, and elevate your projects with ease. With ImageHub, unleash your creativity and unlock a world of endless possibilities.",
    projectUrl: "https://imagehubb.vercel.app/",
    projectSource: "https://github.com/lamba01/Unsplash-App",
  },
  {
    id: 2,
    title: "Task Management App",
    imageSrc: project2,
    description:
      "Crafting smooth task management experiences from start to finish, my full-stack application, with features like real-time updates and dynamic user authentication, this task management app ensures efficient organization, empowering teams to achieve their goals with ease.",
    projectUrl: "https://task-managementapp-client.vercel.app",
    projectSource: "https://github.com/lamba01/Task-Management-App",
  },
  {
    id: 3,
    title: "EasyBank Landing Page",
    imageSrc: project3,
    description:
      "This project is a responsive and fully functional landing page developed using Next.js and Tailwind CSS. The landing page highlights my ability to implement responsive design principles and leverage the power of Next.js for optimized performance and fast load times.",
    projectUrl: "https://easybank-landings-pages.vercel.app/",
    projectSource: "https://github.com/lamba01/Easybank-landing-page",
  },
  {
    id: 4,
    title: "nigerian journal of social health",
    imageSrc: project4,
    description:
      "Built a user-friendly and responsive platform for the Nigerian Journal of Social Health using PHP(OJS), streamlining submission, peer review, and publication workflows for authors and reviewers.",
    projectUrl: "https://rpsgamers.netlify.app/",
    projectSource: "https://github.com/lamba01/RPS",
  },
  {
    id: 5,
    title: "CEPHER website",
    imageSrc: project5,
    description:
      "Designed and developed the Centre for Population and Health  Research website using React for an interactive user interface, Contentful as the headless CMS for seamless content management, and Tailwind CSS to create a fully responsive and modern design. ",
    projectUrl: "https://www.cepher.org.ng/",
    projectSource: "https://github.com/lamba01/cepher",
  },
  {
    id: 6,
    title: "Shop-Ease",
    imageSrc: project6,
    description:
      "This Project integrates user-friendly interfaces with powerful server-side functionalities. Users are welcomed to a world where seamless navigation, captivating product displays, and checkout processes redefine the standards of online shopping.",
    projectUrl: "https://commeercee.vercel.app",
    projectSource: "https://github.com/lamba01/App",
  },
  {
    id: 7,
    title: "Rock, Paper and Scissors game",
    imageSrc: rps,
    description:
      "A simple yet interactive Rock Paper Scissors game built with vanilla JavaScript and CSS. Features real-time user input, dynamic score tracking, and responsive UI for an engaging experience. Play against the computer and test your luck! 🚀🎮",
    projectUrl: "https://rpsgamers.netlify.app",
    projectSource: "https://github.com/lamba01/RPS",
  },
  {
    id: 8,
    title: "Appointment Scheduler & Admin Panel",
    imageSrc: project8,
    description:
      "A full-stack scheduling system built with MERN stack. Implements JWT authentication, real-time booking management, an interactive calendar, and an admin dashboard for appointment control. Optimized for performance and scalability.",
    projectUrl: "https://airbox-asessment.vercel.app",
    projectSource: "https://github.com/lamba01/Airbox-Asessment",
  },
  {
    id: 9,
    title: "Manage Landing page",
    imageSrc: project9,
    description:
      "A responsive landing page built with React, Material UI, and Slick Carousel. Developed based on a Frontend Mentor challenge, featuring a sleek design, smooth animations, and full responsiveness across all devices.",
    projectUrl: "https://managelandingpager.netlify.app",
    projectSource: "https://github.com/lamba01/Manage-Landing-Page",
  },
];

const Portfolio = forwardRef((props, ref) => {
  const handleClick = (projectUrl) => {
    // Open the project URL in a new tab when button the  is clicked
    window.open(projectUrl, "_blank");
  };
  const handleSource = (projectSource) => {
    // Open the project URL in a new tab when the button is clicked
    window.open(projectSource, "_blank");
  };
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section className="port" ref={ref}>
      <h1>Portfolio</h1>
      <div className="portfolio" data-aos="fade-up" data-aos-duration="3000">
        {projects.map((project, index) => (
          <div className="project-item" key={project.id}>
            <img src={project.imageSrc} alt={project.title} />
            <div className="description">
              <h3 className="title-project">{project.title}</h3>
              <p className="desc">{project.description}</p>
              <div className="btns">
                <button
                  className="live-btn"
                  onClick={() => handleClick(project.projectUrl)}
                >
                  🔗 live site
                </button>
                {index !== 3 ? (
                  // Assuming 4th project is at index 3
                  <button
                    className="live-btn2"
                    onClick={() => handleSource(project.projectSource)}
                  >
                    <FaGithub style={{ marginRight: "5px" }} /> view source code
                  </button>
                ) : (
                  <button className="live-btn3" disabled>
                    <FaGithub style={{ marginRight: "5px" }} /> view source code
                  </button>
                )}
                {/* <button className='live-btn2' onClick={() => handleSource(project.projectSource)}><FaGithub style={{marginRight: '5px'}}/> view source code</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
export default Portfolio;
