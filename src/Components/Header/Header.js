import React from "react";
import './header.scss';

const Header = () => {

    return(
        <header className="header">
            <div className="header__menu">
                <div className="header__info">
                    <div className="header__phone">Наш телефон <span>966</span></div>
                    <div className="header__schedule">Работаем с 10 до 22</div>
                </div>
                <input className="header__search"/>
            </div>
        </header>
    )
}

export default Header;