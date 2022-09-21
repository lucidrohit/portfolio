import "./about.scss";
import mine from "./../../assets/images/mine.webp";
import Hr from "../../components/common/hr/hr";

function About() {
  document.querySelector("title").innerText = "About - Rohit-Gupta";
  return (
    <div className="about">
      <div className="about__image">
        <img src={mine} alt="Me" loading="lazy" />
      </div>
      <div className="container">
        <p>
          I’m Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Obcaecati perspiciatis officiis, rem error quod quam ut consectetur
          rerum inventore architecto soluta sed numquam at, beatae molestias.
          Non rerum inventore maxime ducimus perferendis vero voluptatibus porro
          consequuntur fugit tenetur reiciendis provident, consectetur officia.
          Aliquam neque commodi illo corporis maiores omnis voluptatibus dolorem
          totam laboriosam sapiente. Ut perspiciatis qui culpa mollitia unde
          quos sapiente necessitatibus dolorum
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          doloremque dolorum similique illo consectetur sequi deserunt sint fuga
          blanditiis perspiciatis possimus explicabo aut vitae et quae
          necessitatibus non aperiam accusamus expedita, sapiente id? Nam, ipsum
          assumenda? Voluptatum, sapiente ut! Dolores aut mollitia voluptatem
          iusto pariatur repudiandae tempore, quo ipsam blanditiis consequatur
          maxime sequi itaque vitae molestias officiis excepturi cumque aperiam
          quia architecto, quos eaque fuga distinctio! Eius placeat, eos minima
          veritatis deleniti id cupiditate velit!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
          in! Ex sint repellendus itaque quod eos, magni, fugiat aliquam, vero
          et maxime modi cum! Odit.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          deleniti ullam nisi consectetur eaque nihil blanditiis magni ut,
          distinctio facilis, tempora voluptas minima eveniet sit inventore
          sapiente similique repellat expedita id omnis assumenda hic suscipit
          nemo? Rem dolorem eligendi repellendus.
        </p>
        <p>
          Outside of work my hobbies include exploring new coffee places,
          playing video games, watching sci-fi shows & movies, tinkering with
          technology and taking too many photos of my cat, Pixel.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
          consectetur unde numquam praesentium exercitationem perferendis modi
          fugit provident iure, nulla sint voluptatem doloremque corporis,
          tempore saepe illum veniam eveniet suscipit quae debitis! Porro nihil
          facilis recusandae! Ipsam error beatae hic?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, minima?
          </li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          <li>Powered by lorem</li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam, unde.
          </li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
