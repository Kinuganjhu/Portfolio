import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../Styles/Home.scss";
import lightIcon from "../Icons/light.svg";
import darkIcon from "../Icons/dark.svg";
import logo from "../Images/Profile.png";
import Education from '../Pages/Education.js'
import Social from '../Pages/Social.js'
import Skills from '../Pages/Skills.js'
import Project from '../Pages/Project.js'
const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
    <Container className={`home-container ${darkMode ? "dark" : "light"}`}>
      <img src={logo} alt="Profile" className="profile" />

      <div className="text-content">
        <h2>Hi, I'm Kinu Ganjhu</h2>
        <p>Aspiring Frontend Developer | Open to New Opportunities & Internships</p>
        <a 
          href="https://drive.google.com/file/d/15WeIKakF3cHZ8H-0Q3BkB6buNqz18tCP/view?usp=drivesdk" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cv-button"
        >
          Download CV
        </a>
      </div>

      <img
        src={darkMode ? lightIcon : darkIcon}
        onClick={handleChange}
        className="icon"
        alt="Toggle Mode"
      />
      <Social/>
      <Education/>
      <Skills/>
      <Project/>
    </Container>
    
    </>
  );
};

export default Home;
