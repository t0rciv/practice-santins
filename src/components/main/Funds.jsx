import React from 'react';
import Vector from '../../assets/vector.svg';

import './Funds.css';

const Funds = () => {
  return (
    <section className="fund">
      <div className="fundContainer">
        <div className="fundExternal">
          <div className="fundTitle">
            <div className="textH3">
              <h3 className="titleH3">Fundos</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                maximus tempor tellus non cursus. Donec nisl metus, sagittis at
                convallis at, laoreet eu nulla. Duis mattis luctus tellus at
                venenatis. Fusce molestie neque pulvinar magna ultrices, vel
                lobortis mauris mattis. Etiam suscipit consequat dolor,
                dignissim dictum neque pulvinar pharetra.
              </p>
            </div>
          </div>

          <div className="fundH2">
            <div className="textH2">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
          </div>
        </div>

        <div className="textContainer">
          <div className="fundCard">
            <img className="imgVector" src={Vector} alt="Icone dinheiro" />
            <h5 className="fundH5">FUNDO 1</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              maximus tempor tellus non cursus. Donec nisl metus, sagittis at
              convallis at, laoreet eu nulla. Duis mattis luctus tellus at
              venenatis. Fusce molestie neque pulvinar magna ultrices, vel
              lobortis mauris mattis.
            </p>
          </div>

          <div className="fundCard">
            <img className="imgVector" src={Vector} alt="Icone dinheiro" />
            <h5 className="fundH5">FUNDO 2</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              maximus tempor tellus non cursus. Donec nisl metus, sagittis at
              convallis at, laoreet eu nulla. Duis mattis luctus tellus at
              venenatis. Fusce molestie neque pulvinar magna ultrices, vel
              lobortis mauris mattis.
            </p>
          </div>

          <div className="fundCard card3">
            <img className="imgVector" src={Vector} alt="Icone dinheiro" />
            <h5 className="fundH5">FUNDO 3</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              maximus tempor tellus non cursus. Donec nisl metus, sagittis at
              convallis at, laoreet eu nulla. Duis mattis luctus tellus at
              venenatis. Fusce molestie neque pulvinar magna ultrices, vel
              lobortis mauris mattis.
            </p>
          </div>
          <div className="fundCard card4">
            <img className="imgVector" src={Vector} alt="Icone dinheiro" />
            <h5 className="fundH5">FUNDO 4</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              maximus tempor tellus non cursus. Donec nisl metus, sagittis at
              convallis at, laoreet eu nulla. Duis mattis luctus tellus at
              venenatis. Fusce molestie neque pulvinar magna ultrices, vel
              lobortis mauris mattis.
            </p>
          </div>
        </div>
        <button className="btnMore">Saber mais</button>
      </div>
    </section>
  );
};

export default Funds;
