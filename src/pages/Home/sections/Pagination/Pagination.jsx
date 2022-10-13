import React, { useEffect } from 'react';
import usePagination from '../../hooks/usePagination.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { setPaginationValues } from '../../../../store/slices/paginationSlice.js';

import './pagination.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const {currentData} = useSelector(state => state.products);
  
  const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, setPage, totalPages } =
    usePagination({
      contentPerPage: 8,
      count: currentData.length,
    });

  useEffect(() => {
    dispatch(setPaginationValues({ firstContentIndex, lastContentIndex }));
  }, [firstContentIndex, lastContentIndex]);

  return (
    <div className="pagination">
      <p className="p_grey">
        {page}/{totalPages}
      </p>
      <button className="btn btn_grey pagination__page" onClick={prevPage}>
        &larr;
      </button>
      {[...Array(totalPages).keys()].map((el) => (
        <button
          onClick={() => setPage(el + 1)}
          key={el}
          className={`btn ${page === el + 1 ? 'btn_orange' : 'btn_grey'}`}
        >
          {el + 1}
        </button>
      ))}
      <button className="btn btn_grey pagination__page" onClick={nextPage}>
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
