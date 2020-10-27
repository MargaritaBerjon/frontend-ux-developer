import React from 'react';
import './Poster.scss';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import MBerjonFormal from '../../images/MBerjonFormal.jpg';

function Poster() {
  return (
    <div className='poster-container'>
      <div>
        <Flip left duration={2000}>
          <img className='poster-img' src={MBerjonFormal} alt='Foto de Margarita Berjón'></img>;
        </Flip>
      </div>
      <div className='poster-content'>
        <Fade right duration={2000}>
          <h1>Margarita Berjón</h1>
        </Fade>
        <Fade left duration={2000}>
          <h2>Frontend UX developer</h2>
        </Fade>
      </div>
    </div>
  );
}

export default Poster;
