import React from 'react';
import './FrontEndCard.scss';
// import personajes from '../../../images/buscador-personajes.png';
import personajesNF from '../../../images/buscador-personajes-NF.png';
import * from '../../../images/ProjectsICons';

function FrontEndCard() {
  return (
    <section className='frontend-container'>
      <div className='frond-end-card'>
        <h2>Buscador de personajes</h2>
        <img className='project-img' src={personajesNF}></img>
        <div className='logos-container'>
          <img className='logo-tecnology' src='https://banner2.cleanpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg'></img>
          <img className='logo-tecnology' src='https://e7.pngegg.com/pngimages/33/52/png-clipart-sass-logo-cascading-style-sheets-scalable-graphics-less-text-logo.png'></img>
        </div>
        <p>La aplicación permite encontrar un personaje por nombre, realizar un filtro por tipo además de buscar por número de episodios en los que aprece un personaje.</p>
        <button>Proyecto</button>
        <button>Repositorio</button>
      </div>
    </section>
  );
}

export default FrontEndCard;
