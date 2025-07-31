import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Meliodus254" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/collins-kimani-mumo/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Designed & built by <a href="Collins Kimani Mumo" target="_blank" rel="noreferrer">Collins Kimani Mumo</a> with 💜</p>
    </footer>
  );
}

export default Footer;