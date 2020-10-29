import React from 'react';
import './Poster.scss';
import MBerjonFormal from '../../images/MBerjonFormal.jpg';
import { animated } from 'react-spring';

function Poster(props) {
  return (
    <div className='poster-container'>
      <div>
        <animated.img style={props.FotoAnimation} className='poster-img' src={MBerjonFormal} alt='Foto de Margarita Berjón'></animated.img>
      </div>
      <div className='poster-content'>
        <animated.h1 style={props.H1Animation}>{props.name}</animated.h1>
        <animated.h2 style={props.H2Animation}>{props.description}</animated.h2>
      </div>
    </div>
  );
}

export default Poster;
