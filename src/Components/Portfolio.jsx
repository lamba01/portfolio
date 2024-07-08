import React, { useEffect, forwardRef } from 'react';
import '../styles/portfolio.css'; 
import project1 from '../images/imagehubb.png';
import project2 from '../images/TaskM.webp';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';
import project6 from '../images/project6.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: 'ImageHub',
    imageSrc: project1,
    description: 'Dive into a curated collection of stunning images, meticulously organized for your inspiration and convenience. Explore diverse categories, discover captivating visuals, and elevate your projects with ease. With ImageHub, unleash your creativity and unlock a world of endless possibilities.',
    projectUrl: 'https://imagehubb.vercel.app/',
    projectSource: 'https://github.com/lamba01/Unsplash-App',
  },
  {
    id: 2,
    title: 'Task Management App',
    imageSrc: project2,
    description: 'Crafting smooth task management experiences from start to finish, my full-stack application, with features like real-time updates and dynamic user authentication, this task management app ensures efficient organization, empowering teams to achieve their goals with ease.',
    projectUrl: 'https://task-managementapp-client.vercel.app',
    projectSource: 'https://github.com/lamba01/Task-Management-App',
  },
  {
    id: 3,
    title: 'Todo List App', 
    imageSrc: project3,
    description: 'Engineered a dynamic Todo List application using React and additional libraries for efficient task management. Implemented features such as task creation, deletion, and status tracking to provide users with a streamlined and organized task management experience.', 
    projectUrl: 'https://todolapp.netlify.app/',
    projectSource: 'https://github.com/lamba01/todo-app',
  },
  {
    id: 4,
    title: 'Rock, Paper, Scissors', 
    imageSrc: project4,
    description: 'Developed an engaging Rock-Paper-Scissors game using JavaScript. The game allows users to play against the computer, showcasing a blend of logic and interactivity for an enjoyable gaming experience.', 
    projectUrl: 'https://rpsgamers.netlify.app/',
    projectSource: 'https://github.com/lamba01/RPS',
  },
  {
    id: 5,
    title: 'Manage Landing Page', 
    imageSrc: project5,
    description: 'A sleek and responsive landing page built with React, Slick Carousel, and Material-UI to showcase my expertise with interactive and reusable components.', 
    projectUrl: 'https://managelandingpager.netlify.app/',
    projectSource: 'https://github.com/lamba01/Manage-Landing-Page',
  },
  {
    id: 6,
    title: 'E-Commerce Site', 
    imageSrc: project6,
    description: 'This Project integrates user-friendly interfaces with powerful server-side functionalities. Users are welcomed to a world where seamless navigation, captivating product displays, and checkout processes redefine the standards of online shopping.', 
    projectUrl: 'https://commeercee.vercel.app',
    projectSource: 'https://github.com/lamba01/App',
  },
];

const Portfolio = forwardRef((props, ref) => {
  const handleClick = (projectUrl) => {
    // Open the project URL in a new tab when button the  is clicked
    window.open(projectUrl, '_blank');
  };
  const handleSource = (projectSource) => {
    // Open the project URL in a new tab when the button is clicked
    window.open(projectSource, '_blank');
  };
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section className='port' ref={ref}>
      <h1>Portfolio</h1>
      <div className="portfolio" data-aos="fade-up" data-aos-duration="3000">
        {projects.map((project) => (
          <div className="project-item" key={project.id} >
            <img src={project.imageSrc} alt={project.title} />
              <div className="description">
                <h3>{project.title}</h3>
                <p className='desc'>{project.description}</p>
                <div className="btns">
                <button className='live-btn' onClick={() => handleClick(project.projectUrl)}>🔗 live site</button>
                <button className='live-btn2' onClick={() => handleSource(project.projectSource)}><FaGithub /> view source code</button></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
export default Portfolio;
