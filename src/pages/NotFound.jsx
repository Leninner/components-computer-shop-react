import React from 'react';

const NotFound = () => {
  return (
    <section className='w-screen h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>
      <div className='flex flex-col items-center justify-center h-screen gap-3 text-white'>
        <h1 className='mb-12 font-bold text-9xl animate-ping'>404</h1>
        <h3 className='text-xl animate-pulse'>Está página no pudo ser encontrada</h3>
        <button className='notFound'>Vuelve al inicio</button>
      </div>
    </section>
  );
};

// TODO: Hacer una página de 404
export { NotFound };
