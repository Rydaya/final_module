import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalActive, setСlickedCard } from 'store/slices/modalSlice.js';
import { recountTotalValues, addItem } from 'store/slices/cartSlice.js';

import './card.scss';

const Card = ({ id, category, imgUrl, name, price, weight, pieces }) => {
  const dispatch = useDispatch();
  const { currentData } = useSelector((state) => state.products);

  const openCardModal = (currentData, id) => {
    dispatch(setModalActive());
    const clickedCard = [currentData.find((item) => item.id === id)];
    dispatch(setСlickedCard(clickedCard));
  };

  const onClickAddToCart = (e) => {
    e.stopPropagation();
    const item = { id, category, name, price, imgUrl, weight, pieces };
    dispatch(addItem(item));
    dispatch(recountTotalValues());
  };

  return (
    <div className="card">
      <div className="card__wrapper" onClick={() => openCardModal(currentData, id)}>
        <div className="card__info">
          <div className="card__img">
            <img src={imgUrl} alt={name} />
          </div>
          <h3 className="card__title">{name}</h3>
          <div className="p_grey card__about">
            {weight} {category === 'drinks' ? 'мл' : 'грамм'}, {pieces} шт
          </div>
        </div>
        <div className="buyblock card__buyblock">
          <div className="price card__price">{price} ₴</div>
          <button className="btn btn_orange card__btn" onClick={(e) => onClickAddToCart(e)}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
