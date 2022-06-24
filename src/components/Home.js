import './Home.css';
import React from 'react'

function Home() {
  return (
    <div className='home-container'>
        <div className='greetings'>
            Hey! My name is
        </div>
        <div className='name'>
            Faizaan Khan.
        </div>
        <div className='description'>
            {/* I make apps for web and mobile. */}
            I'm a Software Engineer.
        </div>
    </div>
  )
}

export default Home