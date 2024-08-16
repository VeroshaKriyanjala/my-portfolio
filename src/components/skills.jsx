import React from "react";
import "./skills.css";

import git from "../assets/git.png";
import python from "../assets/python.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import docker from "../assets/docker.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodejs.png";
import flutter from "../assets/flutter.png";

function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-section-row">
        <div className="skill-item">
          <img src={html} alt="html"></img>
        </div>
        <div className="skill-item">
          <img src={css} alt="css"></img>
        </div>
        <div className="skill-item">
          <img src={js} alt="js"></img>
        </div>
        <div className="skill-item">
          <img src={git} alt="git"></img>
        </div>
        <div className="skill-item">
          <img src={nodejs} alt="nodejs"></img>
        </div>
      </div>
      <div className="skills-section-row">
        <div className="skill-item">
          <img src={react} alt="react"></img>
        </div>
        <div className="skill-item">
          <img src={mysql} alt="mysql"></img>
        </div>
        <div className="skill-item">
          <img src={python} alt="python"></img>
        </div>
        <div className="skill-item">
          <img src={docker} alt="docker"></img>
        </div>
        <div className="skill-item">
          <img src={flutter} alt="flutter"></img>
        </div>
      </div>
    </div>
  );
}

export default Skills;
