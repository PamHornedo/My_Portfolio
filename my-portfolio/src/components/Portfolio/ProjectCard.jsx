function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}) {
  return (
    <div className="project">
      <h3 className="project-title"></h3>
      <img src={image} className="image2" />
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <p className="project-desc">
        <b>Technologies used:</b> {technologies}
      </p>
      <div className="page-links2">
        <a id="github" href={liveUrl}>
          View Project
        </a>
        <a id="repo" href={githubUrl}>
          View Github Repository
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
