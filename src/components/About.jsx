import React from 'react';

export default function About() {
  return (
    <div className='about-content-container'>
      <div className="about-header">
        <h2 className='about-header-text'>About</h2>
        <p className='about-content'>I'm an aspiring developer with an interest in solving problems and building tools to solve these problems. I love learning and improving myself, always looking for new chances to learn and level up!</p>
      </div>
      <div className="interests-header">
        <h2 className='interests-header-text'>Interests</h2>
        <p className='interests-content'>Fitness Enthusiast. Avid Learner. Reader. Finance Geek. Dog Lover.
        </p>
        <p className='interests-content'>Note: The buttons below do not work, they are for aesthetic purposes.</p>
      </div>
    </div>
  )
}