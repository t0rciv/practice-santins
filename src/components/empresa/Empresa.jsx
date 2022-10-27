import React from 'react';
import imgEmpresa from '../../assets/empresa.svg';

import './Empresa.css';

const Empresa = () => {
  return (
    <section className="section-sobre-empresa">
      <img
        className="bg-sobre-empresa"
        src={imgEmpresa}
        alt="Imagem com gráficos"
      />
      <div className="conteudo-sobre-empresa">
        <h2 className="h2-sobre-empresa">
          <span className="letra-a-sobre-empresa">A</span> empresa
        </h2>
        <p className="paragrafo-sobre-empresa">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          maximus tempor tellus non cursus. Donec nisl metus, sagittis at
          convallis at, laoreet eu nulla. Duis mattis luctus tellus at
          venenatis.
          <strong>Fusce molestie neque pulvinar magna ultrices,</strong> vel
          lobortis mauris mattis. Etiam suscipit consequat dolor, dignissim
          dictum neque pulvinar pharetra. Sed mattis euismod lorem at egestas.
        </p>
        <button className="button-saber-mais">Saber mais</button>
      </div>
    </section>
  );
};

export default Empresa;
