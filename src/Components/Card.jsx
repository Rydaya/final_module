import React from 'react';
import '../scss/card.scss';

const Card = ({ id, category, imgUrl, name, price, weight, pieces, openCardModal }) => {
  return (
    <div className="card">
      <div className="card__wrapper" onClick={() => openCardModal(id)}>
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
          <button className="btn card__btn" onClick={(e) => e.stopPropagation()}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;