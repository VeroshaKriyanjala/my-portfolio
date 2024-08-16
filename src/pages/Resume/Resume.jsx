import React, { useState } from "react";

function Resume() {
  const [activeSection, setActiveSection] = useState("Experience");

  const renderContent = () => {
    switch (activeSection) {
      case "Experience":
        return (
          <div>
            <h2>My experience</h2>
            <p>2022 - Present: Full Stack Developer at Tech Solutions Inc.</p>
            <p>2021 - 2022: Freelance Web Developer</p>
            <p>2020 - 2021: Front-End Developer Intern at Web Design Studio</p>
            <p>2019 - 2020: Teaching Assistant at Tech Academy</p>
          </div>
        );
      case "Education":
        return (
          <div>
            <h2>My education</h2>
            <p>Bachelor of Science in Computer Science - University Name</p>
            <p>High School Diploma - High School Name</p>
          </div>
        );
      case "Skills":
        return (
          <div>
            <h2>My skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
        );
      case "AboutMe":
      default:
        return (
          <div>
            <h2>About me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Name: Luke Coleman</p>
            <p>Experience: 12+ Years</p>
            <p>Nationality: American</p>
            <p>Freelance: Available</p>
          </div>
        );
    }
  };

  return (
    <div className="resume-container">
      <div className="left-menu">
        <button
          onClick={() => setActiveSection("Experience")}
          className={activeSection === "Experience" ? "active" : ""}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveSection("Education")}
          className={activeSection === "Education" ? "active" : ""}
        >
          Education
        </button>
        <button
          onClick={() => setActiveSection("Skills")}
          className={activeSection === "Skills" ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveSection("AboutMe")}
          className={activeSection === "AboutMe" ? "active" : ""}
        >
          About me
        </button>
      </div>
      <div className="right-content">{renderContent()}</div>
    </div>
  );
}

export default Resume;
