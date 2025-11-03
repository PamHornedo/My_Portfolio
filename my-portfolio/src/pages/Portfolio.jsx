import { projects } from "../data/projects";
import ProjectCard from "../components/Portfolio/ProjectCard";
import "../styles/components/projectcard.css";
// import "../styles/components/projectgallery.css";

function Portfolio() {
  return (
    <div className="page-container">
      <div className="page-container2">
        <h2>My Portfolio</h2>
        <div className="project-grid">
          <div className="projects">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
