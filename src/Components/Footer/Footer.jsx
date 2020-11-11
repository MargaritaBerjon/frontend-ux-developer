import React from 'react';
import './Footer.scss';

function Footer(props) {
  return (
    <footer className='Footer-container'>
      <small>{props.copy}</small>
      <small>{props.year}</small>
      <hr></hr>
    </footer>
  );
}

export default Footer;
