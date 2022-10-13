import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="enterPoint">
      <form>
        <fieldset>
          <legend htmlFor="login">
            Логин
          </legend>
          <input id="login" name="login" placeholder="Логин"/>
        </fieldset>
        <fieldset>
          <legend htmlFor="password">
            Пароль
          </legend>
          <input id="password" name="password" placeholder="Пароль"/>
        </fieldset>
        <div className="enterPoint__btns">
          <button className="btn btn_orange enterPoint__submit" type="submit">
            Вход в личный кабинет
          </button>
          <Link to='/signUp'>
            <button className="btn btn_grey">Регистрация</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
