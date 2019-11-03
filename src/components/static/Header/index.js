import React from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';


function Header() {
  console.log('render header');
  
  return (
        <header className='header'>
            <ul className='header__menu'>
                <li><NavLink className='header__link' to='/'exact>Home</NavLink></li>
                <li><NavLink className='header__link' to='/posts'exact>Posts</NavLink></li>
                <li><NavLink className='header__link' to='/favorite'exact>Favorite</NavLink></li>

            </ul>  
        </header>
  );
}

export default Header;
