import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from 'hooks/useAuth.jsx';

import Form from 'components/Form/Form.jsx';

const SignIn = () => {
  const { token } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();  

  const handleLogin = (formObject) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, formObject.email, formObject.password)
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
      <Form
        title="Войти"
        handleClick={handleSubmit(handleLogin)}
        register={register}
        errors={errors}
      />
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
