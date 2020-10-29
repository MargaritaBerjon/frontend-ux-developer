import React from 'react';
import './AboutMe.scss';

function AboutMe(props) {
  return (
    <div className='about-me-container' id='AboutMe'>
      <p>{props.aboutme}</p>
    </div>
  );
}

export default AboutMe;
