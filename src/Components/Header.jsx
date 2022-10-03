import React from 'react';
import '../scss/header.scss';
import logo from '../icons/logo.png';
import cartLogo from '../icons/cart.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__info">
        <div className="header__logo">
          <img width={80} src={logo} alt="logo" />
        </div>
        <div className="header__contacts">
          <div className="header__phone">
            Наш телефон <span>966</span>
          </div>
          <div className="header__schedule">Работаем с 10 до 22</div>
        </div>
      </div>
      <div className="header__form">
        <input className="header__search" />
        <div className="header__cart">
          <a className="header__btn btn">
            <img src={cartLogo} alt="cart" width={24} />
            <span>0</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
