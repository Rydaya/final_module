import React, { useEffect } from 'react';
import useFilter from '../../hooks/useFilter.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, setFilteredData } from '../../store/slices/productsSlice.js';

import Categories from './sections/Categories/Categories.jsx';
import Sort from './sections/Sort/Sort.jsx';
import FetchBanner from './sections/FetchBanner/FetchBanner.jsx';
import Search from './sections/Search/Search.jsx';
import Card from '../../components/Card/Card.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import Modal from '../../components/Modal/Modal.jsx';

import loadLogo from '../../assets/images/loadLogo.png';
import errLogo from '../../assets/images/errLogo.png';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { currentData, status, filteredData } = useSelector((state) => state.products);
  const { firstContentIndex, lastContentIndex } = useSelector(
    (state) => state.pagination.paginationValues,
  );

  const filterValues = useSelector((state) => state.filter);
  const makeTotalFilter = useFilter(currentData, filterValues);

  useEffect(() => {
    dispatch(setFilteredData(makeTotalFilter()));
  }, [currentData, filterValues, dispatch, makeTotalFilter])

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
        <div className={status === 'sucsess' ? 'products' : ''}>
          {status === 'error' && (
            <FetchBanner src={errLogo} alt="error" title="Что-то пошло не так..." />
          )}
          {status === 'loading' && <FetchBanner src={loadLogo} alt="loading" title="Loading..." />}
          {status === 'sucsess' &&
            filteredData
              .slice(firstContentIndex, lastContentIndex)
              .map((item) => <Card {...item} key={item.id} />)}
        </div>
        <Pagination />
        <Modal />
      </div>
    </>
  );
};

export default Home;
