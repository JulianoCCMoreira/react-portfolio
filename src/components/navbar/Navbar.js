import React from 'react';
import './navbar.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <nav className='navbar'>
      <h2>Juliano.</h2>

      <div className="sections">
        <a href=""><p>Tecnologias</p></a>
        <a href=""><p>Experiências</p></a>
        <a href=""><p>Conquistas</p></a>
        <a href=""><p>Projetos</p></a>
        <a href=""><p>Blog</p></a>
      </div>

      <button>Currículo</button>
    </nav>
  );
}

export default Navbar;
