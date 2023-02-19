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
import displayPic  from '../images/Portfolio pic Medium.jpeg'

function About(){
  document.title = "Faizaan Khan | About"
  return (
    <div className='about-container'>
      <div className='about-left'>
        <img src={displayPic} className='display-pic' alt='Portrait'/>
      </div>
      <div className='about-me'>
      <div>
          {/* First Paragraph */}
           <p>Hello, my name is <span className='name-color'><b>Faizaan Khan</b></span>. I am a student at Binghamton University, New York. </p>
        
          {/* Second Paragraph */}
          <p>Everyone has their “Hello world” moment. Mine was when I developed a tic-tac-toe application in Python by copying code from someone else’s GitHub and proudly publishing it as my repository. Am I guilty? In my defense, it's where it all started. Now, I make websites and mobile applications.</p>
          
          {/* Third Paragraph */}
          <p>My first real-life product experience was working on an iOS application using Xamarin Forms. After that, I worked on different projects. My team entrusted me with developing the UI/UX for an application from scratch. I got the following learning and experience:</p>
          
          {/* Experience List */}
          <div>
            <ul>
              <li>Working with iOS and Android SDKs</li>
              <li>How to approach a problem</li>
              <li>Debugging bugs and issues</li>
              <li>Handling deadlines</li>
              <li>Importance of testing</li>
              <li>Developing an application with the perspective that everything can go wrong and break the application</li>
            </ul>
          </div>
          
          <br/>
        
          {/* Fourth Paragraph */}
          <p>Apart from mobile development experience, I have also worked on web applications. I am confident in my full-stack development skills and would wanna become stronger by working on more diverse projects and stacks.</p>
        
          {/* Fifth Paragraph */}
          <p>Since Fall 2021, I have been pursuing my Masters in Computer Science at Binghamton University. I have completed the following coursework:</p>

          {/* Course List */}
          <div>
            <ul>
              <li>Operating Systems</li>
              <li>Programming Languages</li>
              <li>Machine Learning</li>
              <li>Cloud Computing</li>
              <li>Database Systems</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Computer Architecture</li>
              <li>Design Patterns</li>
              <li>Introduction to Data Mining</li>
            </ul>
          </div>
          <br/>

          {/* Final Paragraph */}
          <p>Currently, I am looking for a full-time opportunity in the field of Software Engineering.</p>
        </div>
      </div>
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
    </div>
  )
}

export default About