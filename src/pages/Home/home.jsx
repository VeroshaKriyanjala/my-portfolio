import React from "react";
import "./home.css";

import profileImage from "../../assets/verosha.jpg";

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h2 className="role">Software Developer</h2>
        <h1 className="intro">
          Hello I'm <span className="highlight">Verosha Kriyanjala</span>
        </h1>
        <p className="description">
          I excel at crafting elegant digital experiences and I am proficient in
          various programming languages and technologies.
        </p>
        <button className="download-cv">Download CV</button>
        <div className="social-links">
          <a href="#linkedin">LinkedIn</a>
          <a href="#github">GitHub</a>
          <a href="#twitter">Twitter</a>
          <a href="#email">Email</a>
        </div>
      </header>
      <div className="profile-image">
        <img src={profileImage} alt="Verosha Kriyanjala" />
      </div>
      {/* <div className="stats">
        <div className="stat-item">
          <h3>12</h3>
          <p>Years of experience</p>
        </div>
        <div className="stat-item">
          <h3>26</h3>
          <p>Projects completed</p>
        </div>
        <div className="stat-item">
          <h3>8</h3>
          <p>Technologies mastered</p>
        </div>
        <div className="stat-item">
          <h3>500</h3>
          <p>Code commits</p>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
