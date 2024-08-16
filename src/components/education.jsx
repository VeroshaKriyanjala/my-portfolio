import React from "react";
import "./education.css";
import Moratuwa from "../assets/moratuwa.jpg";

function Education() {
  return (
    <div className="education-container">
      <div>
        <img src={Moratuwa} alt="" />
      </div>
      <div className="uni-data">
        <h1>University of Moratuwa</h1>
        <h4>Bachelor of Science in Computer Science and Engineering</h4>
        <p>2022 - 2026</p>
      </div>
    </div>
  );
}

export default Education;
