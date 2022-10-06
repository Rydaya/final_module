import React, { useState } from 'react';
import alllogo from '../icons/alllogo.png';
import setlogo from '../icons/setlogo.png';
import rolllogo from '../icons/rolllogo.png';
import sashimilogo from '../icons/sashimilogo.png';
import saladlogo from '../icons/saladlogo.png';
import drinkslogo from '../icons/drinkslogo.png';
import '../scss/categories.scss';

const navData = [
  { logo: alllogo, type: 'Все', id: 'all' },
  { logo: setlogo, type: 'Сеты', id: 'set' },
  { logo: rolllogo, type: 'Роллы', id: 'roll' },
  { logo: sashimilogo, type: 'Сашими', id: 'sushi' },
  { logo: saladlogo, type: 'Салаты', id: 'salad' },
  { logo: drinkslogo, type: 'Напитки', id: 'drinks' },
];

const Categories = ({ value, onChangeCategory }) => {

  return (
    <aside className="categories">
      <nav className="categories__nav">
        <ul className="categories__list">
          {navData.map(({ logo, type, id }) => (
            <li
              key={type}
              id={id}
              className={value === id ? 'categories__item categories__active' : 'categories__item'}
              onClick={() => onChangeCategory(id)}
            >
              <img src={logo} alt={type} width={30} />
              <p>{type}</p>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Categories;
