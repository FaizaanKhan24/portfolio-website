import React, { useState } from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import resumePDF from '../pdf/Mohammed Faizaan Khan Zubair Khan Resume.pdf';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar(){
    //Opens the resume in a new tab
    const openResume = () =>{
        //const resumeURL = 'https://drive.google.com/file/d/1-jE7Ko8jXQF6GnavCouWgHhYSfuM7zHU/view?usp=sharing';
        setIsOpen(false);
        window.open(resumePDF, '_blank','noopener,noreferrer');
    }

    // Used to display the hamburger menu when in mobile mode
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

  return (
    <div className='navbar'>
        <Link to='/portfolio-website' className='brand-name' onClick={closeMenu}>Faizaan Khan</Link>
        <div className='navbar-icon' onClick={handleClick}>
            {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div>
            <ul className={isOpen ? 'navigation-menu sidebar' : 'navigation-menu'}>
                <li className='navigation-menu-item'>
                    <Link to='/about' className='navigation-menu-links' onClick={closeMenu}> ABOUT</Link>
                </li>
                <li className='navigation-menu-item'>
                    <Link to='/projects' className='navigation-menu-links' onClick={closeMenu}>PROJECTS</Link>
                </li>
                <li className='navigation-menu-item'>
                    <Link to='/contact' className='navigation-menu-links' onClick={closeMenu}>CONTACT ME</Link>
                </li>
                <li className='navigation-menu-item' onClick={openResume}>
                    <div>
                    <button onClick={openResume} className='btn resume-btn' >
                        <span>RESUME</span>
                    </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar