import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.ibb.co/1GwngNS7/hero-portrait.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Meliodus254/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/collins-kimani-mumo/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Collins Kimani</h1>
          <p>Data Scientist & Statistician</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Meliodus254" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/collins-kimani-mumo/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;