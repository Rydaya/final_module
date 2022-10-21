import React from 'react';

import { useDispatch } from 'react-redux';
import {
  recountTotalValues,
  addItem,
  minusItem,
  removeItem,
} from '../../store/slices/cartSlice.js';

import minusIcon from '../../assets/images/minusIcon.png';
import plusIcon from '../../assets/images/plusIcon.png';
import deleteIcon from '../../assets/images/deleteIcon.png';

import './orders.scss';

const Orders = ({ id, category, imgUrl, count, name, price, weight, pieces, type }) => {
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
    <div className="orders">
      <div className="orders__img">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="orders__info">
        <h3>{name}</h3>
        <p className="p_grey">
          {weight} {category === 'drinks' ? 'мл' : 'грамм'}, {pieces} шт
        </p>
      </div>
      {type === 'cart' ? (
        <div className="orders__count">
          <button className="btn btn_orange" onClick={onClickMinus}>
            <img src={minusIcon} alt="decrease" />
          </button>
          <p>{count}</p>
          <button className="btn btn_orange" onClick={onClickPlus}>
            <img src={plusIcon} alt="increase" />
          </button>
        </div>
      ) : (
        <h3 className='p_grey'>{count} шт.</h3>
      )}
      <div className="price orders__price">{price * count} ₴</div>
      {type === 'cart' ? (
        <div className="orders__delete">
          <button className="btn btn_orange" onClick={onClickRemove}>
            <img src={deleteIcon} alt="remove all" />
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Orders;
