import React, { useEffect, forwardRef } from 'react';
import '../styles/portfolio.css'; 
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.png';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';
import project6 from '../images/project6.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    title: 'E-commerce product page',
    imageSrc: project1,
    description: 'Single-paged E-commerce product page',
    projectUrl: 'https://commerceproduct-pages.netlify.app/',
  },
  {
    id: 2,
    title: 'Countries API',
    imageSrc: project2,
    description: 'Utilizing React and Axios to Fetch API Data',
    projectUrl: 'https://countriesapppr.netlify.app/',
  },
  {
    id: 3,
    title: 'Todo List App', 
    imageSrc: project3,
    description: 'Building a Dynamic Todo List App with React and Libraries', 
    projectUrl: 'https://todolapp.netlify.app/',
  },
  {
    id: 4,
    title: 'Rock, Paper, Scissors', 
    imageSrc: project4,
    description: 'Crafting a Fun Rock-Paper-Scissors Game with JavaScript', 
    projectUrl: 'https://rpsgamers.netlify.app/',
  },
  {
    id: 5,
    title: 'REST Countries API', 
    imageSrc: project5,
    description: 'Exploring Global Data: REST Countries API with Search and Region Filters', 
    projectUrl: 'https://countrysapis.netlify.app/',
  },
  {
    id: 6,
    title: 'Advice generator app', 
    imageSrc: project6,
    description: 'Empowering Decision-Making: Advice Generator App with JavaScript Fetch API', 
    projectUrl: 'https://adviceegeneratorapp.netlify.app/',
  },
];

const Portfolio = forwardRef((props, ref) => {
  const handleClick = (projectUrl) => {
    // Open the project URL in a new tab when the image is clicked
    window.open(projectUrl, '_blank');
  };
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section className='port' ref={ref}>
      <h1>Portfolio</h1>
      <div className="portfolio" data-aos="fade-up" data-aos-duration="3000">
        {projects.map((project) => (
          <div className="project-item" key={project.id} onClick={() => handleClick(project.projectUrl)}>
            <img src={project.imageSrc} alt={project.title} />
            <div className="overlay">
              <div className="description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
export default Portfolio;
