import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../../../store/slices/filterSlice.js';

import alllogo from '../../../../assets/images/alllogo.png';
import setlogo from '../../../../assets/images/setlogo.png';
import rolllogo from '../../../../assets/images/rolllogo.png';
import sashimilogo from '../../../../assets/images/sashimilogo.png';
import saladlogo from '../../../../assets/images/saladlogo.png';
import drinkslogo from '../../../../assets/images/drinkslogo.png';

import './categories.scss';

const navData = [
  { logo: alllogo, name: 'Все', id: 'all' },
  { logo: setlogo, name: 'Сеты', id: 'set' },
  { logo: rolllogo, name: 'Роллы', id: 'roll' },
  { logo: sashimilogo, name: 'Сашими', id: 'sushi' },
  { logo: saladlogo, name: 'Салаты', id: 'salad' },
  { logo: drinkslogo, name: 'Напитки', id: 'drinks' },
];

const Categories = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);

  return (
    <aside className="categories">
      <nav className="categories__nav">
        <ul className="categories__list">
          {navData.map(({ logo, name, id }) => (
            <li
              key={name}
              id={id}
              className={categoryId === id ? 'categories__item active' : 'categories__item'}
              onClick={() => dispatch(setCategoryId(id))}
            >
              <img src={logo} alt={name} width={30} />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Categories;
