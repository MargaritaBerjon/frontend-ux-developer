import React from 'react';
import './AboutMe.scss';


function AboutMe(props) {
  return (
    <div className='about-me-container'>
      <p>{props.aboutme}</p>
    </div>
  );
}

export default AboutMe;
