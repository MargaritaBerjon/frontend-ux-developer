import React from 'react';
import './Menu.scss';

function Menu() {
  return (
    <nav className='menu-container'>
      <p className='logo'>M.B</p>
      <div className='menu-content'>
        <a href='#AboutMe'> Sobre mí</a>
        <a href='#Proyects'>Proyectos</a>
        <a href='#Contact'>Contacto</a>
      </div>
    </nav>
  );
}

export default Menu;
