import React from 'react';
import '../App.css'
import twitterIcon from '../assets/Twitter-Icon.png'
import facebookIcon from '../assets/Facebook-Icon.png'
import instagramIcon from '../assets/Instagram-Icon.png'
import githubIcon from '../assets/Github-Icon.png'

export default function Footer() {
  return (
    <div className='footer-container'>
      <img src={twitterIcon} alt="twitter-icon" className='icon'/>
      <img src={facebookIcon} alt="facebook-icon" className='icon'/>
      <img src={instagramIcon} alt="facebook-icon" className='icon'/>
      <img src={githubIcon} alt="facebook-icon" className='icon'/>
    </div>

  )
}