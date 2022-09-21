import "./about.scss";
import mine from "./../../assets/images/mine.webp";
import Hr from "../../components/common/hr/hr";

function About() {
  document.querySelector("title").innerText = "About - Rohit-Gupta"
  return (
    <div className="about">
      <div className="about__image">
        <img src={mine} alt="Me" loading="lazy"/>
      </div>
      <div className="container">
        <p>
          I’m Dale a UK based product designer with over ten years of
          experience. I specialise in interface design for mobile and web-based
          applications with a focus on simplicity & usability. I’m passionate
          about design and technology and how the two can converge to create
          experiences for good.
        </p>
        <p>
          I’m currently working at WP Engine on some of the worlds best
          WordPress products. Before WP Engine I worked at BaseKit where I
          designed web applications like the worlds first fully functional
          mobile website builder, a commerce platform, dashboard, mobile
          application, and an online booking system.
        </p>
        <p>
          Before BaseKit I spent some time working for web agencies designing
          everything from one-page websites to native mobile applications. Over
          the years I’ve been lucky enough to work with companies like
          Nationwide, BP, Telefónica, Apple & Amazon.
        </p>
        <p>
          You can also find me working on my own projects: Design Vault, an
          online library of UX/UI patterns and inspiration from real products,
          and Does.Design, an inclusive community for designers of all
          backgrounds and skill levels.
        </p>
        <p>
          Outside of work my hobbies include exploring new coffee places,
          playing video games, watching sci-fi shows & movies, tinkering with
          technology and taking too many photos of my cat, Pixel.
        </p>
        <p>
          You can follow along with my work, personal projects and occasional
          insights into my life on Twitter and Instagram.
        </p>
        <Hr />
        <h2>Work</h2>
        <div className="about__work_list">
          <a className="about__work_list__item" href="/">
            <span className="content__title">WP Engine</span>
            <div className="contact_detail">
              <p>Senior Product Designer</p>
              <p>2021-2022</p>
            </div>
          </a>
          <a className="about__work_list__item" href="/">
            <span className="content__title">WP Engine</span>
            <div className="contact_detail">
              <p>Senior Product Designer</p>
              <p>2021-2022</p>
            </div>
          </a>
          <a className="about__work_list__item" href="/">
            <span className="content__title">WP Engine</span>
            <div className="contact_detail">
              <p>Senior Product Designer</p>
              <p>2021-2022</p>
            </div>
          </a>
          <a className="about__work_list__item" href="/">
            <span className="content__title">WP Engine</span>
            <div className="contact_detail">
              <p>Senior Product Designer</p>
              <p>2021-2022</p>
            </div>
          </a>
          <a className="about__work_list__item" href="/">
            <span className="content__title">WP Engine</span>
            <div className="contact_detail">
              <p>Senior Product Designer</p>
              <p>2021-2022</p>
            </div>
          </a>
        </div>
        <Hr />
        <h2>About this site</h2>
        <p className="about_the_site__tagline">
          In case you were wondering this site is:
        </p>
        <ul>
          <li>
            Designed and built on a Mac using Figma and Visual Studio Code
          </li>
          <li>Hosted by Digital Ocean with deployment via RunCloud</li>
          <li>Powered by KirbyCMS</li>
          <li>Tracking data using Plausible, privacy focussed analytics</li>
          <li>Set in the beautiful Monolisa typeface</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
