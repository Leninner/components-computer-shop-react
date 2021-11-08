import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { RecoveryPassword } from '../pages/RecoveryPassword';
import { Checkout } from '../pages/Checkout';
import { CreateAccount } from '../pages/CreateAccount';
import { NotFound } from '../pages/NotFound';
import { MyAccount } from '../pages/MyAccount';
import { NewPassword } from '../pages/NewPassword';
import { Orders } from '../pages/Orders';
import '../styles/global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/recovery-password' element={<RecoveryPassword />} />
          <Route path='/pay' element={<Checkout />} />
          <Route paath='/new-account' element={<CreateAccount />} />
          <Route paath='/account' element={<MyAccount />} />
          <Route paath='/new-password' element={<NewPassword />} />
          <Route paath='/carrito' element={<Orders />} />
          <Route path='/send-email' element={<SendEmail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
