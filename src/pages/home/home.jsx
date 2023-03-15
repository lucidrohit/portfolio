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
import traway from "./../../assets/images/traway.png";
import Tag from "../../components/tag/tag";

function Home() {
  document.querySelector("title").innerText = "Rohit-Gupta - Web Developer";
  const skills = [
    "Html5",
    "Css3",
    "Tailwind & Bootstrap",
    "Sass/Scss",
    "Javascript(es6)",
    "ReactJs",
    "Redux",
    "Firebase",
    "GraphQl",
    "ExpressJs",
    "RESTfull APIs",
    "server side templating(ejs)",
    "SQL",
    "MonogoDb",
    "git & github",
    "C & C++",
    "Python",
    "Tkinter",
    "Flask",
  ];
  return (
    <div className="home">
      <h1 className="home__heading" data-aos="fade-right">
        Computer Science Enthusiast, trapped in learning-developing loop.
      </h1>
      <div className="home__intro" data-aos="fade-up">
        <p>
          I’m Rohit Gupta, a India based web-developer with over three years of
          experience. I'm a 19 and a half year old self-taught programmer with
          experience in Python (Flask, Tkinter), C & CPP, web technologies such
          as ReactJS, SASS, Redux, MongoDB, SQL, Node.js, Express.js, RESTful
          and GraphQL APIs, and computer networks. I am currently a sophomore at
          NIT Srinagar studying Electrical Engineering.
        </p>
        <p>
          I have worked on several personal projects such as{" "}
          <a href="https://examtime.onrender.com/">Xamtime.cf</a>, an organization
          tool for college students to manage their study materials,{" "}
          <a href="https://www.zoxtro.tech/">Zoxtro.tech</a>, an anime
          merchandise e-commerce platform, and <a href="https://traway.live">Traway.live</a>, a bus booking platform
          where I am a CTO and co-founder. I have also worked on the website for
          the college club{" "}
          <a href="https://saeindia.vercel.app/">SAE India</a>.
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
            projectLink="https://www.traway.live"
            logo={traway}
            heading="Traway.live"
            content="Experience hassle-free bus travel with Traway - a responsive PWA with seamless booking, payment, and personalized services."
            data-aos="fade-right"
          />
          <Card
            projectLink="https://www.zoxtro.tech"
            logo={zoxtro}
            heading="Zoxtro.tech"
            content="Unleash your inner otaku with Zoxtro - a sleek ecommerce platform with seamless search, checkout, and personalized recommendations."
            data-aos="fade-right"
          />
          <Card
            projectLink="https://examtime.onrender.com/"
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
          {skills.map((skill) => (
            <Tag key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
