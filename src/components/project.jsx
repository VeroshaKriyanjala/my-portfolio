import React from "react";
import "./project.css";

function Project({ project }) {
  return (
    <div className="work-container">
      <div className="work-details">
        <div className="work-number-outline"></div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p className="technologies">{project.technologies}</p>
        <div className="work-links"></div>
      </div>
      <div className="work-image">
        <img src={project.image} alt="Project Screenshot" />
      </div>
    </div>
  );
}

export default Project;
