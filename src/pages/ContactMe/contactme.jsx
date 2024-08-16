import React from "react";
import "./contactme.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Let's work together</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nescunt sit
          illo esse commodi.
        </p>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Subject" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="form-row">
            <select>
              <option>Select a service</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>UI/UX Design</option>
            </select>
          </div>
          <textarea placeholder="Type your message here."></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
      <div className="contact-info">
        <div>
          <div className="iconboxes">
            <i className="fas fa-phone"></i>
          </div>
          <span>(+94) 70 127 2099</span>
        </div>
        <div>
          <div className="iconboxes">
            <i className="fas fa-envelope"></i>
          </div>
          <span>veroshakriyajala32@gmail.com</span>
        </div>
        <div>
          <div className="iconboxes">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <span>No 228/4, Rajamaha Vihara Mawatha, Getamanna</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
