import React from 'react';
import { Link, Navigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../../hooks/useAuth.jsx';

import Form from '../../components/Form/Form.jsx';

const SignIn = () => {
  const { token } = useAuth();

  const handleLogin = (e, email, password) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        localStorage.setItem('token', user.accessToken);
        window.location.reload();
      })
      .catch(() => {
        alert('Такого пользователя не существует!');
      });
  };

  return !token ? (
    <div className="enterPoint">
      <Form title="Войти" handleClick={handleLogin} />
      <div className="enterPoint__footer">
        <p className="p_grey">Ещё нет аккаунта?</p>
        <Link to="/signUp">Зарегистрируйся</Link>
      </div>
    </div>
  ) : (
    <Navigate to="/userPage" replace={true} />
  );
};

export default SignIn;
