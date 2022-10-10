import React from 'react';

import { useDispatch } from 'react-redux';
import {
  recountTotalValues,
  addItem,
  minusItem,
  removeItem,
} from '../../../../store/slices/cartSlice';

import minusIcon from '../../../../assets/images/minusIcon.png';
import plusIcon from '../../../../assets/images/plusIcon.png';
import deleteIcon from '../../../../assets/images/deleteIcon.png';

import './cartItem.scss';

const CartItem = ({ id, category, imgUrl, count, name, price, weight, pieces }) => {
  const dispatch = useDispatch();

  const onClickMinus = () => {
    count > 1 ? dispatch(minusItem(id)) : dispatch(removeItem(id));
    dispatch(recountTotalValues());
  };
  const onClickPlus = () => {
    dispatch(addItem({ id }));
    dispatch(recountTotalValues());
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
    dispatch(recountTotalValues());
  };

  return (
    <div className="cartItem">
      <div className="cartItem__img">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="cartItem__info">
        <h3>{name}</h3>
        <p className='p_grey'>
          {weight} {category === 'drinks' ? 'мл' : 'грамм'}, {pieces} шт
        </p>
      </div>
      <div className="cartItem__count">
        <button className="btn btn_orange" onClick={onClickMinus}>
          <img src={minusIcon} alt="decrease" />
        </button>
        <p>{count}</p>
        <button className="btn btn_orange" onClick={onClickPlus}>
          <img src={plusIcon} alt="increase" />
        </button>
      </div>
      <div className="price cartItem__price">{price * count} ₴</div>
      <div className="cartItem__delete">
        <button className="btn btn_orange" onClick={onClickRemove}>
          <img src={deleteIcon} alt="remove all" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
