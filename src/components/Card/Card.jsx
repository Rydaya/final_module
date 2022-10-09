import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalActive, setСlickedCard } from '../../store/slices/modalSlice.js';
import { recountTotalValues, addItem } from '../../store/slices/cartSlice.js';

import './card.scss';

const Card = ({ item, currentData }) => {
  const { id, category, imgUrl, name, price, weight, pieces } = item;
  const dispatch = useDispatch();

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
          <div className="card__title">{name}</div>
          <div className="card__about">
            {weight} {category === 'drinks' ? 'мл' : 'грамм'}, {pieces} шт
          </div>
        </div>
        <div className="buyblock card__buyblock">
          <div className="price card__price">{price} ₴</div>
          <button className="btn card__btn" onClick={(e) => onClickAddToCart(e)}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
