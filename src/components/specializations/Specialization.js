import React from 'react';
import './specialization.css'

import {faGlobe, faMobile, faPenNib} from "@fortawesome/free-solid-svg-icons"

import ServiceCard from '../service-card/ServiceCard';

function Specialization() {
  return (
    <div className="containerSpecialization">
      <div className="titleSpecialization">
        <p className='services'>Serviços</p>
        <h1>Serviços prestados</h1>
      </div>

      <div className="serviceCardContainer">
        <ServiceCard title="Aplicações web" icon={faGlobe} description="Desenvolvimento completo de aplicações web modernas."/>
        <ServiceCard title="Aplicativos móveis" icon={faMobile} description="Desenvolvimento de aplicativos híbridos modernos e performáticos."/>
        <ServiceCard title="Design" icon={faPenNib} description="Design de interfaces para aplicações web, desktop e móvel."/>
      </div>

    </div>
  );
}

export default Specialization;
