import React from 'react';
import './FrontProjects.scss';
import FrontEndCard from './FrontendCard/FrontEndCard.jsx';

function Projects(props) {
  return (
    <section className={props.frontendContainer}>
      {props.projects.map((project, i) => (
        <FrontEndCard key={i} project={project}></FrontEndCard>
      ))}
    </section>
  );
}

export default Projects;
