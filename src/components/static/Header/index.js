import React from 'react';
import './style.scss';


function Header() {
  console.log('render header');
  
  return (
        <header className='header'>
            <ul className='header__menu'>
                <li><a className='header__link' href='/'>Home</a></li>
                <li><a className='header__link' href='/posts'>Posts</a></li>
                <li><a className='header__link' href='/favorit'>Favorite</a></li>
            </ul>  
        </header>
  );
}

export default Header;
