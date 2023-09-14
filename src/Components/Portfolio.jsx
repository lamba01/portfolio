function Portfolio() {
    return (
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="project">
          <img src="project-image.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
          <a href="/project1">Learn More</a>
        </div>
        {/* Add more project items */}
      </section>
    );
  }

  export default Portfolio;