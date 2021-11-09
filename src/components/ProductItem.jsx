import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const [cart, setCart] = useState([]);

  const handleCart = () => {
    setCart([]);
  };

  return (
    <div className='ProductItem'>
      <img src={product.images[2]} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>${product.price},00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleCart}>
          <img src={addToCart} alt='' />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
