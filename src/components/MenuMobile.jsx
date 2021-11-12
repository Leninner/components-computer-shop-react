import React from 'react';
import '@styles/MenuMobile.scss';
import { Menu } from '@components/Menu';

const MenuMobile = () => {
  return (
    <>
      <div className='MenuMobile-contenedor'>
        <h2>CATEGORIES</h2>
        <ul>
          <li>
            <a href='/'>All</a>
          </li>
          <li>
            <a href='/'>Clothes</a>
          </li>
          <li>
            <a href='/'>Electronics</a>
          </li>
          <li>
            <a href='/'>Furnitures</a>
          </li>
          <li>
            <a href='/'>Toys</a>
          </li>
          <li>
            <a href='/'>Others</a>
          </li>
        </ul>
      </div>
      <Menu />
    </>
  );
};

export { MenuMobile };
