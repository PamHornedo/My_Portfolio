function Portfolio() {
  return (
    <div className="page-container">
      <div className="page-container2">
        <h2>My Portfolio</h2>
        <div className="projects">
          <div id="project1">
            <img
              id="image2"
              src="./src/images/TaDaList.png"
              alt="Ta Da List Project"
            />
            <h3 className="project-title">Ta-Da List</h3>
            <p className="project-desc">
              Ta-Da List is an interactive web application built with the
              Bootstrap CSS framework. It allows you to create and manage
              multiple to-do lists, making it easy to track and complete tasks
              across different projects. You can add as many lists and tasks as
              you need, giving you flexible control over your workflow.
            </p>
            <div className="page-links2">
              <a id="github" href="https://pamhornedo.github.io/Ta-da_List/">
                View Project
              </a>
              <a id="repo" href="https://github.com/PamHornedo/Ta-da_List">
                View Github Repository
              </a>
            </div>
          </div>
          <div id="project2">
            <img id="image2" src="./src/images/Project2.png" alt="Project 2" />
            <h3 className="project-title">Project 2</h3>
            <p className="project-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                explicabo fugiat eius est consequatur? Unde, quasi aut
                necessitatibus architecto optio voluptatum, sequi veniam
                veritatis voluptatibus suscipit cupiditate rem, deleniti
                eveniet!
              </p>
            </p>
            <div className="page-links2">
              <a id="github" href="">
                View Project
              </a>
              <a id="repo" href="">
                View Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
