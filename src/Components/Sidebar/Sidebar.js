import React from "react";
import logo from '../../icons/logo.png';
import setlogo from '../../icons/setlogo.png';
import rolllogo from '../../icons/rolllogo.png';
import sashimilogo from '../../icons/sashimilogo.png';
import saladlogo from '../../icons/saladlogo.png';
import drinkslogo from '../../icons/drinkslogo.png';
import './sidebar.scss';

const navData = [
    {logo: setlogo, name: 'Сеты'},
    {logo: rolllogo, name: 'Роллы'},
    {logo: sashimilogo, name: 'Сашими'},
    {logo: saladlogo, name: 'Салаты'},
    {logo: drinkslogo, name: 'Напитки'},
];

const Sidebar = () => {

    return(
        <aside className="sidebar">
                <div className="sidebar__logo">
                    <img width={200} src={logo} alt='logo' />
                </div>
                <div className="sidebar__stick"></div>
                <nav className="sidebar__nav">
                    <ul className="sidebar__list">
                        {navData.map(item => (
                                <li className="sidebar__item" key={item.name}>
                                    <img src={item.logo} alt={item.name} width={30} />
                                    <div>{item.name} </div>
                                </li>
                        ))}
                    </ul>
                </nav>
            </aside>
    )
}

export default Sidebar;