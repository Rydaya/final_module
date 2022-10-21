import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recountTotalValues, clearItems } from '../../store/slices/cartSlice.js';

import Orders from '../../components/Orders/Orders.jsx';
import Total from '../../components/Total/Total.jsx';
import Empty from '../../components/Empty/Empty.jsx';

import './cart.scss';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);

  const onClickClear = () => {
    dispatch(clearItems());
    dispatch(recountTotalValues());
  };

  if (!totalPrice) {
    return <Empty title='Корзина пуста :(' type='emptyCart'/>;
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
        <div className="cart__orders">
          {items.map((item) => (
            <Orders key={item.id} {...item} type='cart'/>
          ))}
        </div>
        <div className="cart__bottom">
          <Total/>
          <div className="cart__bottom_btns">
            <Link to="/">
              <button className="btn btn_grey">Вернуться назад</button>
            </Link>
            <Link to='/signIn'>
              <button className="btn btn_orange">Оформить заказ</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
