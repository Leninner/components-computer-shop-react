import React, { useContext, useState } from 'react';
import { OrderItem } from '@components/OrderItem';
import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg';
import { AppContext } from '@context/AppContext';

const MyOrder = () => {
  const { state, toggleOrdersHandler, toggleOrders } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (acumulador, currentValue) => acumulador + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <aside className='MyOrder'>
      <div className='title-container' onClick={() => toggleOrdersHandler()}>
        <img src={flechita} alt='arrow' />
        <p className='title'>My order</p>
      </div>
      <div className='my-order-content'>
        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()},00</p>
        </div>
        <button className='primary-button'>Checkout</button>
        <div className='orders-container'>
          {state.cart.map((item) => (
            <OrderItem product={item} key={`order-item-${Math.random() + item.id}`} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export { MyOrder };
