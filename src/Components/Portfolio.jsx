// import React from 'react';
// import '../styles/portfolio.css'; // Import your CSS file
// import project1 from '../images/dd.jpg'
// import project2 from '../images/React Countries Data App.png'
// import project3 from '../images/desktop.jpg'
// import project4 from '../images/desktop-preview.jpg'
// import project5 from '../images/ok.jpg'
// import project6 from '../images/oof.jpg'

// const projects = [
//   {
//     id: 1,
//     title: 'Project 1',
//     imageSrc: project1,
//     description: 'Description of Project 1',
//     projectUrl: 'https://commerceproduct-pages.netlify.app/',
//   },
//   {
//     id: 2,
//     title: 'Project 2',
//     imageSrc: project2,
//     description: 'Description of Project 2',
//     projectUrl: 'https://countriesapppr.netlify.app/',
//   },
//   {
//     id: 3,
//     title: 'Project 2',
//     imageSrc: project3,
//     description: 'Description of Project 2',
//     projectUrl: 'https://todolapp.netlify.app/',
//   },
//   {
//     id: 4,
//     title: 'Project 2',
//     imageSrc: project4,
//     description: 'Description of Project djjsksxlk',
//     projectUrl: 'https://rpsgamers.netlify.app/',
//   },
//   {
//     id: 5,
//     title: 'Project 2',
//     imageSrc: project5,
//     description: 'Description of Project dffkmmmm',
//     projectUrl: 'https://countrysapis.netlify.app/',
//   },
//   {
//     id: 6,
//     title: 'Project 2',
//     imageSrc: project6,
//     description: 'Description of Project disakmskmx',
//     projectUrl: 'https://adviceegeneratorapp.netlify.app/',
//   }
// ];

// function Portfolio() {
//   const handleClick = ({projectUrl}) => {
//     // Open the project URL in a new tab when the image is clicked
//     window.open(projectUrl, '_blank');
//   };
//   return (
//     <section className='port'>
//       <h1>Portfolio</h1>
//     <div className="portfolio" onClick={handleClick}>     
//       {projects.map((project) => (
//         <div className="project-item" key={project.id}>
//           <img src={project.imageSrc} alt={project.title} />
//           <div className="overlay">
//             <div className="description">
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" 
//               onClick={() => console.log('Link clicked')}>
//                 View Project
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </section>
//   );
// }

// export default Portfolio;


import React from 'react';
import '../styles/portfolio.css'; // Import your CSS file
import project1 from '../images/dd.jpg';
import project2 from '../images/React Countries Data App.png';
import project3 from '../images/desktop.jpg';
import project4 from '../images/desktop-preview.jpg';
import project5 from '../images/ok.jpg';
import project6 from '../images/oof.jpg';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    imageSrc: project1,
    description: 'Description of Project 1',
    projectUrl: 'https://commerceproduct-pages.netlify.app/',
  },
  {
    id: 2,
    title: 'Project 2',
    imageSrc: project2,
    description: 'Description of Project 2',
    projectUrl: 'https://countriesapppr.netlify.app/',
  },
  {
    id: 3,
    title: 'Project 3', // Corrected title numbering
    imageSrc: project3,
    description: 'Description of Project 3', // Corrected description numbering
    projectUrl: 'https://todolapp.netlify.app/',
  },
  {
    id: 4,
    title: 'Project 4', // Corrected title numbering
    imageSrc: project4,
    description: 'Description of Project 4', // Corrected description numbering
    projectUrl: 'https://rpsgamers.netlify.app/',
  },
  {
    id: 5,
    title: 'Project 5', // Corrected title numbering
    imageSrc: project5,
    description: 'Description of Project 5', // Corrected description numbering
    projectUrl: 'https://countrysapis.netlify.app/',
  },
  {
    id: 6,
    title: 'Project 6', // Corrected title numbering
    imageSrc: project6,
    description: 'Description of Project 6', // Corrected description numbering
    projectUrl: 'https://adviceegeneratorapp.netlify.app/',
  },
];

function Portfolio() {
  const handleClick = (projectUrl) => {
    // Open the project URL in a new tab when the image is clicked
    window.open(projectUrl, '_blank');
  };
  return (
    <section className='port'>
      <h1>Portfolio</h1>
      <div className="portfolio">
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
}

export default Portfolio;
