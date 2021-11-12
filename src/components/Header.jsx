import React, { useContext } from 'react';
import '@styles/Header.scss';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import { Menu } from '@components/Menu';
import { AppContext } from '@context/AppContext';
import { MyOrder } from '@containers/MyOrder';

const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const [toggleOrders, setToggleOrders] = React.useState(false);

  const { state } = useContext(AppContext);

  const handleToggle = (state) => {
    state[1](!state[0]);
  };

  return (
    <nav>
      <img src={menu} alt='menu' className='menu' onClick={() => handleToggle([toggle, setToggle])} />

      <div className='navbar-left'>
        <img src={logo} alt='logo' className='nav-logo' />

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

      <div className='navbar-right'>
        <ul>
          <li className='navbar-email' onClick={() => handleToggle([toggle, setToggle])}>
            lenin@selecta.com
          </li>
          <li className='navbar-shopping-cart' onClick={() => handleToggle([toggleOrders, setToggleOrders])}>
            <img src={shoppingCart} alt='shopping cart' />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export { Header };
