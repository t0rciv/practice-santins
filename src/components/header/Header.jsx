import React from 'react';
import Logo from '../../assets/logo.svg';

import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="container-menu-externo">
        <div className="div-menu">
          <img className="logo-menu-img" src={Logo} alt="Logo santins" />
          <nav>
            <div className="div-container-menu">
              <ul className="li-menu">
                <li>
                  <a className="link-menu" href="" hrfer="#">
                    A EMPRESA
                  </a>
                </li>
                <li>
                  <a className="link-menu" href="" hrfer="#">
                    Nossos fundos
                  </a>
                </li>
                <li>
                  <a className="link-menu" href="" hrfer="#">
                    Conteúdos
                  </a>
                </li>
                <li>
                  <a className="link-menu" href="" hrfer="#">
                    Contato
                  </a>
                </li>
              </ul>
              <div className="button-menu-container">
                <button className="btn-faça-login">Faça Login</button>
                <button className="btn-invista-agora">invista agora</button>
              </div>
            </div>
          </nav>
        </div>
        <div className="conteudo-banner">
          <h1>
            Neque porro <br />
            quisquam est qui
            <br />
            dolorem ipsum...
          </h1>
          <button className="btn-saber-mais-banner">Saber mais</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
