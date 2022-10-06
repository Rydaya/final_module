import React from 'react';
import '../scss/header.scss';
import logo from '../icons/logo.png';
import cartLogo from '../icons/cart.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
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
      </Link>
      <Link to='/cart'>
        <div className="header__cart">
          <button className="header__btn btn">
            <img src={cartLogo} alt="cart" width={24} />
            <span>0</span>
          </button>
        </div>
      </Link>
    </header>
  );
};

export default Header;
