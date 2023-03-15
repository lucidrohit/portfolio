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
        From personal projects like Examtime and Zoxtro to co-founding and
        serving as CTO of Traway, a bus booking platform, I've designed and
        developed a variety of products using programming languages like Python
        and web technologies such as ReactJS, MongoDB, and SQL. Here's a small
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
            <h2>Zoxtro: Anime Merchandise Ecommerce</h2>
            <p>
              An online booking system for in-person or online appointments,
              designed to work standalone or alongside BaseKit Sitebuilder.
            </p>

            <p>
              During this year-long project, I worked on every stage from
              conception, wireframing, IA mapping, prototyping, detailed mockups
              through development and launch.
            </p>
            <Button text="Zoxtro.tech" link="https://www.zoxtro.tech">
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
            <Button text="lorem.com">
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
            <Button text="lorem.com">
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
            <Button text="lorem.com">
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
            <h6>lorem ipsum</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              amet recusandae quidem enim iusto reiciendis voluptate id.
            </p>
          </div>
          <div className="projects__retired__item">
          <h6>lorem ipsum</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              amet recusandae quidem enim iusto reiciendis voluptate id.
            </p>
          </div>
          <div className="projects__retired__item">
          <h6>lorem ipsum</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              amet recusandae quidem enim iusto reiciendis voluptate id.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
