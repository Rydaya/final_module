import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recountTotalValues, clearItems } from '../../store/slices/cartSlice.js';

import CartItem from './sections/CartItem/CartItem.jsx';
import EmptyCart from './sections/EmptyCart/EmptyCart.jsx';

import './cart.scss';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalItems, items } = useSelector((state) => state.cart);

  const onClickClear = () => {
    dispatch(clearItems());
    dispatch(recountTotalValues());
  };

  if (!totalPrice) {
    return <EmptyCart />;
  }

  return (
    <>
      <div className="cart">
        <div className="cart__top">
          <h2 className="cart__title">Корзина</h2>
          <button className="btn btn_grey" onClick={onClickClear}>
            Очистить корзину
          </button>
        </div>
        <div className="cart__items">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom_total">
            <p>
              Всего продуктов: <span className="price">{totalItems}</span>
            </p>
            <p>
              Cумма заказа: <span className="price">{totalPrice} ₴</span>
            </p>
          </div>
          <div className="cart__bottom_btns">
            <Link to="/">
              <button className="btn btn_grey">Вернуться назад</button>
            </Link>
            <Link to="/signIn">
              <button className="btn btn_orange">Оформить заказ</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
