import React from 'react';
import './Poster.scss';
import MBerjon from '../../images/Margarita_Berjón_web.jpg';

import { Animated } from 'react-animated-css';
import 'animate.css/animate.min.css';

function Poster(props) {
  return (
    <div className='poster-container'>
      <Animated animationIn='fadeInDown' animationInDuration={2000}>
        <img className='poster-img' src={MBerjon} alt='Foto de Margarita Berjón'></img>
      </Animated>
      <div className='poster-content'>
        <Animated animationIn='fadeInLeft' animationInDuration={2000}>
          <h1>{props.name}</h1>
        </Animated>
        <Animated animationIn='fadeInRight' animationInDuration={2000}>
          <h2>{props.description}</h2>
        </Animated>
      </div>
    </div>
  );
}

export default Poster;
