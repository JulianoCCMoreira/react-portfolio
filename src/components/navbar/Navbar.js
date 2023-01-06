import React from 'react';
import './navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  return (
    <nav className='navbar'>
      <h2>Juliano.</h2>

      <div className="sections">
        <a href="#tecnologias"><p>Tecnologias</p></a>
        <a href="#experiencias"><p>Experiências</p></a>
        <a href="#conquistas"><p>Conquistas</p></a>
        <a href="#projetos"><p>Projetos</p></a>
        <a href="https://dev.to/julianoccmoreira" target="_blank" rel="noreferrer"><p>Blog</p></a>
      </div>

      <button className='button'>Currículo</button>

      <FontAwesomeIcon icon={faBars} className="menuIcon" />
    </nav>
  );
}

export default Navbar;
