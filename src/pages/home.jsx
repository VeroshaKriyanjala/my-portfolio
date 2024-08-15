import React, { Component } from "react";
import "./home.css";
import Verosha from "../assets/verosha.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <dev clasName="home-main">
        <dev className="home-left">
          <h2 className="cse">Computer Science & Engineering Undergratuate</h2>
          <h2 className="hello">Hello I'm</h2>
          <h1 className="name">Verosha Kriyanjala</h1>
          <h6 className="home-desc">
            I excel at crafting elegent digital experiencesand I am proficient
            in variousprogramming languages and technologies.
          </h6>
          <div>
            <button className="home-button">DOWNLOAD CV</button>
            <button className="home-button">Github</button>
            <button className="home-button">Linkedin</button>
            <button className="home-button">Youtube</button>
            <button className="home-button">Twitter</button>
          </div>
        </dev>
        <dev className="home-right">
          <img className="img" src={Verosha} alt="pic" />
        </dev>
      </dev>
    );
  }
}

export default Home;
