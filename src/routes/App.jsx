import React from 'react';
import { Layout } from '../containers/Layout';
import { Login } from '../pages/Login';
import { RecoveryPassword } from '../pages/RecoveryPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Checkout } from '../pages/Checkout';
import { CreateAccount } from '../pages/CreateAccount';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/recovery-password' element={<RecoveryPassword />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/recovery-password' element={<RecoveryPassword />} />
          <Route path='/recovery-password' element={<RecoveryPassword />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
