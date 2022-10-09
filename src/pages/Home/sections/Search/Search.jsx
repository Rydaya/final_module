import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../../store/slices/filterSlice.js';

import debounce from 'lodash.debounce';

const Search = () => {
  const [localValue, setLocalValue] = useState('');
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value))
    }, 500),
    [],
  );

  const onChangeInput = (e) => {
    setLocalValue(e.target.value);
    updateSearchValue(e.target.value);
  }

  return (
    <input
      className="container__search"
      value={localValue}
      onChange={onChangeInput}
    />
  );
};

export default Search;
