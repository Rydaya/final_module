import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice.js';

import Form from '../../components/Form/Form.jsx';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e, email, password) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate('/');
      })
      .catch(() => {
        alert('Такого пользователя не существует!');
        navigate('/signUp');
      });
  };

  return (
    <div className="enterPoint">
      <Form title="Войти" handleClick={handleLogin} />
      <div className="enterPoint__footer">
        <p className="p_grey">Ещё нет аккаунта?</p>
        <Link to="/signUp">Зарегистрируйся</Link>
      </div>
    </div>
  );
};

export default SignIn;
