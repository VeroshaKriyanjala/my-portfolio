import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="brand">
          <h1>...</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/home">Homes</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contactme" className="contact-button">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
