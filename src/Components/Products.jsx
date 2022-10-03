import React from 'react';
import '../scss/products.scss';

const Products = ({ data }) => {
  return (
    <div className="products">
      {data ? (
        data.map(({ id, category, imgUrl, name, price, weight, pieces }) => (
          <div className='card' key={id}>
            <div className="card__wrapper">
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
        ))
      ) : (
        <div className="products__empty">Что-то пошло не так...</div>
      )}
    </div>
  );
};

export default Products;
