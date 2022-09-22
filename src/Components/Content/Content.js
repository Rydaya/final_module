import React from "react";
import './content.scss';
import data from '../../data.js';

const Content = () => {

    return(
        <div className="content">
            <div className="products">
                {
                    data.map(({id, category, imgUrl, name, price, weight, pieces}) => (
                        <div className="card" key={id}>
                            <div className="card__info">
                                <div className="card__img">
                                    <img src={imgUrl} alt={name} width={190}/>
                                </div>
                                <div className="card__title">{name}</div>
                                <div className="card__about">{weight} {category === 'drinks' ? 'мл' : 'грамм'}, {pieces} шт</div>
                            </div>
                            <div className="card__order">
                                <div className="card__price">{price} ₴</div>
                                {/* Создать отдельный компонент для кнопки */}
                                <button className="card__btn">Хочу!</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Content;