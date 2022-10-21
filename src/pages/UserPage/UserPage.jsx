import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/slices/userSlice.js';

import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import { useAuth } from '../../hooks/useAuth.jsx';
import { getCartFromLS } from '../../utils/getCartFromLS.js';

import Orders from '../../components/Orders/Orders.jsx';
import Total from '../../components/Total/Total.jsx';
import Empty from '../../components/Empty/Empty.jsx';

import unknown from '../../assets/images/unknown.png';
import './userPage.scss';

const UserPage = () => {
  const dispatch = useDispatch();
  const [userPhoto, setUserPhoto] = useState(unknown);
  const { email, name, photo, phone, token } = useAuth();
  const auth = getAuth();

  useEffect(() => {
    if (photo) {
      let url =
        'https://firebasestorage.googleapis.com/v0/b/final-module-65c00.appspot.com/o/' +
        photo +
        '?alt=media';
      setUserPhoto(url);
    }
  }, [photo]);

  const onSelectImageHandler = (files) => {
    const file = files[0];
    const storage = getStorage();
    const storageRef = ref(storage, email);
    uploadBytes(storageRef, file).then((snapshot) => {
      updateProfile(auth.currentUser, { photoURL: email });
      window.location.reload();
    });
  };

  const onSingOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      window.location.reload();
    });
  };

  return token ? (
    <div className="userPage">
      <h1>Добро пожаловать, {name}!</h1>
      <div className="userPage__user">
        <div className="userPage__foto">
          <div className="userPage__img">
            <img src={userPhoto} alt="userPhoto" />
          </div>
          <label htmlFor="file">
            <p>+ Изменить фото</p>
          </label>
          <input
            type="file"
            id="file"
            name="file"
            multiple
            onChange={(e) => onSelectImageHandler(e.target.files)}
          />
        </div>
        <div className="userPage__info">
          <p>
            E-mail: <span className="p_grey">{email}</span>
          </p>
          <p>
            Телефон: <span className="p_grey">{phone}</span>
          </p>
          <button className="btn btn_grey userPage__exit" onClick={() => onSingOut()}>
            Выйти
          </button>
        </div>
      </div>
      {getCartFromLS().length !== 0 ? (
        <>
          <div className="userPage__orders">
            <h3>Ваш заказ:</h3>
            {getCartFromLS().map((item) => (
              <Orders key={item.id} {...item} type="account" />
            ))}
            <Total />
          </div>
          <div className="userPage__btns">
            <Link to="/cart">
              <button className="btn btn_grey">Вернуться к корзине</button>
            </Link>
            <button className="btn btn_orange">Сделать заказ</button>
          </div>
        </>
      ) : (
        <Empty title='У вас еще нет заказов :('/>
      )}
    </div>
  ) : (
    <Navigate to="/signIn" />
  );
};

export default UserPage;
