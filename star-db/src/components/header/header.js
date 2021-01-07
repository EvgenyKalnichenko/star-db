import React from 'react';

const Header = () => {
    
    return(
        <header className='header'>
            <div className="header__logo">
                Star DB
            </div>
            <ul className='nav'>
                <li className='nav__item'><a href="#">People</a></li>
                <li className='nav__item'><a href="#">Planets</a></li>
                <li className='nav__item'><a href="#">Starships</a></li>
            </ul>
        </header>
    )
}

export default Header;
