import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/slices/filterSlice';

import logo from '../../assets/images/logo.png';
import cartLogo from '../../assets/images/cart.png';
import accountLogo from '../../assets/images/accountLogo.png';

import './header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);

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
      <div className="header__actions">
        <div className="header__cart">
          <Link to="/cart">
            <button className="header__btnCart header__btn btn" onClick={() => dispatch(setSearchValue(''))}>
              <img src={cartLogo} alt="cart" width={24} />
              <span>{totalItems}</span>
            </button>
          </Link>
        </div>
        <div className="header__account">
          <button className="header__btn btn">
            <img src={accountLogo} alt="account" width={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
