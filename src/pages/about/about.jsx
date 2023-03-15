import "./about.scss";
import mine from "./../../assets/images/mine.webp";
import Hr from "../../components/common/hr/hr";

function About() {
  document.querySelector("title").innerText = "About - Rohit-Gupta";
  return (
    <div className="about">
      <div className="about__image">
        <img src={mine} alt="Me" loading="lazy" data-aos="fade-down" />
      </div>
      <div className="container">
        <p data-aos="fade-up">
          I'm a 19 and a half year old self-taught programmer with a passion for
          design and technology. My experience includes programming languages
          like Python and web technologies such as ReactJS, SASS, and Node.js. I
          specialize in building web and mobile-based applications with a focus
          on simplicity and usability.
        </p>
        <p data-aos="fade-up">
          Currently, I'm a sophomore at NIT Srinagar studying Electrical
          Engineering. Additionally, I have worked on several personal projects,
          including Examtime, an organization tool for college students, Zoxtro,
          an anime merchandise e-commerce platform, and Traway, a bus booking
          platform where I am a CTO and co-founder.
        </p>
        <p data-aos="fade-up">
          In my free time, I enjoy exploring new places, trying new foods, and
          learning about different cultures. I also have a strong interest in
          fitness and regularly work out at the gym.
        </p>
        
        <Hr />
        <div>
          <h2>Work</h2>
          <div className="about__work_list" >
          <a className="about__work_list__item" href="/"  data-aos="fade-right">
              <span className="content__title">Traway</span>
              <div className="contact_detail">
                <p>Co-founder | Cto | Coo</p>
                <p>2022 - &nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>
            </a>
            <a className="about__work_list__item" href="/"  data-aos="fade-left">
              <span className="content__title">SAE India Club</span>
              <div className="contact_detail">
                <p>Full Stack developer</p>
                <p>2022 - &nbsp;&nbsp;&nbsp;&nbsp;</p>

              </div>
            </a>
            <a className="about__work_list__item" href="/" data-aos="fade-right">
              <span className="content__title">Syndicate</span>
              <div className="contact_detail">
                <p>Web Dev Team Member</p>
                <p>2022 - &nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>
            </a>
        
          </div>
        </div>
        <Hr />
        <div data-aos="fade-up">
          <h2>About this site</h2>
          <p className="about_the_site__tagline">
            In case you were wondering this site is:
          </p>
          <ul>
            <li>
            Designed and built on a Mac using <a href="https://www.figma.com/">Figma</a> and <a href="https://www.code.visualstudio.com/">Visual Studio Code</a>.
            </li>
            <li>Planning to shift it to <a href="https://www.nextjs.org/">NextJs</a> and use <a href="https://www.greensock.com/">GSAP</a>.</li>
            <li>Hosted and deployment by <a href="https://www.vercel.com/">Vercel</a> and domain is managed by <a href="https://www.cloudflare.com/">Cloudflare</a>.</li>
            <li>Powered by <a href="https://www.reactjs.org/">ReactJs</a>, Firebase and Rowy.</li>
            <li>Set in the beautiful <a href="https://www.monolisa.dev/">Monolisa</a> typeface.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
