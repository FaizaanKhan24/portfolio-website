import './About.css';
import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaAndroid,
  FaWindows,
  FaDocker,
  FaAppStoreIos,
} from 'react-icons/fa';
import { SiDjango, SiCsharp, SiXamarin, SiFlask } from 'react-icons/si';
import { DiDotnet,  } from 'react-icons/di';

function About(){
  return (
    <div className='about-container'>
      <div className='technologies'>
        <h3>I have worked on</h3>
        <IconContext.Provider value={{className:'tech-icons'}}>
          <div className='technologies-list'>
            {/* Web */}
            <div>
              <FaReact />
              <FaJs />
              <FaHtml5 />
              <FaCss3Alt />
            </div>
            {/* Mobile */}
            <div>
              <SiXamarin />
              <FaAppStoreIos />
              <FaAndroid />
              <FaWindows />
            </div>
            {/* Backend */}
            <div>
              <FaDatabase />
              <FaDocker />
              <DiDotnet />
              <SiDjango />
              <SiFlask />
            </div>
            {/* Programming Languages */}
            <div>
              <FaPython />
              <SiCsharp />
            </div>
          </div>
        </IconContext.Provider>
      </div>
      <div className='about-me'>
        <div>
        <p>Hello, my name is <span className='name-color'><b>Faizaan Khan</b></span>. I'm a student at Binghamton University, New York. </p>
        <p>I find it satisfying to code up UI/UX designs into web and mobile application. It brings pleasure to my eyes. Everyday I wake up trying to be an aesthetic-head, if that is even a thing. LOL (No offense potterheads)
        Talking about Front-end, I have also got my keyboard dirty working on Databases and APIs for my projects.</p>
        <p>I have worked as a Full-Stack Mobile developer at Syncfusion, India. The idea of having the ability to build products that help smoothen our day to day life is why I do what I do. I have constantly tired to expand my knowledge pool and improve myself as a developer and person. This journey has brought me here. Currently, I'm looking for a full-time opportunity.</p>
        </div>
      </div>
    </div>
  )
}

export default About