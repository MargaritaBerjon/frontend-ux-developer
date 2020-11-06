import React from 'react';
import './Projects.scss';
import FrontEndCard from '../Projects/FrontendCard/FrontEndCard.jsx';

function Projects(props) {
  return (
    <section className='frontend-container'>
      {props.projects.map((project, i) => (
        <FrontEndCard key={i} project={project}></FrontEndCard>
      ))}
    </section>
  );
}

export default Projects;
