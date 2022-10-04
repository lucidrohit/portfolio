import Button from "../../components/common/button/button";
import Hr from "../../components/common/hr/hr";
import "./projects.scss";
import arrow from "./../../assets/images/arrow.svg";
import project1 from "./../../assets/images/project1.webp";
import project2 from "./../../assets/images/project2.webp";

function Projects() {
  document.querySelector("title").innerText = "Projects - Rohit-Gupta";
  return (
    <div className="projects">
      <h1 className="projects__heading">Projects</h1>
      <p className="projects__tagline">
        From one page sites to the worlds first mobile sitebuilder, I’ve spent
        years designing and building products of varying sizes. Here’s a small
        selection of some of my recent projects and experiences.
      </p>
      <Hr />
      <div className="projects__list">
        <div className="projects__list__item">
          <div className="project__image">
            <img
              loading="lazy"
              src={project1}
              alt="project"
              data-aos="fade-right"
            />
          </div>
          <div className="projects__list__item__content" data-aos="fade-up">
            <h2>Go Connect: Bookings</h2>
            <p>
              An online booking system for in-person or online appointments,
              designed to work standalone or alongside BaseKit Sitebuilder.
            </p>

            <p>
              During this year-long project, I worked on every stage from
              conception, wireframing, IA mapping, prototyping, detailed mockups
              through development and launch.
            </p>
            <Button text="basekit.com">
              <img
                loading="lazy"
                src={arrow}
                alt="arrow svg"
                className="arrow"
              />
            </Button>
          </div>
        </div>
        <div className="projects__list__item">
          <div className="project__image">
            <img
              loading="lazy"
              src={project2}
              alt="project"
              data-aos="fade-left"
            />
          </div>
          <div className="projects__list__item__content" data-aos="fade-up">
            <h2>Go Connect: Bookings</h2>
            <p>
              An online booking system for in-person or online appointments,
              designed to work standalone or alongside BaseKit Sitebuilder.
            </p>
            <p>
              During this year-long project, I worked on every stage from
              conception, wireframing, IA mapping, prototyping, detailed mockups
              through development and launch.
            </p>
            <Button text="basekit.com">
              <img
                loading="lazy"
                src={arrow}
                alt="arrow svg"
                className="arrow"
              />
            </Button>
          </div>
        </div>
        <div className="projects__list__item">
          <div className="project__image">
            <img loading="lazy" src={project1} alt="project" />
          </div>
          <div className="projects__list__item__content">
            <h2>Go Connect: Bookings</h2>
            <p>
              An online booking system for in-person or online appointments,
              designed to work standalone or alongside BaseKit Sitebuilder.
            </p>
            <p>
              During this year-long project, I worked on every stage from
              conception, wireframing, IA mapping, prototyping, detailed mockups
              through development and launch.
            </p>
            <Button text="basekit.com">
              <img
                loading="lazy"
                src={arrow}
                alt="arrow svg"
                className="arrow"
              />
            </Button>
          </div>
        </div>
        <div className="projects__list__item">
          <div className="project__image">
            <img loading="lazy" src={project1} alt="project" />
          </div>
          <div className="projects__list__item__content">
            <h2>Go Connect: Bookings</h2>
            <p>
              An online booking system for in-person or online appointments,
              designed to work standalone or alongside BaseKit Sitebuilder.
            </p>
            <p>
              During this year-long project, I worked on every stage from
              conception, wireframing, IA mapping, prototyping, detailed mockups
              through development and launch.
            </p>
            <Button text="basekit.com">
              <img
                loading="lazy"
                src={arrow}
                alt="arrow svg"
                className="arrow"
              />
            </Button>
          </div>
        </div>

        <Hr />
        <div className="projects__retired" data-aos="fade-up">
          <div className="heading_group">
            <h2>Graveyard</h2>
            <p>Significant projects I worked on that are now retired.</p>
          </div>
          <div className="projects__retired__item">
            <h6>Atlas Codex</h6>
            <p>
              A widely used discoveries database and companion web-app for No
              Man’s Sky, the science fiction space exploration game.
            </p>
          </div>
          <div className="projects__retired__item">
            <h6>Atlas Codex</h6>
            <p>
              A widely used discoveries database and companion web-app for No
              Man’s Sky, the science fiction space exploration game.
            </p>
          </div>
          <div className="projects__retired__item">
            <h6>Atlas Codex</h6>
            <p>
              A widely used discoveries database and companion web-app for No
              Man’s Sky, the science fiction space exploration game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
