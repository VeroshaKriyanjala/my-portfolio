import React, { useState } from "react";
import Skills from "../../components/skills";
import "./Resume.css";

function Resume() {
  const [activeSection, setActiveSection] = useState("Skills");

  const renderContent = () => {
    switch (activeSection) {
      case "Skills":
        return <Skills />;
      case "Education":
        return (
          <div>
            <h2>My education</h2>
            <p>Bachelor of Science in Computer Science - University Name</p>
            <p>High School Diploma - High School Name</p>
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
          onClick={() => setActiveSection("Skills")}
          className={activeSection === "Skills" ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveSection("Education")}
          className={activeSection === "Education" ? "active" : ""}
        >
          Education
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
