import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from 'store/slices/filterSlice.js';

import debounce from 'lodash.debounce';

import './search.scss';

const Search = () => {
  const [localValue, setLocalValue] = useState('');
  const dispatch = useDispatch();

  const updateSearchValue = useMemo(
    () =>
      debounce((value) => {
        dispatch(setSearchValue(value));
      }, 500),
    [dispatch],
  );

  const onChangeInput = (e) => {
    setLocalValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <input
      className="search"
      value={localValue}
      onChange={onChangeInput}
      placeholder="Введите название блюда"
    />
  );
};

export default Search;
