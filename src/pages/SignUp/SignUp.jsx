import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice.js';

import Form from '../../components/Form/Form.jsx';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e, email, password) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        alert('У вас уже есть аккаунт!')
        navigate('/signIn');
      });
  };

  return (
    <div className="enterPoint">
      <Form title="Регистрация" handleClick={handleRegister} />
      <div className="enterPoint__footer">
        <p className="p_grey">Уже есть аккаунт?</p>
        <Link to="/signIn">Ко входу в аккаунт</Link>
      </div>
    </div>
  );
};

export default SignUp;
