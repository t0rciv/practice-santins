import React from 'react';
import Twitter from '../../assets/twitter.svg';
import Instagram from '../../assets/instagram.svg';
import Facebook from '../../assets/facebook.svg';
import Rodape from '../../assets/logo rodape.svg';

import './Footer.css';

const Footer = () => {
  return (
    <section className="footerSection">
      <div className="formCadastro">
        <h4>Inscreva-se na nossa Newsletter</h4>

        <div className="inputForm">
          <input
            type="email"
            value="contato@santins.com.br"
            name="Newsletter"
            className="inputNews"
          />
          <input type="button" value="Assinar Newsletter" className="btnNews" />
        </div>
      </div>
      <div className="footerContainer">
        <div className="footerLogo">
          <img src={Rodape} alt="Logo pequeno" />

          <p className="footerInfo">Lorem Ipsum</p>

          <div className="icons">
            <img src={Facebook} alt="Icone Facebook" />
            <img src={Instagram} alt="Icone Instagram" />
            <img src={Twitter} alt="Icone Twitter" />
          </div>

          <p className="footerRegister">© 2022 Santins</p>
        </div>
        <div className="menu">
          <div className="menuContato">
            <div className="menuIn">
              <h6 className="menuTitle">Menu</h6>
              <ul className="menuList">
                <li>A empresa</li>
                <li>Nossos fundos</li>
                <li>Conteúdos</li>
                <li>Contato</li>
              </ul>
            </div>
            <div className="contato">
              <h6 className="menuTitle">Contato</h6>
              <p>contato@santins.com.br</p>
            </div>
          </div>
          <p className="footerText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            maximus tempor tellus non cursus. Donec nisl metus, sagittis at
            convallis at, laoreet eu nulla. Duis mattis luctus tellus at
            venenatis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
