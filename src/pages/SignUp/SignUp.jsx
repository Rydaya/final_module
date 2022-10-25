import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {useForm} from "react-hook-form";

import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAuth } from 'hooks/useAuth.jsx';
import { app } from 'services/firebaseService.js';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

import Form from 'components/Form/Form.jsx';

const SignUp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const db = getFirestore(app);
  const {token} = useAuth();

  async function handleRegister(formObject) {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, formObject.email, formObject.password);
      await updateProfile(userCredential.user, { displayName: name });
      await setDoc(doc(db, 'users', userCredential.user.email), {
        phone: phone
      });
      localStorage.setItem("token", userCredential.user.accessToken);
      window.location.reload();
    } catch (err) {
      alert(err);
    }
  }

  return !token ? (
    <div className="enterPoint">
      <Form title="Регистрация" handleClick={handleSubmit(handleRegister)} register={register} errors={errors}>
        <fieldset>
          <legend htmlFor="name">Имя</legend>
          <input
            {...register("name", {
              required: "Поле обязательно для заполнения.",
              minLength: {
                value: 2,
                message: "Минимальное количество символов - 2"
              },
              maxLength: {
                value: 25,
                message: "Максимальное количество символов - 25"
              }
            })}
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors?.name && <span className='errors'>{errors?.name?.message || "Ошибка."}</span>}
        </fieldset>
        <fieldset>
          <legend htmlFor="phone">Номер телефона</legend>
          <input
            {...register("phone", {
              required: "Поле обязательно для заполнения.",
              pattern: {
                value: /^[0-9]{12}$/i,
                message: "Введите валидный номер телефона с кодом странны."
              }
            })}
            type="tel"
            id="phone"
            name="phone"
            placeholder="380998898989"
            onChange={(e) => setPhone(parseInt(e.target.value))}
          />
          {errors?.phone && <span className='errors'>{errors?.phone?.message || "Ошибка."}</span>}
        </fieldset>
      </Form>
      <div className="enterPoint__footer">
        <p className="p_grey">Уже есть аккаунт?</p>
        <Link to="/signIn">Ко входу в аккаунт</Link>
      </div>
    </div>
  ) : (
    <Navigate to="/userPage" replace={true} />
  )
};

export default SignUp;