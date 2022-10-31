import React from 'react';
import imgEmpresa from '../../assets/empresa.svg';

import './About.css';

const About = () => {
  return (
    <section className="aboutSection">
      <img className="aboutBg" src={imgEmpresa} alt="Imagem com gráficos" />
      <div className="aboutContent">
        <h2 className="aboutH2">
          <span className="letterA">A</span> empresa
        </h2>
        <p className="aboutText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          maximus tempor tellus non cursus. Donec nisl metus, sagittis at
          convallis at, laoreet eu nulla. Duis mattis luctus tellus at
          venenatis.
          <strong>Fusce molestie neque pulvinar magna ultrices,</strong> vel
          lobortis mauris mattis. Etiam suscipit consequat dolor, dignissim
          dictum neque pulvinar pharetra. Sed mattis euismod lorem at egestas.
        </p>
        <button className="btnMore">Saber mais</button>
      </div>
    </section>
  );
};

export default About;
