import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-container">
      <div className="page-container2">
        <h2 id="page-title">Welcome to my Portfolio!</h2>

        <div className="page-content">
          <div className="card" id="image-card">
            <img
              id="image"
              src="/images/PamelaHornedo.png"
              alt="Pamela Hornedo"
            />
          </div>
          <div className="content-cards">
            <div id="page-intro" className="card">
              <h3>Pamela Hornedo</h3>
              <h3>Full-Stack Developer</h3> <br />
              <p>
                Full-Stack developer in the making — I am passionate about
                learning, problem-solving, and bringing ideas to life. I have
                experience with React, JavaScript, and modern web technologies
                to create clean, functional digital experiences.
              </p>{" "}
              <br />
            </div>
            <div className="page-links">
              <div className="card" id="contact-card">
                <Link to="/contact">Contact Me</Link>
              </div>
              <div className="card" id="portfolio-card">
                <Link to="/portfolio">View Portfolio</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
