import React from 'react'
import './Contact.css';

function Contact() {

  const mailToEmail = () => {
    window.location.href = "mailto:mzubair1@binghamton.edu";
  }

  return (
    <div className='contact'>
      <h2 className='contact-heading'>
        Hello, let's get in touch
      </h2>
      <div className='contact-body'>
        <p>I'm open to have a chat on any interesting project ideas, technologies you wanna discuss, or just have a chat. My inbox is available for you.</p>
        <p>Currently, I'm looking for full-time opportunities.</p>
      </div>
      <div>
        <button onClick={mailToEmail} className='contact-btn'>
          Let's connect
        </button>
      </div>
    </div>
  )
}

export default Contact