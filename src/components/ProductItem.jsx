import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addCart from '@icons/bt_add_to_cart.svg';
import addedToCart from '@icons/bt_added_to_cart.svg';
import { AppContext } from '@context/AppContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const [addedCart, setAddedCart] = React.useState(false);

  const handleClick = (item) => {
    addToCart(item);
    setAddedCart(!addedCart);
  };

  return (
    <div className='ProductItem'>
      <img src={product.images[0]} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>${product.price},00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addedCart ? addedToCart : addCart} alt='' />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
