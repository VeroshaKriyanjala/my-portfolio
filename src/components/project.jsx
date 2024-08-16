import React from "react";
import "./project.css";
import image from "../assets/images.jpeg";

function Project() {
  return (
    <div className="work-container">
      <div className="work-details">
        <div className="work-number-outline">03</div>
        <h2>Frontend Project</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sclerisque
          consequat, faucibus et, et.
        </p>
        <p className="technologies">Next.js, Tailwind.css</p>
        <div className="work-links">
          {/* <a className="external-link">
            <i className="fas fa-arrow-right"></i>
          </a>
          <a className="github-link">
            <i className="fab fa-github"></i>
          </a> */}
        </div>
      </div>
      <div className="work-image">
        <img src={image} alt="Project Screenshot" />
        <div className="carousel-controls">
          <button className="prev">&#8249;</button>
          <button className="next">&#8250;</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
