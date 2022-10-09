
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {setModalActive} from '../../store/slices/modalSlice.js';

import './modal.scss';

const Modal = () =>{
    const dispatch = useDispatch();
    const {modalActive, clickedCard} = useSelector(state => state.modal);
    
    return(
        <div className={modalActive ? 'modal modal__active' : 'modal'} onClick={() => dispatch(setModalActive())}>
            {clickedCard ? clickedCard.map(({ id, category, imgUrl, name, price, weight, pieces, ingredients }) => (
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