import React, { useEffect, useCallback } from 'react';
import useFilter from './hooks/useFilter.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/slices/productsSlice.js';

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
  const totalFilter = useFilter();

  const dispatch = useDispatch();
  const { currentData, status } = useSelector((state) => state.products);

  const filterValues = useSelector((state) => state.filter);
  const makeTotalFilter = useCallback(
    () => totalFilter(currentData, filterValues),
    [filterValues, currentData, totalFilter],
  );

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchProducts());
    }
    fetchData();
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <>
      <Categories />
      <div className="home">
        <div className="home__header">
          <Search />
          <Sort />
        </div>
        <div className={status==='sucsess' ? 'products' : ''}>
          {status === 'error' && (
            <FetchBanner src={errLogo} alt="error" title="Что-то пошло не так..." />
          )}
          {status === 'loading' && <FetchBanner src={loadLogo} alt="loading" title="Loading..." />}
          {status === 'sucsess' &&
            makeTotalFilter(currentData, filterValues).map((item) => (
              <Card {...item} key={item.id} />
            ))}
        </div>
        <Modal />
      </div>
    </>
  );
};

export default Home;
