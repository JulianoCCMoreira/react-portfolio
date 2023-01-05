import React from "react";
import "./hero.css"

import profile from "../../assets/Hero Image.png";

function Hero() {
  return (
    <div className="container">

      <div className="heroAbout">
        <p className="heroAboutHello">Olá, meu nome é</p>
        <h1 className="heroAboutName">Juliano <strong>Colere</strong>.</h1>
        <p className="heroAboutText">Software Developer com mais de +2 anos de experiência na indústria de desenvolvimento de software. Proficiente em Java, Spring Boot, Flutter e React Native.</p>
      </div>

      <div className="heroImageContainer">
        <img src={profile} alt="Profile" className="heroImage"/>
      </div>

    </div>
  );
}

export default Hero;
