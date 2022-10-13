import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="enterPoint">
      <form>
        <fieldset>
          <legend htmlFor="login">Логин</legend>
          <input type="text" id="login" name="login" placeholder="Логин" />
        </fieldset>
        <fieldset>
          <legend htmlFor="tel">Номер телефона</legend>
          <input type="tel" id="tel" name="tel" value="+380" />
        </fieldset>
        <fieldset>
          <legend htmlFor="password">Пароль</legend>
          <input type="password" id="password" name="password" placeholder="Пароль" />
        </fieldset>
        <fieldset>
          <legend htmlFor="doublePassword">Повторите пароль</legend>
          <input
            type="password"
            id="doublePassword"
            name="doublePassword"
            placeholder="Повторите пароль"
          />
        </fieldset>
        <div className="enterPoint__btns">
          <button className="btn btn_orange enterPoint__submit" type="submit">
            Зарегистрироваться
          </button>
          <Link to='/signIn'>
            <button className="btn btn_grey">Вернуться ко входу</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
