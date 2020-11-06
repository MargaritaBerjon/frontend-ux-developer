import React from 'react';
import './FrontEndCard.scss';

function FrontEndCard(props) {
  return (
    <div className='frond-end-card'>
      <h2>{props.project.name}</h2>
      <div className='frond-end-card-content'>
        <div className='logos-container'>
          {props.project.languages.map((image, i) => (
            <img className='logo-tecnology' key={i} src={image} alt='Icono tecnología'></img>
          ))}
        </div>
        <img className='project-img' src={props.project.image} alt={props.project.name}></img>
        <div className='logos-container'>
          <a href={props.project.project} target='_blank' rel='noreferrer'>
            <button>Proyecto</button>
          </a>
          <a href={props.project.repository} target='_blank' rel='noreferrer'>
            <button>Repositorio</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FrontEndCard;
