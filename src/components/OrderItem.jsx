import React from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png';
import { AppContext } from '@context/AppContext';

const OrderItem = ({ product }) => {
  const { removeFromCart } = React.useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className='OrderItem'>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price},00</p>
      <img src={close} alt='close' onClick={() => handleRemove(product)} />
    </div>
  );
};

export { OrderItem };
