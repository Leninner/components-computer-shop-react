import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addCart from '@icons/bt_add_to_cart.svg';
import { AppContext } from '@context/AppContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className='ProductItem'>
      <img src={product.images[2]} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>${product.price},00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addCart} alt='' />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
