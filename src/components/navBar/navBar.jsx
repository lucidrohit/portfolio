import "./navBar.scss";
import { Fragment } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const activeClass = location.pathname.slice(1, location.pathname.length);

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

  if (darkThemeMq.matches) {
    document.querySelector("html").classList.add("darkTheme");
  } else {
    document.querySelector("html").classList.add("lightTheme");
  }

  return (
    <Fragment>
      <div className="navBar">
        <div className="navBar__logo">
          <Link to="/" className="navBar__logo-link" aria-label="singature">
            {" "}
          </Link>
        </div>
        <nav className="navBar__main_menu">
          <Link
            to="/"
            className={
              "navBar__main_menu__item " + (activeClass === "" ? "active" : "")
            }
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className={
              "navBar__main_menu__item " +
              (activeClass.slice(0, 5) === "blogs" ? "active" : "")
            }
          >
            Blogs
          </Link>
          <Link
            to="/projects"
            className={
              "navBar__main_menu__item " +
              (activeClass === "projects" ? "active" : "")
            }
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={
              "navBar__main_menu__item " +
              (activeClass === "about" ? "active" : "")
            }
          >
            About
          </Link>
        </nav>
      </div>
      <div className="mainContent">
        <Outlet />
      </div>
    </Fragment>
  );
}

export default NavBar;
