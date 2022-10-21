import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/slices/filterSlice.js';
import { recountTotalValues } from '../../store/slices/cartSlice.js';

import logo from '../../assets/images/logo.png';
import cartLogo from '../../assets/images/cart.png';
import accountLogo from '../../assets/images/accountLogo.png';

import './header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const { totalItems, items } = useSelector((state) => state.cart);
  const location = useLocation();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
    dispatch(recountTotalValues());
  }, [items, dispatch]);

  return (
    <header className="header">
      <Link to="/">
        <div className="header__info">
          <div className="header__logo">
            <img width={80} src={logo} alt="logo" />
          </div>
          <div className="header__contacts">
            <h3 className="header__phone">
              Наш телефон <span>966</span>
            </h3>
            <p className="p_grey">Работаем с 10 до 22</p>
          </div>
        </div>
      </Link>
      <div className="header__actions">
        <div className="header__cart">
          {location.pathname !== '/cart' &&(
            <Link to="/cart">
              <button
                className="header__btnCart header__btn btn btn_orange"
                onClick={() => dispatch(setSearchValue(''))}
              >
                <img src={cartLogo} alt="cart" width={24} />
                <span>{totalItems}</span>
              </button>
            </Link>
          )}
        </div>
        <div className="header__account">
          {location.pathname !== '/signIn' &&
            location.pathname !== '/signUp' &&
            location.pathname !== '/userPage' && (
              <Link to='/signIn'>
                <button className="header__btn btn btn_orange">
                  <img src={accountLogo} alt="account" width={24} />
                </button>
              </Link>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;
