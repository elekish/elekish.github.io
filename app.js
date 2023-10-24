// ProjectCard component
function ProjectCard({ project }) {
  return (
    <div className="project-card">
        <img src={project.imgSrc} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.detailLink}>View Details</a>
    </div>
  );
}

// Main App component
class App extends React.Component {
  // Sample state for projects, replace with your projects
  state = {
    projects: [
      {
        id: 1,
        title: 'Housing Rent Prediction',
        description: 'Short description of the project.',
        imgSrc: 'path_to_project_image1.jpg',
        detailLink: '#'
      },
      {
        id: 1,
        title: 'Movie Recommendation System',
        description: 'Short description of the project.',
        imgSrc: 'path_to_project_image1.jpg',
        detailLink: '#'
      }
      
    ]
  }

  render() {
    return (
      <div>
        <header>
          <h1>Your Name</h1>
          <nav>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        
        <main>
          <section id="landing">
            <p>Web Designer & Developer</p>
          </section>

          <section id="portfolio">
            <h2>My Work</h2>
            {this.state.projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>
        </main>
        
        <footer>
          <p>© 2023 by Ishita Biswas. All rights reserved.</p>
          <div>
            <a href="https://www.kaggle.com/isabbaggin">Kaggle</a>
            <a href="https://www.linkedin.com/in/ishita-b-080412226">LinkedIn</a>
          </div>
        </footer>
      </div>
    );
  }
}

// Rendering the main App component
ReactDOM.render(<App />, document.getElementById('root'));
