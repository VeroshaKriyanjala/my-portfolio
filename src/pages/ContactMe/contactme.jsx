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
        <form
          action="https://send.pageclip.co/nQfJqWkJIOeVjd297F41qt8FBkAYBez7/contact-me"
          class="pageclip-form"
          method="post"
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-row">
            <input type="text" name="subject" placeholder="Subject" />
            <input type="text" name="phone number" placeholder="Phone Number" />
          </div>
          <textarea
            name="message"
            placeholder="Type your message here."
          ></textarea>
          <button name="submit" class="pageclip-form__submit" type="submit">
            Send message
          </button>
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
