import React from 'react';
import EmptyCart from './sections/EmptyCart/EmptyCart.jsx';

import minusIcon from '../../assets/images/minusIcon.png';
import plusIcon from '../../assets/images/plusIcon.png';
import deleteIcon from '../../assets/images/deleteIcon.png';

import './cart.scss';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <div className="cart">
        <div className="cart__top">
          <div className="cart__title">Корзина</div>
          <button className="cart__clear">Очистить корзину</button>
        </div>
        <div className="cart__items">
          <div className="cart__item">
            <div className="cart__item_img">
              <img src="" alt="" />
            </div>
            <div className="cart__item_info">
              <h3>Название</h3>
              <p>Описание</p>
            </div>
            <div className="cart__item_count">
              <button className="btn">
                <img src={minusIcon} alt="decrease" />
              </button>
              <p>1</p>
              <button className="btn">
                <img src={plusIcon} alt="increase" />
              </button>
            </div>
            <div className="cart__item_price">999</div>
            <div className="cart__item_delete">
              <button className="btn">
                <img src={deleteIcon} alt="remove all" />
              </button>
            </div>
          </div>
          <div className="cart__item">
            <div className="cart__item_img">
              <img src="" alt="" />
            </div>
            <div className="cart__item_info">
              <h3>Название</h3>
              <p>Описание</p>
            </div>
            <div className="cart__item_count">
              <button className="btn">
                <img src={minusIcon} alt="decrease" />
              </button>
              <p>1</p>
              <button className="btn">
                <img src={plusIcon} alt="increase" />
              </button>
            </div>
            <div className="cart__item_price">999</div>
            <div className="cart__item_delete">
              <button className="btn">
                <img src={deleteIcon} alt="remove all" />
              </button>
            </div>
          </div>
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom_total">
            <div>
              Всего продуктов: <span>5</span>
            </div>
            <div>
              Cумма заказа: <span>999</span>
            </div>
          </div>
          <div className="cart__bottom_btns">
            <Link to="/">
              <button className="cart__bottom_back">Вернуться назад</button>
            </Link>
            <button className="btn cart__bottom_pay">Оформить заказ</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
