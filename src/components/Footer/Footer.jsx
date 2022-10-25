import React from 'react';
import instagram from 'assets/images/instagram.png';
import facebook from 'assets/images/facebook.png';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__description">
        {/* Это будет один компонент */}
        <div className="footer__about">
          <div className="footer__title">О компании</div>
          <div className="footer__text">
            Мы предоставляем возможность любому харьковчанину насладиться вкуснейшими суши, не
            выходя из дома. Не нужно проделывать долгий путь к заведению, достаточно зайти на сайт
            или позвонить нам по телефону, выбрать понравившиеся блюда и удобный способ оплаты
            заказа.
          </div>
        </div>
        <div className="footer__about">
          <div className="footer__title">Доставка и оплата</div>
          <ul className="footer__list">
            <li>Сумма минимального заказа 500 гривен. Бесплатная доставка в любой район города</li>
            <li>Оплатить заказ можно наличными курьеру или онлайн картой</li>
            <li>Условия и время доставки согласовываются с оператором по телефону</li>
          </ul>
        </div>
      </div>
      <div className="footer__contacts">
        <div className="footer__logo">
          <a href="instagram.com">
            <img src={instagram} alt="instagramLink" />
          </a>
          <a href="facebook.com">
            <img src={facebook} alt="facebookLink" />
          </a>
        </div>
        <div className="footer__info">Тел: +38(093)170 1 966</div>
        <div className="footer__info">61072 м. Харків, проспект Науки 27Б</div>
        <div className="footer__info">© 966, 2022</div>
      </div>
    </footer>
  );
};

export default Footer;
