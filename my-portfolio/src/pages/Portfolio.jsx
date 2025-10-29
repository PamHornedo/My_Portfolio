function Portfolio() {
  return (
    <div className="page-container">
      <div className="page-container2">
        <h2>My Portfolio</h2>
        <div className="projects">
          <div id="tada">
            <img
              id="image2"
              src="./src/images/TaDaList.png"
              alt="Ta Da List Project"
            />
            <p className="project-desc">
              Ta-Da List is an interactive web application built with the
              Bootstrap CSS framework. It allows you to create and manage
              multiple to-do lists, making it easy to track and complete tasks
              across different projects. You can add as many lists and tasks as
              you need, giving you flexible control over your workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
