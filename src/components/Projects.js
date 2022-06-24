import React from 'react'
import './Projects.css';
import { IconContext } from 'react-icons';
import { FaGithub, FaYoutube } from 'react-icons/fa';

function Projects() {

  const projectsDetails = [
    {
      name: 'Mobile Inventory Managment',
      description: 'A Inventory Managment mobile application that keeps track of all the sales and inventory of the products.',
      link: 'https://github.com/FaizaanKhan24/KS-Inventory',
      youTubeLink: '',
    },
    {
      name: 'IT Bug Ticketing and Managment System',
      description: 'A web application with login credential which helps to add tickets for bug and manage the tickets within the organization.',
      link: 'https://github.com/FaizaanKhan24/BugTracker',
      youTubeLink: 'https://www.youtube.com/watch?v=bczVH0IxPjg&t=29s',
    },
    {
      name: 'Pizza Ordering Web Application',
      description: 'The application lets user register to order custom pizza. The orders can be managed and viewed by the admin.',
      link: 'https://github.com/FaizaanKhan24/PizzaOrderingApp',
      youTubeLink: 'https://www.youtube.com/watch?v=fz3sSc_QcrI',
    },
    {
      name: 'Chat Application',
      description: 'This real-time chat application lets you create multiple-channels and users.',
      link: 'https://github.com/FaizaanKhan24/MessagingWebApp',
      youTubeLink: 'https://www.youtube.com/watch?v=SQNdxWlHWcA',
    },
    {
      name: 'Book Review Website',
      description: 'The application uses GoodReads API to show all the books, the user can also add their comments and reviews.',
      link: 'https://github.com/FaizaanKhan24/BookReviewWebsite',
      youTubeLink: 'https://www.youtube.com/watch?v=GQWuLMyx-5Q',
    },
    {
      name: 'Sudoku Solver',
      description: 'A ReactJS application that has pre-defined sudoku boards. It solves the puzzles with the help of backtracking algorithm.',
      link: 'https://github.com/FaizaanKhan24/SudokuSolver',
      youTubeLink: '',
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className='project-details' key={index}>
        <div className='project-heading'>
          {card.name}
        </div>
        <div className='project-description'>
          {card.description}
        </div>
        <div className='icon-footer'>
        <IconContext.Provider value={{className:'git-Icon'}}>
          <FaGithub onClick={() => {
            window.open(card.link);
          }} />
          {card.youTubeLink.trim() !== '' && <FaYoutube onClick={() => {
            window.open(card.youTubeLink);
          }} />}
        </IconContext.Provider>
        </div>
      </div>
    )
  }

  return (
    <div className='projects-container'>
      <div className='projectHeading'>
        <h2>PROJECTS</h2>
        </div>

      <div className='projects'>
        {projectsDetails.map(renderCard)}
      </div>
    </div>
  )
}

export default Projects