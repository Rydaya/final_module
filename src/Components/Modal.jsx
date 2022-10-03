
import React from "react";
import '../scss/modal.scss';

const Modal = ({isActive, setIsActive, array}) =>{
    return(
        <div className={isActive ? 'modal modal__active' : 'modal'} onClick={() => setIsActive(false)}>
            {array ? array.map(({ id, category, imgUrl, name, price, weight, pieces, ingredients }) => (
                <div className="modal__content" key={id} onClick={e => e.stopPropagation()}>
                    <div className="modal__img">
                        <img src={imgUrl} alt={name} width={250}/>
                    </div>
                    <div className="modal__info">
                        <div className="modal__title">{name}</div>
                        <div className="modal__about">{weight} {category === "drinks" ? "мл" : "грамм"}, {pieces} шт</div>
                        <div className="buyblock modal__buyblock">
                            <div className="price modal__price">{price} ₴</div>
                            <button className="btn modal__btn" onClick={e => e.stopPropagation()}>Добавить</button>
                        </div>
                        <div className="modal__desc">Состав: {ingredients}</div>
                    </div>
                </div>
            )) : <></>}
        </div>
    )
}

export default Modal;