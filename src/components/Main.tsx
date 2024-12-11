import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatarImage from '../assets/images/bakul begum mini image.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={avatarImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/bakolbegum" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://github.com/bakolbegum" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Bakul Begum</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/bakolbegum" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://github.com/bakolbegum" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;