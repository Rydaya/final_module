import React, { useState } from 'react';

const Form = ({ title, handleClick, children, register, errors }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <fieldset>
        <legend htmlFor="email">E-mail</legend>
        <input
          {...register('email', {
            required: 'Поле обязательно для заполнения.',
            pattern: {
              value: /^[^@]+@[^.]+.[a-z]{2,4}$/i,
              message: 'Введите валидный email.',
            },
          })}
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && <span className="errors">{errors?.email?.message || 'Ошибка.'}</span>}
      </fieldset>
      <fieldset>
        <legend htmlFor="password">Пароль</legend>
        <input
          {...register('password', {
            required: 'Поле обязательно для заполнения.',
            minLength: {
              value: 6,
              message: 'Минимальное количество символов - 6',
            },
          })}
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors?.password && (
          <span className="errors">{errors?.password?.message || 'Ошибка.'}</span>
        )}
      </fieldset>
      {children}
      <div>
        <button className="btn btn_orange" onClick={(e) => handleClick(e, email, password)}>
          {title}
        </button>
      </div>
    </form>
  );
};

export default Form;
