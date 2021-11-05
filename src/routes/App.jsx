import React from 'react';
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { RecoveryPassword } from '../containers/RecoveryPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Layout>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/recovery-password' element={<RecoveryPassword />}></Route>
          <Route path='*' element={<NotFound />} />
        </Layout>
      </Routes>
    </BrowserRouter>
  );
};

export { App };
