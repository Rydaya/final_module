import React from 'react';
import { Link } from 'react-router-dom';

import emptyCartLogo from '../../../../assets/images/emptyCartLogo.png';
import './emptyCart.scss';

const EmptyCart = () => {
  return (
    <div className="emptyCart">
      <h1 className="emptyCart__title">Корзина пуста :(</h1>
      <p className="emptyCart__text">Для того, чтобы заказать, перейди на главную страницу.</p>
      <img src={emptyCartLogo} alt="Empty cart logo" />
      <Link to="/">
        <button className="btn emptyCart__btn">Вернуться</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
