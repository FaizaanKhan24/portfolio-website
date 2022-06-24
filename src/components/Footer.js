import React from 'react';
import './Footer.css';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const openGitHub = () => {
    const GitHubURL = 'https://github.com/FaizaanKhan24';
    window.open(GitHubURL);
  }

  const openLinkedIn = () => {
    const LinkedInURL = 'https://www.linkedin.com/in/mohammedfaizaankhan/';
    window.open(LinkedInURL);
  }

  return (
    <div className='footer'>
        <div className='footer-left'>
        <p>Designed & built by <span className='name-color'>Faizaan Khan</span></p>
        </div>
        <div className='footer-right'>
          <IconContext.Provider value={{className:'brandIcon'}}>
            <div className='icon'>
              <FaGithub onClick={openGitHub}/>
              <FaLinkedinIn onClick={openLinkedIn}/>
            </div>
          </IconContext.Provider>
        </div>
    </div>
  )
}

export default Footer