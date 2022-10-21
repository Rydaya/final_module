import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAuth } from '../../hooks/useAuth.jsx';
import { app } from '../../firebase.js';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

import Form from '../../components/Form/Form.jsx';

const SignUp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const db = getFirestore(app);
  const {token} = useAuth();

  async function handleRegister(e, email, password) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
      <Form title="Регистрация" handleClick={handleRegister}>
        <fieldset>
          <legend htmlFor="name">Имя</legend>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend htmlFor="phone">Номер телефона</legend>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(parseInt(e.target.value))}
          />
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