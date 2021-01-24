import React from 'react';
import { Link } from "react-router-dom";

const Header = ({onServiceChange}) => {
    
    return(
        <header className='header'>
            <Link to="/" className="header__logo">
                Star DB
            </Link>
            <ul className='nav'>
                <li className='nav__item'>
                    <Link to="/people/">People</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/planets/">Planets</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/starships/">Starships</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/login/">Login</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/secret/">Secret</Link>
                </li>
            </ul>
            <button
                className='btn btn-primary btn-sm'
                onClick={onServiceChange}>Change Service</button>
        </header>
    )
};

export default Header;
