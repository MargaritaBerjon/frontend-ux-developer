import React from 'react';
import './Menu.scss';
import { Link } from 'react-scroll';

function Menu() {
  return (
    <nav className='menu-container'>
      <p className='logo'>M.B</p>
      <div className='menu-content'>
      <Link to="AboutMe" spy={true}
      smooth={true}
      hashSpy={true}
      offset={-70}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={true}>Sobre mí</Link>
        <Link to="projects" spy={true}
      smooth={true}
      hashSpy={true}
      offset={-70}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={true}>Proyectos</Link>
         <Link to="Contact" spy={true}
      smooth={true}
      hashSpy={true}
      offset={70}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={true}>Contacto</Link>
      </div>
    </nav>
  );
}

export default Menu;
