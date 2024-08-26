import React from "react";

import profileImage from "../assets/verosha.jpg";

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="intro">
          <span>Hello I'm </span>
          <span className="highlight">Verosha Kriyanjala</span>
        </h1>
        <h2 className="role">Computer Science & Engineering Undergraduate</h2>
        <p className="description">
          A dedicated Computer Science & Engineering student with a strong
          foundation in programming and a keen interest in software development.
        </p>
        <div className="social-buttons">
          <button className="download-cv">Download CV</button>
          <div className="social-links">
            <a
              href="https://github.com/VeroshaKriyanjala"
              target="_blank"
              rel="nooperner noreferrer"
            >
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/verosha-kriyanjala"
              target="_blank"
              rel="nooperner noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com/verosha.kriyanjala"
              target="_blank"
              rel="nooperner noreferrer"
            >
              <i className="fa-brands fa-facebook fa-2xl"></i>
            </a>
            <a
              href="mailto:veroshakeiuanjala32@gmail.com"
              target="_blank"
              rel="nooperner noreferrer"
            >
              <i className="fa-solid fa-envelope fa-2xl"></i>
            </a>
          </div>
        </div>
      </header>
      <div className="profile-image">
        <img src={profileImage} alt="Verosha Kriyanjala" />
      </div>
    </div>
  );
}

export default Home;
