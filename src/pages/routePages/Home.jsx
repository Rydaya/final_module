import React, { useState, useEffect } from 'react';

import Categories from '../Categories.jsx';
import Sort from '../Sort.jsx';
import Search from '../Search.jsx';
import Card from '../../components/Card.jsx';
import Modal from '../../components/Modal.jsx';

import loadLogo from '../../icons/loadLogo.png';
import errLogo from '../../icons/errLogo.png';

import '../../scss/home.scss';

const Home = () => {
  const [currentData, setCurrentData] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryId, setCategoryId] = useState('all');
  const [sortType, setSortType] = useState({
    name: 'умолчанию',
    sortProperty: 'all',
    order: 'asc',
  });
  const [searchValue, setSearchValue] = useState('');
  const currentSearchValue = searchValue.toLowerCase();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://633a0563e02b9b64c60bbf90.mockapi.io/products?${
      categoryId !== 'all' ? `category=${categoryId}` : ''
    }&${
      sortType.sortProperty !== 'all'
        ? `sortBy=${sortType.sortProperty.replace('-', '')}&order=${sortType.order}`
        : ''
    }
    `)
      .then((res) => {
        if (!res.ok) throw new Error('Что-то пошло не так...');
        else return res.json();
      })
      .then((res) => setCurrentData(res))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  const openCardModal = (clickedId) => {
    setClickedCard([currentData.find((item) => item.id === clickedId)]);
    setModalActive(true);
  };

  return (
    <>
      <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
      <div className="container">
        <div className="container__header">
          <Search value={searchValue} onChangeValue={(val) => setSearchValue(val)} />
          <Sort value={sortType} onChangeSort={(obj) => setSortType(obj)} />
        </div>
        <div className="products">
          {!!error && (
            <div className="message">
              <img src={errLogo} alt="error" />
              <p>{error}</p>
            </div>
          )}
          {isLoading && (
            <div className="message">
              <img src={loadLogo} alt="loading" />
              <p>Loading...</p>
            </div>
          )}
          {!isLoading &&
            currentData
              .filter(({ name }) => (name.toLowerCase().includes(currentSearchValue) ? true : false))
              .map((item) => <Card key={item.id} {...item} openCardModal={openCardModal} />)}
        </div>
        <Modal isActive={modalActive} setIsActive={setModalActive} array={clickedCard} />
      </div>
    </>
  );
};

export default Home;
