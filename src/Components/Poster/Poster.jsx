import React from 'react';
import './Poster.scss';
import MBerjonFormal from '../../images/MBerjonFormal.jpg';
import { animated, useSpring } from 'react-spring';

function Poster() {
  const animation = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { duration: 500 },
  });

  return (
    <div className='poster-container'>
      <div>
        <animated.img style={animation} className='poster-img' src={MBerjonFormal} alt='Foto de Margarita Berjón'></animated.img>;
      </div>
      <div className='poster-content' style={animation}>
        <animated.h1>Margarita Berjón</animated.h1>
        <animated.h2>Frontend UX developer</animated.h2>
      </div>
    </div>
  );
}

export default Poster;
