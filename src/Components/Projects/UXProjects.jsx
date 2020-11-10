import React, { useState } from 'react';
import './UXProjects.scss';
import Lime from '../../images/lime.jpg';
import DecideMad from '../../images/decidemad.jpg';

function UXProjects() {
  const [isVisibleMoreInfo, setIsVisibleMoreInfo] = useState(false);
  const [isVisibleMoreInfoTwo, setIsVisibleMoreInfoTwo] = useState(false);

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
              <p>Actualización del app con un nuevo feature que permite reservar varios patinetes desde una sola cuenta en un punto de encuentro predeterminado</p>
            </div>
          ) : (
            <></>
          )}
          <div className='UX-card-button'>
            <button onClick={() => setIsVisibleMoreInfo((old) => !old)}>{isVisibleMoreInfo ? 'Cerrar' : 'Más info'}</button>
          </div>
        </div>
      </div>
      <div className='UX-card'>
        <h2>Caso Decide Madrid</h2>
        <div className='UX-card-content'>
          <img className='UX-project-img' src={DecideMad} alt='proyecto lime'></img>
          {isVisibleMoreInfoTwo ? (
            <div className='UX-more-info-content'>
              <h3>Reto</h3>
              <p>Aumentar la participación de jóvenes entre 24-30 años mediante la mejora en la experiencia de voto</p>
              <h3>Técnicas utilizadas</h3>
              <h4>Fase de investigación</h4>
              <ul>
                <li>Investigación secundaria</li>
                <li>Entrevistas de campo</li>
                <li>Cuestionarios</li>
              </ul>
              <h4>Fase de ideación</h4>
              <ul>
                <li>Business Model Canvas Concept map</li>
                <li>Brain writing</li>
                <li>Storyboard</li>
                <li>Customer Journey</li>
                <li>Project focusing</li>
                <li>Sitemap</li>
                <li>Noticia futura</li>
              </ul>
              <h3>Solución</h3>
              <h4>Digital</h4>
              <p>Remodelación de la web actual más sencilla y accesible para el usuario .</p>
              <h4>Física</h4>
              <p>Instalación de artefacto para en el que podrás “Botar para apoyar tú propuesta”</p>
            </div>
          ) : (
            <></>
          )}
          <div className='UX-card-button'>
            <button onClick={() => setIsVisibleMoreInfoTwo((oldTwo) => !oldTwo)}>{isVisibleMoreInfoTwo ? 'Cerrar' : 'Más info'}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UXProjects;
