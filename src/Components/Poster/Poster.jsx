import React from 'react';
import './Poster.scss';
import MBerjonFormal from '../../images/MBerjonFormal.jpg';

function Poster() {
  return (
    <div className='poster-container'>
      <div>
        <img className='poster-img' src={MBerjonFormal} alt='Foto de Margarita Berjón'></img>;
      </div>
      <div className='poster-content'>
        <h1>Margarita Berjón</h1>
        <h2>Frontend UX developer</h2>
      </div>
    </div>
  );
}

export default Poster;
