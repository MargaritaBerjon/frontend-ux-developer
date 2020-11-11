import React from 'react';
import './Poster.scss';
import MBerjonFormal from '../../images/MBerjonFormal.jpg';
import { Animated } from 'react-animated-css';
import 'animate.css/animate.min.css';

function Poster(props) {
  return (
    <div className='poster-container'>
      <Animated animationIn='fadeInDown'>
        <img className='poster-img' src={MBerjonFormal} alt='Foto de Margarita Berjón'></img>
      </Animated>
      <div className='poster-content'>
        <Animated animationIn='fadeInLeft'>
          <h1>{props.name}</h1>
        </Animated>
        <Animated animationIn='fadeInRight'>
          <h2>{props.description}</h2>
        </Animated>
      </div>
    </div>
  );
}

export default Poster;
