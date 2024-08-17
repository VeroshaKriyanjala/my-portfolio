import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "/home", // Set default active link
    };
  }

  setActiveLink = (link) => {
    this.setState({ activeLink: link });
  };

  render() {
    const { activeLink } = this.state;

    return (
      <nav className="navbar">
        <div className="brand">
          <h1>...</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link
              to="/home"
              className={activeLink === "/home" ? "active" : ""}
              onClick={() => this.setActiveLink("/home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={activeLink === "/services" ? "active" : ""}
              onClick={() => this.setActiveLink("/services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={activeLink === "/resume" ? "active" : ""}
              onClick={() => this.setActiveLink("/resume")}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={activeLink === "/work" ? "active" : ""}
              onClick={() => this.setActiveLink("/work")}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/contactme"
              className={`contact-button ${
                activeLink === "/contactme" ? "active" : ""
              }`}
              onClick={() => this.setActiveLink("/contactme")}
            >
              <span>Contact Me</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
