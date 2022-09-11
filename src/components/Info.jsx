import React from 'react';
import Photo from '../assets/photo.jpg'

export default function Info() {
  return (
      <div className="info-container">
        <div className='img-container'>
          <img src={Photo} alt="a photo of Brandon" className="photo"/>
        </div>
        <div className="info-text-container">
          <div className="info-text">
             <p className='name-text'>Brandon Yee</p>
             <p className="job-title">Aspiring Developer</p>
             <a href="https://github.com/xyzuka" className='website'>github.com/xyzuka/</a>
          </div>
        </div>
        <div className="info-buttons">
          <button className="email-button" onClick={() => window.location = 'mailto:yeebrandon@outlook.com'}>
            <span className="email-icon"></span><a href = "mailto:yeebrandon@outlook.com">Email</a><span></span>
          </button>
          <button className="linkedin-button" onClick={() => window.location = 'https://www.linkedin.com/in/brandonskyee/'}>
            <span className="linkedin-icon"></span><a href = "https://www.linkedin.com/in/brandonskyee/">LinkedIn</a><span></span>
          </button>
        </div>
      </div>
  );
}