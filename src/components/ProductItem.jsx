import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import addCart from '@icons/bt_add_to_cart.svg';
import addedToCart from '@icons/bt_added_to_cart.svg';
import { AppContext } from '@context/AppContext';

const ProductItem = ({ product }) => {
  const { state, addToCart, removeFromCart } = useContext(AppContext);

  const handleAdd = (item) => {
    addToCart(item);
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const toggleCart = (item) => {
    if (state.cart.includes(item)) {
      handleRemove(item);
    } else {
      handleAdd(item);
    }
  };

  return (
    <div className='ProductItem'>
      <img src={product.images[0]} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>${product.price},00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => toggleCart(product)}>
          <img src={state.cart.includes(product) ? addedToCart : addCart} alt='' />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };

// TODO: Resolve the issue with the addedToCart icon
