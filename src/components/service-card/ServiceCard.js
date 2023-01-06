import React from 'react';
import './service-card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServiceCard({title, description, icon}) {
  return (
    <div className="containerServiceCard">
      <div className="iconContainerServiceCard">
        <FontAwesomeIcon icon={icon} className='iconServiceCard' />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
