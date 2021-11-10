import React from 'react';
import { ProductItem } from '@components/ProductItem';
import '@styles/ProductList.scss';
import { useGetProducts } from '@hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className='main-container'>
      <div className='ProductList'>
        {products.map((product) => (
          <ProductItem key={product.id + Math.random} product={product} />
        ))}
      </div>
    </section>
  );
};

//NOTE: Otra forma de utilizar el custom hook
// const ProductList = () => {
//   return (
//     <section className='main-container'>
//       <div className='ProductList'>
//         {useGetProducts(API).map((product) => (
//           <ProductItem key={product.id} />
//         ))}
//       </div>
//     </section>
//   );
// };

export { ProductList };
