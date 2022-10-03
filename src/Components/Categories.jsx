import React from "react";
import alllogo from '../icons/alllogo.png';
import setlogo from '../icons/setlogo.png';
import rolllogo from '../icons/rolllogo.png';
import sashimilogo from '../icons/sashimilogo.png';
import saladlogo from '../icons/saladlogo.png';
import drinkslogo from '../icons/drinkslogo.png';
import '../scss/categories.scss';

const navData = [
    {logo: alllogo, type: 'Все', id: 'all'},
    {logo: setlogo, type: 'Сеты', id: 'set'},
    {logo: rolllogo, type: 'Роллы', id: 'roll'},
    {logo: sashimilogo, type: 'Сашими', id: 'sushi'},
    {logo: saladlogo, type: 'Салаты', id: 'salad'},
    {logo: drinkslogo, type: 'Напитки', id: 'drinks'},
];

const Categories = ({changeCategory}) => {

    return(
        <aside className="sidebar">
                <nav className="sidebar__nav">
                    <ul className="sidebar__list">
                        {navData.map(({logo, type, id}) => (
                                <li className="sidebar__item" key={type}>
                                    <img src={logo} alt={type} width={30} />
                                    <button onClick={changeCategory} className="sidebar__btn" id={id}>{type}</button>
                                </li>
                        ))}
                    </ul>
                </nav>
            </aside>
    )
}

export default Categories;