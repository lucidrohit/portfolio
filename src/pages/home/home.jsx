import "./home.scss";
import Hr from "../../components/common/hr/hr";
import Button from "../../components/common/button/button";
import IconLink from "../../components/common/iconLink/iconLink";
import githubLogo from "./../../assets/images/social/github.svg";
import twitterLogo from "./../../assets/images/social/twitter.svg";
import instagramLogo from "./../../assets/images/social/instagram.svg";
import linkedinLogo from "./../../assets/images/social/linkedin.svg";
import Card from "../../components/card/card";

import zoxtro from "./../../assets/images/zoxtro.png";
import xamtime from "./../../assets/images/xamtime.png";
import Tag from "../../components/tag/tag";



function Home() {
  document.querySelector("title").innerText = "Rohit-Gupta - Web Developer";
  return (
    <div className="home">
      <h1 className="home__heading" data-aos="fade-right">
        Computer Science Enthusiast, trapped in learning-developing loop.
      </h1>
      <div className="home__intro" data-aos="fade-up">
        <p>
          I’m Rohit Gupta, a India based web-developer with over three years of
          experience. I specialise in full-stack web-based technologies and
          applications with a focus on simplicity & usability.
        </p>
        <p>
          I’m currently working at <a href="https://sae-website-five.vercel.app/">SAE Club of Nit Srinagar</a> as
          web-developer. Before that, I worked at{" "}
          <a href="https://www.zoxtro.tech/">Zoxtro.tech</a> where I helped
          shape the future of website and the business to thrive online. I also
          build class-material-manager{" "}
          <a href="https://xamtime.cf">Xamtime.cf</a> and a python game{" "}
          <a href="https://www.youtube.com/watch?v=ziggFBmAjKg">Tic-Tac-Toe</a>.
        </p>
      </div>
      <div className="home__links_list">
        <ul className="home__links">
          <li>
            <IconLink
              text="twitter"
              link="https://twitter.com/lucidrohit"
              logo={twitterLogo}
            />
          </li>
          <li>
            <IconLink
              text="instagram"
              link="https://www.instagram.com/radiant.rohit/"
              logo={instagramLogo}
            />
          </li>
          <li>
            <IconLink
              text="linkedin"
              link="https://www.linkedin.com/in/lucidrohit"
              logo={linkedinLogo}
            />
          </li>
          <li>
            <IconLink
              text="github"
              link="https://www.github.com/lucidrohit"
              logo={githubLogo}
            />
          </li>
        </ul>
        <Button link={"mailto:lucidrohit@gmail.com"} text={"Email me"} />
      </div>
      <Hr />
      <div className="home__projects">
        <h2>Featured projects</h2>
        <p>A collection of some side projects that have shipped recently.</p>
        <div className="home__projects_featured">
          <Card
            projectLink="https://www.zoxtro.tech"
            logo={zoxtro}
            heading="Zoxtro.tech"
            content="A landing page for an Embroidery Anime merchandise which include a basic show case of the product and a contact form."
            data-aos="fade-right"
          />
          <Card
            projectLink="https://www.xamtime.cf"
            logo={xamtime}
            heading="Xamtime"
            content="A standalone organised solution for the college student to manage all material like notes, pyqs, syllabus & class-links."
            data-aos="fade-right"
          />
        </div>
      </div>
      <Hr />

      <div className="home__skills" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Here are some of my skills and tools with which I have worked.</p>
        <div className="home__skils__tags">
          <Tag skill="Python" />
          <Tag skill="Tkinter" />
          <Tag skill="Flask" />
          <Tag skill="git & github" />
          <Tag skill="C & C++" />
          <Tag skill="Html" />
          <Tag skill="Css" />
          <Tag skill="Sass/Scss" />
          <Tag skill="Tailwind & Bootstrap" />
          <Tag skill="Javascript" />
          <Tag skill="ReactJs" />
          <Tag skill="Firebase" />
          <Tag skill="ExpressJs" />
          <Tag skill="SQL" />
          <Tag skill="MonogoDb" />
          <Tag skill="RESTfull APIs" />
          <Tag skill="ejs" />
        </div>
      </div>
    </div>
  );
}

export default Home;
