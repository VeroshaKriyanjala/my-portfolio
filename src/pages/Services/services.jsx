import React from "react";
import "./services.css";

function Services() {
  return (
    <div className="services-container">
      <div className="service-item">
        <div className="service-number">01</div>
        <div className="service-content">
          <h2>Web Development</h2>
          <p>
            I excel in creating dynamic web applications using HTML, CSS, MySQL,
            JavaScript, React, Node.js, and Python, delivering seamless and
            responsive user experiences.
          </p>
        </div>
        <div className="service-icon">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>

      <div className="service-item">
        <div className="service-number">02</div>
        <div className="service-content">
          <h2>App Development</h2>
          <p>
            I specialize in crafting robust and user-friendly mobile
            applications using Flutter. From design to deployment, I ensure
            seamless performance and a great user experience across all
            platforms.
          </p>
        </div>
        <div className="service-icon">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>

      <div className="service-item">
        <div className="service-number">03</div>
        <div className="service-content">
          <h2>UI/UX Design</h2>
          <p>
            I create dynamic web and mobile app designs using Figma, ensuring
            visually appealing and user-friendly interfaces across multiple
            platforms. This highlights your design expertise with Figma.
          </p>
        </div>
        <div className="service-icon active">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>

      {/* <div className="service-item">
        <div className="service-number">04</div>
        <div className="service-content">
          <h2>SEO</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sclerisque
            consequat, faucibus et, et.
          </p>
        </div>
        <div className="service-icon">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div> */}
    </div>
  );
}

export default Services;
