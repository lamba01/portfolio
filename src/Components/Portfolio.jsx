import React, { useEffect, forwardRef } from 'react';
import '../styles/portfolio.css'; 
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.png';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';
import project6 from '../images/project6.png';
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    title: 'E-commerce product page',
    imageSrc: project1,
    description: 'Single-paged E-commerce product page',
    projectUrl: 'https://commerceproduct-pages.netlify.app/',
    projectSource: 'https://github.com/lamba01/E-Commerce-App',
  },
  {
    id: 2,
    title: 'Countries API',
    imageSrc: project2,
    description: 'Utilizing React and Axios to Fetch API Data',
    projectUrl: 'https://countriesapppr.netlify.app/',
    projectSource: 'https://github.com/lamba01/Rest-api-countries-app',
  },
  {
    id: 3,
    title: 'Todo List App', 
    imageSrc: project3,
    description: 'Building a Dynamic Todo List App with React and Libraries', 
    projectUrl: 'https://todolapp.netlify.app/',
    projectSource: 'https://github.com/lamba01/todo-app',
  },
  {
    id: 4,
    title: 'Rock, Paper, Scissors', 
    imageSrc: project4,
    description: 'Crafting a Fun Rock-Paper-Scissors Game with JavaScript', 
    projectUrl: 'https://rpsgamers.netlify.app/',
    projectSource: '',
  },
  {
    id: 5,
    title: 'REST Countries API', 
    imageSrc: project5,
    description: 'Exploring Global Data: REST Countries API with Search and Region Filters', 
    projectUrl: 'https://countrysapis.netlify.app/',
    projectSource: 'https://github.com/lamba01/Rest-countries',
  },
  {
    id: 6,
    title: 'FullStack E-Commerce Site', 
    imageSrc: project6,
    description: 'This Project seamlessly integrates user-friendly interfaces with powerful server-side functionalities, offering a comprehensive shopping experience.', 
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
                <p>{project.description}</p>
                <div className="btns">
                <button className='live-btn' onClick={() => handleClick(project.projectUrl)}>view live site</button>
                <button className='live-btn' onClick={() => handleSource(project.projectSource)}>view source code</button></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
export default Portfolio;
