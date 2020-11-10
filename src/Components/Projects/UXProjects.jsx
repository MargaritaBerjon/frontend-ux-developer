import React, { useState } from 'react';
import './UXProjects.scss';
import Lime from '../../images/lime.jpg';
import DecideMad from '../../images/decidemad.jpg';

function UXProjects() {
  const [isVisibleMoreInfo, setIsVisibleMoreInfo] = useState(false);
  const [contentButton, setContentButton] = useState('Ver más');

  return (
    <section className='UX-container'>
      <div className='UX-card'>
        <h2>Caso Lime</h2>
        <div className='UX-card-content'>
          <img className='UX-project-img' src={Lime} alt='proyecto lime'></img>
          {isVisibleMoreInfo ? (
            <div className='UX-more-info-content'>
              <h3>Reto</h3>
              <p>Ayudar a grupos de personas que quieren divertirse juntos asegurando que nadie se quede sin patinete</p>
              <h3>Técnicas utilizadas</h3>
              <h4>Fase de investigación</h4>
              <ul>
                <li>Investigación secundaria</li>
                <li>Entrevistas de campo</li>
                <li>Cuestionarios</li>
              </ul>
              <h4>Fase de ideación</h4>
              <ul>
                <li>Brain – writing</li>
                <li>Crazy 8</li>
                <li>Idea Selection</li>
                <li>Story telling</li>
                <li>Value Proposition Canvas</li>
              </ul>
              <h3>Solución</h3>
              <p>Actualización del app con un nuevo feature que permite reservar varios patinetes desde una sola cuenta en un punto de encuentro predeterminado.</p>
            </div>
          ) : (
            <div className='UX-card-button'></div>
          )}
          <div className='UX-card-button'>
            <button onClick={() => setIsVisibleMoreInfo((old) => !old)}>Ver más</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UXProjects;
