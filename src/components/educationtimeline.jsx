import React from "react";
import "./educationtimeline.css";

function EducationTimeline() {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>Bachelor's Degree</h2>
            <p>Computer Science</p>
            <p>XYZ University</p>
            <span>2016 - 2020</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>High School Diploma</h2>
            <p>Science Stream</p>
            <p>ABC High School</p>
            <span>2014 - 2016</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>Middle School</h2>
            <p>XYZ School</p>
            <span>2010 - 2014</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationTimeline;
