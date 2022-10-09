import React, { useState, useEffect, useCallback } from 'react';
import useFilter from './hooks/useFilter.jsx';
import { useSelector } from 'react-redux';

import Categories from './sections/Categories/Categories.jsx';
import Sort from './sections/Sort/Sort.jsx';
import FetchBanner from './sections/FetchBanner/FetchBanner.jsx';
import Search from './sections/Search/Search.jsx';
import Card from '../../components/Card/Card.jsx';
import Modal from '../../components/Modal/Modal.jsx';

import loadLogo from '../../assets/images/loadLogo.png';
import errLogo from '../../assets/images/errLogo.png';

import './home.scss';

const Home = () => {
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const totalFilter = useFilter();

  const filterValues = useSelector((state) => state.filter);


  const makeTotalFilter = useCallback(
    () => totalFilter(currentData, filterValues),
    [filterValues, currentData],
  );
 
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Categories />
      <div className="container">
        <div className="container__header">
          <Search />
          <Sort />
        </div>
        <div className="products">
          {!!error && <FetchBanner src={errLogo} alt="error" title={error} />}
          {isLoading && <FetchBanner src={loadLogo} alt="loading" title="Loading..." />}
          {!isLoading &&
            makeTotalFilter(currentData, filterValues).map((item) => (
              <Card item={item} currentData={currentData} key={item.id} />
            ))}
        </div>
        <Modal />
      </div>
    </>
  );
};

export default Home;
