import React from 'react';
import './ProjectsMenu.scss';

function ProjectsMenu(props) {
  return (
    <nav className='menu-projects-container' id='display'>
      <a href='#Frontend' id='Frontend' onClick={() => props.changeProjects(true)}>
        Frontend
      </a>
      <a href='#UX' id='UX' onClick={() => props.changeProjects(false)}>
        UX
      </a>
    </nav>
  );
}

export default ProjectsMenu;
