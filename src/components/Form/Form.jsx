import React, { useState } from 'react';

const Form = ({ title, handleClick, children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <form>
        <fieldset>
          <legend htmlFor="email">E-mail</legend>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend htmlFor="password">Пароль</legend>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        {children}
        <div>
          <button
            className="btn btn_orange"
            onClick={(e) => handleClick(e, email, password)}
          >
            {title}
          </button>
        </div>
      </form>
  );
};

export default Form;
