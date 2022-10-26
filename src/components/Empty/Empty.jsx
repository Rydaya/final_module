import React from 'react';
import { Link } from 'react-router-dom';

import emptyLogo from 'assets/images/emptyLogo.png';
import './empty.scss';

const Empty = ({ title, type }) => {
  return (
    <div className="empty">
      <h2>{title}</h2>
      <p className="empty__text p_grey">Для того, чтобы выбрать, перейди на главную страницу.</p>
      {type === 'emptyCart' ? <img src={emptyLogo} alt="Empty logo" /> : <></>}
      <Link to="/">
        <button className="btn btn_orange empty__btn">Посмотреть меню</button>
      </Link>
    </div>
  );
};

export default Empty;
