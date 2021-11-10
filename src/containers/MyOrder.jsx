import React, { useContext } from 'react';
import { OrderItem } from '@components/OrderItem';
import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg';
import { AppContext } from '@context/AppContext';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  return (
    <aside className='MyOrder'>
      <div className='title-container'>
        <img src={flechita} alt='arrow' />
        <p className='title'>My order</p>
      </div>
      <div className='my-order-content'>
        {state.cart.map((item) => (
          <OrderItem product={item} key={`order-item-${item.id}`} />
        ))}
        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className='primary-button'>Checkout</button>
      </div>
    </aside>
  );
};

export { MyOrder };
