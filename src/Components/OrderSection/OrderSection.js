import React from "react";
import './orderSection.scss';
import basket from '../../icons/basket.png';

const OrderSection = () =>{

    return(
        <section className="order">
            <div className="order__user">
                <div className="order__user_title">Войдите</div>
                <div className="order__user_text">Чтобы отслеживать заказы и проверять количество бонусов</div>
                <input className="order__user_login" placeholder="Логин"/>
                <input className="order__user_password" placeholder="Пароль"/>
            </div>
            <div className="order__basket">
                <div className="order__basket_logo">
                    <img src={basket} alt='basketlogo' width={40}/>
                    <div className="order__basket_title">Ваша корзина пуста.</div>
                    <div className="order__basket_text">Добавьте же скорее что-нибудь!</div>
                </div>
            </div>
        </section>
    )
}

export default OrderSection;