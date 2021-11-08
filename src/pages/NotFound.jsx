import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <section className='page404'>
      <div className='content info'>
        <h1 className=''>404</h1>
        <h3 className=''>Esta página no pudo ser encontrada</h3>
        <button className='notFound'>Vuelve al inicio</button>
      </div>
    </section>
  );
};

export { NotFound };
