import React from 'react';
import { Link } from 'react-router-dom';

import notFoundLogo from '../../assets/images/notFoundLogo.png';
import './notFound.scss';

const NotFound = () => {
  return (
    <div className="notFound">
      <img className="notFound__img" src={notFoundLogo} alt="not found" />
      <h2 className="notFound__title">Ошибка 404</h2>
      <h3 className="notFound__subtitle">
        Тут живет наш кот. И он в замешательстве, ведь ты зашел на его территорию!
      </h3>
      <p className="p_grey notFound__text">Возвращайся к вкусным роллам:</p>
      <Link to="/">
        <button className="btn btn_orange notFound__btn">Вернуться!</button>
      </Link>
    </div>
  );
};

export default NotFound;
