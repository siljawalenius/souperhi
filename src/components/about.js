import React from "react";
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="frame">
          <p>
            SouperHi was inspired by the lovely people of the SuperHi
            accountability club, and a deep and unending love of soup.
          </p>
          <p>want to add a soup?</p>
          <a href = "#">click here</a>
        </div>
      </div>
    );
  }
}

export default About;
