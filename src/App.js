import React, { useState, useEffect } from 'react';

import Categories from './Components/Categories.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import Sort from './Components/Sort.jsx';
import Card from './Components/Card.jsx';
import Modal from './Components/Modal.jsx';

import './scss/app.scss';

import loadLogo from './icons/loadLogo.png';
import errLogo from './icons/errLogo.png';

function App() {
  const [currentData, setCurrentData] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Все');
  const [modalActive, setModalActive] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://633a0563e02b9b64c60bbf90.mockapi.io/products')
      .then((res) => {
        if (!res.ok) throw new Error('Что-то пошло не так...');
        else return res.json();
      })
      .then((res) => setCurrentData(res))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  console.log(currentData);

  const changeCategory = (e) => {
    setActiveCategory(e.target.innerText);
  };

  const openCardModal = (clickedId) => {
    setClickedCard([currentData.find((item) => item.id === clickedId)]);
    setModalActive(true);
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Categories changeCategory={changeCategory} />
        <div className="container">
          <div className="container__header">
            <h1>{activeCategory}</h1>
            <Sort />
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
              currentData.map((item) => (
                <Card key={item.id} {...item} openCardModal={openCardModal} />
              ))}
          </div>
          <Modal isActive={modalActive} setIsActive={setModalActive} array={clickedCard} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


