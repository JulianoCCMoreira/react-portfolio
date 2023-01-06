import React from 'react';
import './hero.css'

import profile from '../../assets/dev.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faWhatsapp, faTelegram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <div className='containerHero'>

      <div className='heroAbout'>
        <div>
          <p className='heroAboutHello'>Olá, meu nome é</p>
          <h1 className='heroAboutName'>Juliano <strong>Colere</strong>.</h1>
          <p className='heroAboutText'>Software Developer com mais de +2 anos de experiência na indústria de desenvolvimento de software. Proficiente em Java, Spring Boot, Flutter e React Native.</p>
        </div>

        <div className='heroAboutIconsContainer'>
          <a href="https://github.com/JulianoCCMoreira" rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faGithub}  className='socialMediaIcon'/></a>
          <a href="https://www.linkedin.com/in/julianoccmoreira/" rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='socialMediaIcon' /></a>
          <a href="https://wa.me/5541999311991?text=Ol%C3%A1%20Juliano.%20Tudo%20bem%3F" rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faWhatsapp} className='socialMediaIcon' /></a>
          <a href="https://t.me/JulianoCCM" rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faTelegram} className='socialMediaIcon' /></a>
        </div>
      
      </div>

      <div className='heroImageContainer'>
        <img src={profile} alt='Profile' className='heroImage'/>
      </div>

    </div>
  );
}

export default Hero;
