import React from 'react';
import Logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="externalMain">
        <div className="main">
          <img className="imgMain" src={Logo} alt="Logo santins" />
          <nav>
            <div className="containerMain">
              <ul className="liMain">
                <li>
                  <a className="linkMain" href="" hrfer="#">
                    A EMPRESA
                  </a>
                </li>
                <li>
                  <a className="linkMain" href="" hrfer="#">
                    Nossos fundos
                  </a>
                </li>
                <li>
                  <a className="linkMain" href="" hrfer="#">
                    Conteúdos
                  </a>
                </li>
                <li>
                  <a className="linkMain" href="" hrfer="#">
                    Contato
                  </a>
                </li>
              </ul>
              <div className="buttonsHeader">
                <button className="btnLogin">Faça Login</button>
                <button className="btnNow">invista agora</button>
              </div>
              <input type="checkbox" id="check" />
              <label for="check" class="btnCheck">
                <FontAwesomeIcon icon={faBars} />
              </label>
            </div>
          </nav>
        </div>
        <div className="banner">
          <h1>
            Neque porro <br />
            quisquam est qui
            <br />
            dolorem ipsum...
          </h1>
          <button className="btnMoreBanner">Saber mais</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
